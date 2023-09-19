package com.br.paulo.futsearch.repository;


import com.br.paulo.futsearch.domain.Club;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface ClubRepository extends MongoRepository<Club, String> {

    @Query("{'club': ?0}")
    Club findByClub(String club);
}
