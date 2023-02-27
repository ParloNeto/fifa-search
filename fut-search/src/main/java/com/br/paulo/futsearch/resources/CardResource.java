package com.br.paulo.futsearch.resources;

import com.br.paulo.futsearch.domain.AttributeCard;
import com.br.paulo.futsearch.domain.Card;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping(value = "/cards")
public class CardResource {

    @GetMapping
    public ResponseEntity<List<Card>> findAll(){
        List<Card> cards = new ArrayList<>();
        AttributeCard stats = new AttributeCard(90, 64, 63, 53, 52, 52, 52);
        Card messi = new Card(1L,"fifa-17", "Lionel", "Messi", "Messi", "argentina", "PSG", "RW", "photo", stats);
        Card ronaldo = new Card(2L,"fifa-18", "Roger", "Machado", "Messi", "argentina", "PSG", "RW", "photo", stats);
        Card cris = new Card(3L,"fifa-17", "Ronaldo", "Dedeu", "Messi", "argentina", "PSG", "RW", "photo", stats);
        cards.add(cris);
        cards.add(ronaldo);
        cards.add(messi);
        return ResponseEntity.ok().body(cards);
    }
}
