package com.br.paulo.futsearch.services;

import com.br.paulo.futsearch.domain.Card;
import com.br.paulo.futsearch.dto.CardDTO;
import com.br.paulo.futsearch.repository.CardRepository;
import com.br.paulo.futsearch.services.exception.ObjectNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CardService {

    @Autowired
    private CardRepository repository;

    public List<Card> findAll(){
        return repository.findAll();
    }

    public Card findById(String id) {
        Optional<Card> obj = repository.findById(id);
        return obj.orElseThrow(() -> new ObjectNotFoundException("Objeto não encontrado"));
    }

    public Card insert(Card obj) {
       return repository.insert(obj);
    }

    public void delete(String id){
        findById(id);
        repository.deleteById(id);
    }

    public Card update(Card obj) {
        Card newObj = findById(obj.getId());
        updateData(newObj, obj);
        return repository.save(newObj);
    }

    private void updateData(Card newObj, Card obj) {
        newObj.setVersionFifa(obj.getVersionFifa());
        newObj.setTypeCard(obj.getTypeCard());
        newObj.setFirstName(obj.getFirstName());
        newObj.setLastName(obj.getLastName());
        newObj.setNickName(obj.getNickName());
        newObj.setNationality(obj.getNationality());
        newObj.setClub(obj.getClub());
        newObj.setPosition(obj.getPosition());
        newObj.setPhoto(obj.getPhoto());
        newObj.setAttributeCard(obj.getAttributeCard());
    }

    public Card fromDTO(CardDTO objDto) {
        return new Card(objDto.getId(), objDto.getVersionFifa(), objDto.getTypeCard(), objDto.getFirstName(), objDto.getLastName(), objDto.getNickName(),
                objDto.getNationality(), objDto.getClub(), objDto.getPosition(), objDto.getPhoto(), objDto.getAttributeCard());
    }
}
