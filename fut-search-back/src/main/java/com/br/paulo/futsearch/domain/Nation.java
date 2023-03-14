package com.br.paulo.futsearch.domain;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "type-cards")
public class Nation {

    @Id
    private String id;

    private String nation;

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
