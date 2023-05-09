package com.br.paulo.futsearch.services;

import com.br.paulo.futsearch.data.v1.CardVO;
import com.br.paulo.futsearch.domain.Card;
import com.br.paulo.futsearch.mapper.ModelMapper;
import com.br.paulo.futsearch.repository.CardRepository;
import com.br.paulo.futsearch.resources.CardResource;
import com.br.paulo.futsearch.services.exception.RequiredObjectIsNullException;
import com.br.paulo.futsearch.services.exception.ResourceNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.logging.Logger;

import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.linkTo;
import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.methodOn;

@Service
public class CardService {

    private Logger logger = Logger.getLogger(CardService.class.getName());

    @Autowired
    private CardRepository repository;

    public List<CardVO> findAll(){
        logger.info("Finding all cards!");

        var cards = ModelMapper.parseListObjects(repository.findAll(), CardVO.class);
        cards
                .stream()
                .forEach(p -> p.add(linkTo(methodOn(CardResource.class).findById(p.getId())).withSelfRel()));
        return cards;
    }

    public CardVO findById(String id) {
        logger.info("Finding one card!");

        var entity = repository.findById(id).orElseThrow(() -> new ResourceNotFoundException(
                "No records found for this ID!"));

        var vo = ModelMapper.parseObject(entity, CardVO.class);
        vo.add(linkTo(methodOn(CardResource.class).findById(id)).withSelfRel());
        return vo;
    }

    public CardVO create(CardVO card) {
        if (card == null) throw new RequiredObjectIsNullException();

        logger.info("Creating one card!");
        var entity = ModelMapper.parseObject(card, Card.class);
        var vo = ModelMapper.parseObject(repository.save(entity), CardVO.class);
        vo.add(linkTo(methodOn(CardResource.class).findById(vo.getId())).withSelfRel());
        return vo;
    }

    public void delete(String id) {
        logger.info("Deleting one card!");

        var entity = repository.findById(id).orElseThrow(() -> new ResourceNotFoundException(
                "No records found for this ID!"));
        repository.delete(entity);
    }

    public CardVO update(CardVO card) {

        if (card == null) throw new RequiredObjectIsNullException();

        logger.info("Updating one card!");

        var newObj = repository.findById(card.getId()).orElseThrow(() -> new ResourceNotFoundException(
                "No records found for this ID!"));

        newObj.setVersionFifa(card.getVersionFifa());
        newObj.setTypeCard(card.getTypeCard());
        newObj.setFirstName(card.getFirstName());
        newObj.setLastName(card.getLastName());
        newObj.setNickName(card.getNickName());
        newObj.setNationality(card.getNationality());
        newObj.setClub(card.getClub());
        newObj.setPosition(card.getPosition());
        newObj.setPhoto(card.getPhoto());
        newObj.setAttributeCard(card.getAttributeCard());

        var vo = ModelMapper.parseObject(repository.save(newObj), CardVO.class);
        vo.add(linkTo(methodOn(CardResource.class).findById(vo.getId())).withSelfRel());
        return vo;
    }
}
