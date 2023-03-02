package com.br.paulo.futsearch.resources;

import com.br.paulo.futsearch.domain.AttributeCard;
import com.br.paulo.futsearch.domain.Card;
import com.br.paulo.futsearch.dto.CardDTO;
import com.br.paulo.futsearch.services.CardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
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
    @GetMapping("/{id}")
    public ResponseEntity<CardDTO> findAll(@PathVariable String id){
        Card obj = service.findById(id);
        return ResponseEntity.ok().body(new CardDTO(obj));
    }

    @PostMapping
    public ResponseEntity<Void> insert(@RequestBody CardDTO cardDTO) {
        Card obj = service.fromDTO(cardDTO);
        obj = service.insert(obj);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(obj.getId()).toUri();
        return ResponseEntity.created(uri).build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable String id) {
        service.delete(id);
        return ResponseEntity.noContent().build();
    }

    @PutMapping("/{id}")
    public ResponseEntity<Void> update(@RequestBody CardDTO cardDTO, @PathVariable String id) {
        Card obj = service.fromDTO(cardDTO);
        obj.setId(id);
        obj = service.update(obj);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(obj.getId()).toUri();
        return ResponseEntity.noContent().build();
    }




}
