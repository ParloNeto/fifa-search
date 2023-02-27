package com.br.paulo.futsearch.resources;

import com.br.paulo.futsearch.domain.AttributeCard;
import com.br.paulo.futsearch.domain.Card;
import com.br.paulo.futsearch.dto.CardDTO;
import com.br.paulo.futsearch.services.CardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping(value = "/cards")
public class CardResource {

    @Autowired
    private CardService service;

    @GetMapping
    public ResponseEntity<List<CardDTO>> findAll(){
        List<Card> list = service.findAll();
        List<CardDTO> listDto = list.stream().map(
                x -> new CardDTO(x)
        ).collect(Collectors.toList());
        return ResponseEntity.ok().body(listDto);
    }
}
