package com.br.paulo.futsearch.services.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.BAD_REQUEST)
public class RequiredObjectIsNullException extends RuntimeException{

    public RequiredObjectIsNullException() {
        super("Não é possível enviar um objeto nulo!");
    }
    public RequiredObjectIsNullException(String ex) {
        super(ex);
    }

    private static final long serialVersionUID = 1L;
}