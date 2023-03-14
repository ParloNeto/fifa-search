package com.br.paulo.futsearch.services;

import com.br.paulo.futsearch.domain.Card;
import com.br.paulo.futsearch.domain.Nation;
import com.br.paulo.futsearch.domain.TypeCard;
import com.br.paulo.futsearch.dto.TypeCardDTO;
import com.br.paulo.futsearch.repository.NationRepository;
import com.br.paulo.futsearch.repository.TypeCardRepository;
import com.br.paulo.futsearch.services.exception.ObjectNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class NationService {

    @Autowired
    private NationRepository repository;

    public List<Nation> findAll(){
        return repository.findAll();
    }

    public Nation findById(String id) {
        Optional<Nation> obj = repository.findById(id);
        return obj.orElseThrow(() -> new ObjectNotFoundException("Objeto não encontrado"));
    }

    public Nation insert(Nation obj) {
       return repository.insert(obj);
    }

    public void delete(String id){
        findById(id);
        repository.deleteById(id);
    }

    public Nation update(Nation obj) {
        Nation newObj = findById(obj.getId());
        updateData(newObj, obj);
        return repository.save(newObj);
    }

    private void updateData(Nation newObj, Nation obj) {
        newObj.setNation(obj.getNation());
        newObj.setNationUrl(obj.getNationUrl());
    }
}
