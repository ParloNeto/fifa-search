package com.br.paulo.futsearch.services;

import com.br.paulo.futsearch.domain.Card;
import com.br.paulo.futsearch.repository.CardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CardService {

    @Autowired
    private CardRepository repository;

    public List<Card> findAll(){
        return repository.findAll();
    }
}
