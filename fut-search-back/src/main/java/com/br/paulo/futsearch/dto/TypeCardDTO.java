package com.br.paulo.futsearch.dto;

import com.br.paulo.futsearch.domain.ColorText;
import com.br.paulo.futsearch.domain.TypeCard;

import java.io.Serializable;

public class TypeCardDTO implements Serializable {

    private String id;

    private String fifaVersion;

    private String cardType;

    private String photoUrl;

    private ColorText colorText;

    public TypeCardDTO() {
    }

    public TypeCardDTO(TypeCard obj) {
        id = obj.getId();
        fifaVersion = obj.getFifaVersion();
        cardType = obj.getCardType();
        photoUrl = obj.getPhotoUrl();
        colorText = obj.getColorText();
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
