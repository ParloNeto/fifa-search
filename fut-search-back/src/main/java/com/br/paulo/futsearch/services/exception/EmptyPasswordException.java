package com.br.paulo.futsearch.services.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.BAD_REQUEST)
public class EmptyPasswordException extends RuntimeException {

    public EmptyPasswordException() {
        super("A senha não pode estar vazia!");
    }

    public EmptyPasswordException(String ex) {
        super(ex);
    }
}
