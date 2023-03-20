package com.br.paulo.futsearch.services;

import com.br.paulo.futsearch.domain.Club;
import com.br.paulo.futsearch.domain.Nation;
import com.br.paulo.futsearch.repository.ClubRepository;
import com.br.paulo.futsearch.repository.NationRepository;
import com.br.paulo.futsearch.services.exception.ObjectNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ClubService {

    @Autowired
    private ClubRepository repository;

    public List<Club> findAll(){
        return repository.findAll();
    }

    public Club findById(String id) {
        Optional<Club> obj = repository.findById(id);
        return obj.orElseThrow(() -> new ObjectNotFoundException("Objeto não encontrado"));
    }

    public Club findByNation(String club) {
        return repository.findByClub(club);
    }

    public Club insert(Club obj) {
       return repository.insert(obj);
    }

    public void delete(String id){
        findById(id);
        repository.deleteById(id);
    }

    public Club update(Club obj) {
        Club newObj = findById(obj.getId());
        updateData(newObj, obj);
        return repository.save(newObj);
    }

    private void updateData(Club newObj, Club obj) {
        newObj.setClub(obj.getClub());
        newObj.setClubUrl(obj.getClubUrl());
    }
}
