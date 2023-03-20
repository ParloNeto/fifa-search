package com.br.paulo.futsearch.resources;

import com.br.paulo.futsearch.domain.Club;
import com.br.paulo.futsearch.domain.Nation;
import com.br.paulo.futsearch.services.ClubService;
import com.br.paulo.futsearch.services.NationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping(value = "/clubs")
public class ClubResource {

    @Autowired
    private ClubService service;

    @GetMapping
    public ResponseEntity<List<Club>> findAll(){
        List<Club> list = service.findAll();

        return ResponseEntity.ok().body(list);
    }
    @GetMapping("/{club}")
    public ResponseEntity<Club> findAll(@PathVariable("club") String club){
        Club obj = service.findByNation(club);
        return ResponseEntity.ok().body(obj);
    }

    @PostMapping
    public ResponseEntity<Void> insert(@RequestBody Club club) {
        Club obj = club;
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
    public ResponseEntity<Void> update(@RequestBody Club club, @PathVariable String id) {
        Club obj = club;
        obj.setId(id);
        obj = service.update(obj);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(obj.getId()).toUri();
        return ResponseEntity.noContent().build();
    }



    
}
