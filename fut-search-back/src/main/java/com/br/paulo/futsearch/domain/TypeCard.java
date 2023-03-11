package com.br.paulo.futsearch.domain;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "type-cards")
public class TypeCard {

    @Id
    private String id;

    private String fifaVersion;

    private String cardType;

    private String photoUrl;

    public TypeCard() {
    }

    public TypeCard(String id, String fifaVersion, String cardType, String photoUrl) {
        this.fifaVersion = fifaVersion;
        this.cardType = cardType;
        this.photoUrl = photoUrl;
    }

    public String getId() {
        return id;
    }

    public String getFifaVersion() {
        return fifaVersion;
    }

    public void setFifaVersion(String fifaVersion) {
        this.fifaVersion = fifaVersion;
    }

    public String getCardType() {
        return cardType;
    }

    public void setCardType(String cardType) {
        this.cardType = cardType;
    }

    public String getPhotoUrl() {
        return photoUrl;
    }

    public void setPhotoUrl(String photoUrl) {
        this.photoUrl = photoUrl;
    }
}
