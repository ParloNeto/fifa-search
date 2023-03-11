package com.br.paulo.futsearch.resources;

import java.util.List;

import com.br.paulo.futsearch.domain.TypeCard;
import com.br.paulo.futsearch.dto.TypeCardDTO;
import com.br.paulo.futsearch.repository.TypeCardRepository;
import com.br.paulo.futsearch.services.TypeCardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/types")

public class TypeCardResource {
        @Autowired
        private TypeCardService service;
        @Autowired
        private TypeCardRepository repository;

        @GetMapping
        public ResponseEntity<List<TypeCard>> getAllCards() {
            List<TypeCard> cards = service.findAll();
            return new ResponseEntity<>(cards, HttpStatus.OK);
        }

        @GetMapping("/{fifaVersion}")
        public ResponseEntity<List<TypeCard>> getCardsByFifaVersion(@PathVariable String fifaVersion) {
            List<TypeCard> cards = service.getCardsByFifaVersion(fifaVersion);
            return new ResponseEntity<>(cards, HttpStatus.OK);
        }

    @GetMapping("/{fifaVersion}/{cardType}")
    public ResponseEntity<TypeCard> getCardByFifaVersionAndCardType(
            @PathVariable("fifaVersion") String fifaVersion,
            @PathVariable("cardType") String cardType) {
        TypeCard card = repository.findByFifaVersionAndCardType(fifaVersion, cardType);
        if (card == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(card);
    }
        @PostMapping
        public ResponseEntity<TypeCard> saveCard(@RequestBody TypeCard card) {
            TypeCard savedCard = repository.save(card);
            return ResponseEntity.status(HttpStatus.CREATED).body(savedCard);
        }

        @DeleteMapping("/{id}")
        public ResponseEntity<Void> deleteCard(@PathVariable String id) {
            service.delete(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }


}
