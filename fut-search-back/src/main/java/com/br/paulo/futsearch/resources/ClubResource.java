package com.br.paulo.futsearch.resources;

import com.br.paulo.futsearch.domain.Card;
import com.br.paulo.futsearch.domain.Nation;
import com.br.paulo.futsearch.dto.CardDTO;
import com.br.paulo.futsearch.services.CardService;
import com.br.paulo.futsearch.services.NationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping(value = "/nations")
public class NationResource {

    @Autowired
    private NationService service;

    @GetMapping
    public ResponseEntity<List<Nation>> findAll(){
        List<Nation> list = service.findAll();

        return ResponseEntity.ok().body(list);
    }
    @GetMapping("/{nation}")
    public ResponseEntity<Nation> findAll(@PathVariable("nation") String nation){
        Nation obj = service.findByNation(nation);
        return ResponseEntity.ok().body(obj);
    }

    @PostMapping
    public ResponseEntity<Void> insert(@RequestBody Nation nation) {
        Nation obj = nation;
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
    public ResponseEntity<Void> update(@RequestBody Nation nation, @PathVariable String id) {
        Nation obj = nation;
        obj.setId(id);
        obj = service.update(obj);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(obj.getId()).toUri();
        return ResponseEntity.noContent().build();
    }



    
}
