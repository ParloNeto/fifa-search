package com.br.paulo.futsearch.services.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.BAD_REQUEST)
public class RegisteredEmailException extends RuntimeException {

    public RegisteredEmailException() {
        super("E-mail já cadastrado!");
    }

    public RegisteredEmailException(String ex) {
        super(ex);
    }
}
