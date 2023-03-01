package com.br.paulo.futsearch.services;

import com.br.paulo.futsearch.domain.Card;
import com.br.paulo.futsearch.repository.CardRepository;
import com.br.paulo.futsearch.services.exception.ObjectNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CardService {

    @Autowired
    private CardRepository repository;

    public List<Card> findAll(){
        return repository.findAll();
    }

    public Card findById(String id) {
        Optional<Card> obj = repository.findById(id);
        return obj.orElseThrow(() -> new ObjectNotFoundException("Objeto não encontrado"));
    }
}
