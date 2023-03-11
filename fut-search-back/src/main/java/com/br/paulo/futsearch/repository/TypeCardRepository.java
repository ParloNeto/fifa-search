package com.br.paulo.futsearch.repository;


import com.br.paulo.futsearch.domain.TypeCard;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TypeCardRepository extends MongoRepository<TypeCard, String> {




    List<TypeCard> findByFifaVersion(String fifaVersion);

    @Query("{'fifaVersion': ?0, 'cardType': ?1}")
    TypeCard findByFifaVersionAndCardType(String fifaVersion, String cardType);

}
