package com.br.paulo.futsearch.controller.impl;

import com.br.paulo.futsearch.controller.CardController;
import com.br.paulo.futsearch.data.v1.CardVO;
import com.br.paulo.futsearch.services.CardService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.ArraySchema;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;
@RestController
@RequestMapping(value = "/cards")
public class CardControllerImpl implements CardController {

    @Autowired
    private CardService service;

    public ResponseEntity<List<CardVO>> findAll(){
        List<CardVO> listCard = service.findAll();
        return ResponseEntity.ok().body(listCard);
    }

    public ResponseEntity<CardVO> findById(@PathVariable String id) {
        CardVO obj = service.findById(id);
        return ResponseEntity.ok().body(obj);
    }

    public ResponseEntity<CardVO> create(@RequestBody CardVO card) {
        CardVO obj = service.create(card);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
                .buildAndExpand(obj.getId()).toUri();
        return ResponseEntity.created(uri).build();
    }

    public ResponseEntity<CardVO> update(@RequestBody CardVO card, @PathVariable String id) {
        CardVO obj = service.update(card);
        return ResponseEntity.ok().body(obj);
    }

    public ResponseEntity<Void> delete(@PathVariable String id) {
        service.delete(id);
        return ResponseEntity.noContent().build();
    }
}
