package com.br.paulo.futsearch.resources;

import com.br.paulo.futsearch.domain.CardTypeMapping;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/card-types")
public class CardTypeMappingController {

    private Map<String, CardTypeMapping.CardType> types = new HashMap<>();

    @GetMapping
    public ResponseEntity<Map<String, CardTypeMapping.CardType>> getAllTypes() {
        return ResponseEntity.ok(types);
    }
    @GetMapping("/{type}")
    public ResponseEntity<CardTypeMapping.CardType> getType(@PathVariable("type") String type) {
        CardTypeMapping.CardType cardType = types.get(type);
        if (cardType == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(cardType);
    }

    @PostMapping("/{type}")
    public ResponseEntity<?> addType(@PathVariable("type") String type, @RequestBody CardTypeMapping.CardType cardType) {
        if (types.containsKey(type)) {
            return ResponseEntity.badRequest().body("Type already exists");
        }
        types.put(type, cardType);
        return ResponseEntity.ok().build();
    }

    @PutMapping("/{type}")
    public ResponseEntity<?> updateType(@PathVariable("type") String type, @RequestBody CardTypeMapping.CardType cardType) {
        if (!types.containsKey(type)) {
            return ResponseEntity.notFound().build();
        }
        types.put(type, cardType);
        return ResponseEntity.ok().build();
    }

    @DeleteMapping("/{type}")
    public ResponseEntity<?> deleteType(@PathVariable("type") String type) {
        if (!types.containsKey(type)) {
            return ResponseEntity.notFound().build();
        }
        types.remove(type);
        return ResponseEntity.ok().build();
    }

}
