package com.br.paulo.futsearch.repository;


import com.br.paulo.futsearch.domain.Nation;
import com.br.paulo.futsearch.domain.TypeCard;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface NationRepository extends MongoRepository<Nation, String> {
}
