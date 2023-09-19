package com.br.paulo.futsearch.resources;

import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

import com.br.paulo.futsearch.domain.auth.ERole;
import com.br.paulo.futsearch.domain.auth.Role;
import com.br.paulo.futsearch.domain.auth.User;
import com.br.paulo.futsearch.payload.request.LoginRequest;
import com.br.paulo.futsearch.payload.request.SignupRequest;
import com.br.paulo.futsearch.payload.response.JwtResponse;
import com.br.paulo.futsearch.payload.response.MessageResponse;
import com.br.paulo.futsearch.repository.RoleRepository;
import com.br.paulo.futsearch.repository.UserRepository;
import com.br.paulo.futsearch.services.UserDetailsImpl;
import com.br.paulo.futsearch.security.jwt.JwtUtils;


import com.br.paulo.futsearch.services.exception.EmptyPasswordException;
import com.br.paulo.futsearch.services.exception.RegisteredEmailException;
import com.br.paulo.futsearch.services.exception.RegisteredUsernameException;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/auth")
@Tag(name = "Authentication")
public class AuthResource {
    @Autowired
    AuthenticationManager authenticationManager;

    @Autowired
    UserRepository userRepository;

    @Autowired
    RoleRepository roleRepository;

    @Autowired
    PasswordEncoder encoder;

    @Autowired
    JwtUtils jwtUtils;

    @Operation(summary = "Authenticates a user and returns a token")
    @PostMapping("/signin")
    public ResponseEntity<?> authenticateUser(@Valid @RequestBody LoginRequest loginRequest) {

        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(loginRequest.getUsername(), loginRequest.getPassword()));

        SecurityContextHolder.getContext().setAuthentication(authentication);
        String jwt = jwtUtils.generateJwtToken(authentication);

        UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();
        List<String> roles = userDetails.getAuthorities().stream()
                .map(item -> item.getAuthority())
                .collect(Collectors.toList());

        return loggedinUser(userDetails, jwt, roles);
    }

    @PostMapping("/signup")
    @Operation(summary = "Create a user and save it in the database")
    public ResponseEntity<?> registerUser(@Valid @RequestBody SignupRequest signUpRequest) {

        if (userAlreadyExists(signUpRequest.getUsername()))
            throw new RegisteredUsernameException();

        if (emailAlreadyExists(signUpRequest.getEmail()))
            throw new RegisteredEmailException();

        if (passwordIsBlank(signUpRequest.getPassword()))
            throw new EmptyPasswordException();

        User user = new User(signUpRequest.getUsername(),
                signUpRequest.getEmail(),
                encoder.encode(signUpRequest.getPassword()));

        Set<String> strRoles = signUpRequest.getRoles();
        Set<Role> roles = new HashSet<>();

        if (strRoles == null) {
            Role userRole = roleRepository.findByName(ERole.ROLE_USER)
                    .orElseThrow(() -> new RuntimeException("Erro: Permissão não encontrada."));
            roles.add(userRole);
        } else {
            strRoles.forEach(role -> {
                switch (role) {
                    case "admin":
                        Role adminRole = roleRepository.findByName(ERole.ROLE_ADMIN)
                                .orElseThrow(() -> new RuntimeException("Erro: Permissão não encontrada."));
                        roles.add(adminRole);

                        break;
                    case "mod":
                        Role modRole = roleRepository.findByName(ERole.ROLE_MODERATOR)
                                .orElseThrow(() -> new RuntimeException("Erro: Permissão não encontrada."));
                        roles.add(modRole);

                        break;
                    default:
                        Role userRole = roleRepository.findByName(ERole.ROLE_USER)
                                .orElseThrow(() -> new RuntimeException("Erro: Permissão não encontrada."));
                        roles.add(userRole);
                }
            });
        }

        user.setRoles(roles);
        userRepository.save(user);

        return ResponseEntity.ok(new MessageResponse("Usuário registrado com sucesso!"));
    }

    public boolean userAlreadyExists(String username) {
        return userRepository.existsByUsername(username);
    }

    public boolean emailAlreadyExists(String email) {
        return userRepository.existsByEmail(email);
    }

    public boolean passwordIsBlank(String password) {
        return password.isBlank();
    }

    public ResponseEntity<JwtResponse> loggedinUser(UserDetailsImpl userDetails, String jwt, List<String> roles) {
        return ResponseEntity.ok(new JwtResponse(jwt,
                userDetails.getId(),
                userDetails.getUsername(),
                userDetails.getEmail(),
                roles));
    }
}
