package com.br.paulo.controller;

import com.br.paulo.model.AttributeCard;
import com.br.paulo.model.Card;
import com.br.paulo.repository.CardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping(value = "/cards")
public class CardController {

    @Autowired
    private CardRepository cardRepository;

    @GetMapping
    public ResponseEntity<List<Card>> getAllCards() {

        List<Card> cards = cardRepository.findAll();
        AttributeCard status = new AttributeCard(90, 85, 89, 91, 94, 54, 67);
        Card messi = new Card(1L, "fifa-17", "Lionel", "Messi", null,
                "brazil", "PSG", "RW", "title",
                status);
        Card ronaldo = new Card(2L, "fifa-17", "Lionel", "Messi", null,
                "brazil", "PSG", "RW", "title",
                status);
        cards.add(messi);
        cards.add(ronaldo);
        if (cards.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(cards, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Card> getCardById(@PathVariable Long id) {
        return ResponseEntity.of(cardRepository.findById(id));
    }

    @PostMapping
    public ResponseEntity<Card> createCard(@RequestBody Card card) {
        Card savedCard = cardRepository.save(card);
        return new ResponseEntity<>(savedCard, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Card> updateCard(@PathVariable Long id, @RequestBody Card card) {
        if (!cardRepository.existsById(id)) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        card.setId(id);
        Card savedCard = cardRepository.save(card);
        return new ResponseEntity<>(savedCard, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteCard(@PathVariable Long id) {
        if (!cardRepository.existsById(id)) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        cardRepository.deleteById(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
