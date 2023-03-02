package com.br.paulo.futsearch.config;

import com.br.paulo.futsearch.domain.AttributeCard;
import com.br.paulo.futsearch.domain.Card;
import com.br.paulo.futsearch.repository.CardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Configuration;

import java.util.Arrays;

@Configuration
public class Instantiation implements CommandLineRunner {

    @Autowired
    CardRepository cardRepository;



    @Override
    public void run(String... args) throws Exception {

        cardRepository.deleteAll();

        AttributeCard attributeCard1 = new AttributeCard(81, 85, 75, 68,82,41,74);
        AttributeCard attributeCard2 = new AttributeCard(90, 85, 89, 84,87,21,64);

        Card messi = new Card(null, "fifa-17", "Romario", "Messi", null, "argentina", "PSG", "RW", "photo", attributeCard2);
        Card cristiano = new Card(null, "fifa-17", "Cristiano", "Ronaldo", null, "portugal", "Real Madrid", "ST", "photo", attributeCard1);
        Card neymar = new Card(null, "fifa-17", "Neymar", "JR", null, "brazil", "PSG", "LW", "photo", attributeCard1);

        cardRepository.saveAll(Arrays.asList(messi, neymar, cristiano));




    }
}
