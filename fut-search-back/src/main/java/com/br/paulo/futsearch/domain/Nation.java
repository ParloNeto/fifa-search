package com.br.paulo.futsearch.domain;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Entity
@Document(collection = "nation")
public class Nation {

    @Id
    private String id;
    @Column(nullable = false, length = 30)
    private String nation;
    @Column(nullable = false, length = 100)
    private String nationUrl;

    public Nation() {
    }

    public Nation(String id, String nation, String nationUrl) {
        this.id = id;
        this.nation = nation;
        this.nationUrl = nationUrl;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getNation() {
        return nation;
    }

    public void setNation(String nation) {
        this.nation = nation;
    }

    public String getNationUrl() {
        return nationUrl;
    }

    public void setNationUrl(String nationUrl) {
        this.nationUrl = nationUrl;
    }
}
