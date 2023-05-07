package com.br.paulo.futsearch.domain;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.io.Serializable;

@Entity
@Document(collection = "type-cards")
public class TypeCard implements Serializable {

    @Id
    private String id;

    @Column(nullable = false, length = 10)
    private String fifaVersion;
    @Column(nullable = false, length = 40)
    private String cardType;
    @Column(nullable = false, length = 100)
    private String photoUrl;

    private ColorText colorText;

    public TypeCard() {
    }

    public TypeCard(String id, String fifaVersion, String cardType, String photoUrl, ColorText colorText) {
        this.id = id;
        this.fifaVersion = fifaVersion;
        this.cardType = cardType;
        this.photoUrl = photoUrl;
        this.colorText = colorText;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
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

    public ColorText getColorText() {
        return colorText;
    }

    public void setColorText(ColorText colorText) {
        this.colorText = colorText;
    }
}
