package com.br.paulo.futsearch.services;

import com.br.paulo.futsearch.domain.TypeCard;
import com.br.paulo.futsearch.dto.TypeCardDTO;
import com.br.paulo.futsearch.repository.TypeCardRepository;
import com.br.paulo.futsearch.services.exception.ObjectNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TypeCardService {

    @Autowired
    private TypeCardRepository repository;

    public List<TypeCard> findAll(){
        return repository.findAll();
    }

    public List<TypeCard> getCardsByFifaVersion(String fifaVersion) {
        return repository.findByFifaVersion(fifaVersion);
    }

    public TypeCard insert(TypeCard obj) {
       return repository.insert(obj);
    }

    public void delete(String fifaVersion){
        getCardsByFifaVersion(fifaVersion);
        repository.deleteById(fifaVersion);
    }

    public TypeCard getCardByFifaVersionAndCardType(String fifaVersion, String cardType) {
        return repository.findByFifaVersionAndCardType(fifaVersion, cardType);
    }

//    public TypeCard update(TypeCard obj) {
//        TypeCard newObj = getCardByFifaVersionAndCardType(obj.getFifaVersion(), obj.getCardType());
//        updateData(newObj, obj);
//        return repository.save(newObj);
//    }

    //metodo do GPT
    public TypeCard update(TypeCard obj) {
        Optional<TypeCard> optionalCard = repository.findById(obj.getId());
        if (optionalCard.isPresent()) {
            TypeCard existingCard = optionalCard.get();
            updateData(existingCard, obj);
            return repository.save(existingCard);
        } else {
            throw new ObjectNotFoundException("Card not found with id: " + obj.getId());
        }
    }


    private void updateData(TypeCard newObj, TypeCard obj) {
        newObj.setFifaVersion(obj.getFifaVersion());
        newObj.setCardType(obj.getCardType());
        newObj.setPhotoUrl(obj.getPhotoUrl());
        newObj.setColorText(obj.getColorText());
    }

    public TypeCard fromDTO(TypeCardDTO objDto) {
        return new TypeCard(objDto.getId(), objDto.getFifaVersion(), objDto.getCardType(), objDto.getPhotoUrl(), objDto.getColorText());
    }
}
