package com.br.paulo.futsearch.config;

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

        Card messi = new Card(null, "fifa-17", "Lionel", "Messi", null, "argentina", "PSG", "RW", "photo", null);
        Card cristiano = new Card(null, "fifa-17", "Cristiano", "Ronaldo", null, "portugal", "Real Madrid", "ST", "photo", null);
        Card neymar = new Card(null, "fifa-17", "Neymar", "JR", null, "brazil", "PSG", "LW", "photo", null);

        cardRepository.saveAll(Arrays.asList(messi, neymar, cristiano));
    }
}
