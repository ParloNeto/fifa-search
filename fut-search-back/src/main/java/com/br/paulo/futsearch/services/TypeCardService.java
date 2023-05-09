package com.br.paulo.futsearch.services;

import com.br.paulo.futsearch.data.v1.TypeCardVO;
import com.br.paulo.futsearch.domain.TypeCard;
import com.br.paulo.futsearch.mapper.ModelMapper;
import com.br.paulo.futsearch.repository.TypeCardRepository;
import com.br.paulo.futsearch.resources.TypeCardResource;
import com.br.paulo.futsearch.services.exception.RequiredObjectIsNullException;
import com.br.paulo.futsearch.services.exception.ResourceNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.logging.Logger;

import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.linkTo;
import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.methodOn;


@Service
public class TypeCardService {

    private Logger logger = Logger.getLogger(CardService.class.getName());

    @Autowired
    private TypeCardRepository repository;

    public List<TypeCardVO> findAll() {
        logger.info("Finding all types card!");

        var typesCards = ModelMapper.parseListObjects(repository.findAll(), TypeCardVO.class);
        typesCards
                .stream()
                .forEach(p -> p.add(linkTo(methodOn(TypeCardResource.class).findTypeCardById(p.getId())).withSelfRel()));
        return typesCards;
    }

    public List<TypeCardVO> findByFifaVersions(String fifaVersion) {
        logger.info("Finding one typeCard by Version!");

        var typesCards = ModelMapper.parseListObjects(repository.findByFifaVersion(fifaVersion), TypeCardVO.class);
        typesCards
                .stream()
                .forEach(p -> p.add(linkTo(methodOn(TypeCardResource.class).findByFifaVersion(p.getFifaVersion())).withSelfRel()));
       return typesCards;

    }

    public TypeCardVO findById(String id) {

        logger.info("Finding one type card!");

        var entity = repository.findById(id).orElseThrow(() -> new ResourceNotFoundException(
                "No records found for this ID!"));

        var vo = ModelMapper.parseObject(entity, TypeCardVO.class);
        vo.add(linkTo(methodOn(TypeCardResource.class).findTypeCardById(id)).withSelfRel());
        return vo;
    }

    public TypeCardVO create(TypeCardVO typeCard) {
        if (typeCard == null) throw new RequiredObjectIsNullException();

        logger.info("Creating one card!");

        var entity = ModelMapper.parseObject(typeCard, TypeCard.class);
        var vo = ModelMapper.parseObject(repository.save(entity), TypeCardVO.class);
        vo.add(linkTo(methodOn(TypeCardResource.class).findTypeCardById(vo.getId())).withSelfRel());
        return vo;
    }

    public void delete(String id) {
        logger.info("Deleting one type card!");

        var entity = repository.findById(id).orElseThrow(() -> new ResourceNotFoundException(
                "No records found for this ID!"));
        repository.delete(entity);
    }

    public TypeCardVO findByFifaVersionAndCardType(String fifaVersion, String cardType) {
        logger.info("Finding by CardType and Version!");

        var entity = repository.findByFifaVersionAndCardType(fifaVersion, cardType);

        if (entity == null) {
            throw new ResourceNotFoundException("No records found for this FIFA version and card type!");
        }

        var vo = ModelMapper.parseObject(entity, TypeCardVO.class);
        vo.add(linkTo(methodOn(TypeCardResource.class).findByFifaVersionAndCardType(fifaVersion, cardType)).withSelfRel());
        return vo;
    }

    public TypeCardVO update(TypeCardVO typeCard) {

        if (typeCard == null) throw new RequiredObjectIsNullException();

        logger.info("Updating one typeCard!");

        var newObj = repository.findById(typeCard.getId()).orElseThrow(() -> new ResourceNotFoundException(
                "No records found for this ID!"));

        newObj.setFifaVersion(typeCard.getFifaVersion());
        newObj.setCardType(typeCard.getCardType());
        newObj.setPhotoUrl(typeCard.getPhotoUrl());
        newObj.setColorText(typeCard.getColorText());

        var vo = ModelMapper.parseObject(repository.save(newObj), TypeCardVO.class);
        vo.add(linkTo(methodOn(TypeCardResource.class).findTypeCardById(vo.getId())).withSelfRel());
        return vo;
    }
}
