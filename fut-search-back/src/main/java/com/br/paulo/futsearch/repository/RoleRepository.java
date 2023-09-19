package com.br.paulo.futsearch.repository;

import java.util.Optional;

import com.br.paulo.futsearch.domain.auth.ERole;
import com.br.paulo.futsearch.domain.auth.Role;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface RoleRepository extends MongoRepository<Role, String> {

    Optional<Role> findByName(ERole name);
}