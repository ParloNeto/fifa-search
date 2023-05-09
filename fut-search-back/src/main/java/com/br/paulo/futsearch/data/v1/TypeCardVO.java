package com.br.paulo.futsearch.data.v1;

import com.br.paulo.futsearch.domain.ColorText;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.hateoas.RepresentationModel;

import java.io.Serializable;
import java.util.Objects;

@JsonPropertyOrder({ "id","fifaVersion","cardType","photoUrl", "colorText"})
public class TypeCardVO extends RepresentationModel<TypeCardVO> implements Serializable {
    @JsonProperty("id")
    private String id;
    private String fifaVersion;
    private String cardType;
    private String photoUrl;
    private ColorText colorText;

    public TypeCardVO() {
    }

    public TypeCardVO(String id, String fifaVersion, String cardType, String photoUrl, ColorText colorText) {
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

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        if (!super.equals(o)) return false;
        TypeCardVO that = (TypeCardVO) o;
        return Objects.equals(id, that.id) && Objects.equals(fifaVersion, that.fifaVersion) && Objects.equals(cardType, that.cardType) && Objects.equals(photoUrl, that.photoUrl) && Objects.equals(colorText, that.colorText);
    }

    @Override
    public int hashCode() {
        return Objects.hash(super.hashCode(), id, fifaVersion, cardType, photoUrl, colorText);
    }
}
