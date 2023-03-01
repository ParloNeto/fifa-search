package com.br.paulo.futsearch.config;

import com.br.paulo.futsearch.domain.Card;
import com.br.paulo.futsearch.repository.CardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Configuration;

import java.util.Arrays;

@Configuration
public class Instantiation implements CommandLineRunner {

    @Autowired
    CardRepository cardRepository;

    @Override
    public void run(String... args) throws Exception {


    }
}
