package com.br.paulo.futsearch.dto;

import com.br.paulo.futsearch.domain.AttributeCard;
import com.br.paulo.futsearch.domain.Card;

import java.io.Serializable;

public class CardDTO implements Serializable {

    private String id;
    private String versionFifa;
    private String typeCard;
    private String firstName;
    private String lastName;
    private String nickName;
    private String nationality;
    private String club;
    private String position;
    private String photo;

    private AttributeCard attributeCard;

    public CardDTO() {
    }

    public CardDTO(Card obj) {
        id = obj.getId();
        versionFifa = obj.getVersionFifa();
        typeCard = obj.getTypeCard();
        firstName = obj.getFirstName();
        lastName = obj.getLastName();
        nickName = obj.getNickName();
        nationality = obj.getNationality();
        club = obj.getClub();
        position = obj.getPosition();
        photo = obj.getPhoto();
        attributeCard = obj.getAttributeCard();
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getVersionFifa() {
        return versionFifa;
    }

    public void setVersionFifa(String versionFifa) {
        this.versionFifa = versionFifa;
    }

    public String getTypeCard() {
        return typeCard;
    }

    public void setTypeCard(String typeCard) {
        this.typeCard = typeCard;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getNickName() {
        return nickName;
    }

    public void setNickName(String nickName) {
        this.nickName = nickName;
    }

    public String getNationality() {
        return nationality;
    }

    public void setNationality(String nationality) {
        this.nationality = nationality;
    }

    public String getClub() {
        return club;
    }

    public void setClub(String club) {
        this.club = club;
    }

    public String getPosition() {
        return position;
    }

    public void setPosition(String position) {
        this.position = position;
    }

    public String getPhoto() {
        return photo;
    }

    public void setPhoto(String photo) {
        this.photo = photo;
    }

    public AttributeCard getAttributeCard() {
        return attributeCard;
    }

    public void setAttributeCard(AttributeCard attributeCard) {
        this.attributeCard = attributeCard;
    }
}
