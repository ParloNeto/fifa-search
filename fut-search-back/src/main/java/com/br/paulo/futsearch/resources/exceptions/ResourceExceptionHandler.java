package com.br.paulo.futsearch.resources.exceptions;

import com.br.paulo.futsearch.services.exception.EmptyPasswordException;
import com.br.paulo.futsearch.services.exception.ObjectNotFoundException;
import com.br.paulo.futsearch.services.exception.RegisteredEmailException;
import com.br.paulo.futsearch.services.exception.RegisteredUsernameException;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestController;

@ControllerAdvice
@RestController
public class ResourceExceptionHandler {
@ExceptionHandler(ObjectNotFoundException.class)
    public ResponseEntity<StandardError> objectNotFound(ObjectNotFoundException e, HttpServletRequest request) {
        HttpStatus status = HttpStatus.NOT_FOUND;
        StandardError err = new StandardError(System.currentTimeMillis(), status.value(), e.getMessage(),
                request.getRequestURI());
        return ResponseEntity.status(status).body(err);
    }

    @ExceptionHandler(EmptyPasswordException.class)
    public ResponseEntity<StandardError> passwordEmptyValid(EmptyPasswordException e, HttpServletRequest request) {
        HttpStatus status = HttpStatus.BAD_REQUEST;
        StandardError err = new StandardError(System.currentTimeMillis(), status.value(), e.getMessage(),
                request.getRequestURI());
        return ResponseEntity.status(status).body(err);
    }

    @ExceptionHandler(RegisteredUsernameException.class)
    public ResponseEntity<StandardError> usernameNotValid(RegisteredUsernameException e, HttpServletRequest request) {
        HttpStatus status = HttpStatus.BAD_REQUEST;
        StandardError err = new StandardError(System.currentTimeMillis(), status.value(), e.getMessage(),
                request.getRequestURI());
        return ResponseEntity.status(status).body(err);
    }

    @ExceptionHandler(RegisteredEmailException.class)
    public ResponseEntity<StandardError> emailNotValid(RegisteredEmailException e, HttpServletRequest request) {
        HttpStatus status = HttpStatus.BAD_REQUEST;
        StandardError err = new StandardError(System.currentTimeMillis(), status.value(), e.getMessage(),
                request.getRequestURI());
        return ResponseEntity.status(status).body(err);
    }
}
