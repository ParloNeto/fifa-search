package com.br.paulo.futsearch.domain;

import jakarta.validation.constraints.NotBlank;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;
import java.io.Serializable;
import java.util.Objects;

@Document(collection = "card")
public class Card implements Serializable {
    @Id
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

    public Card() {
    }

    public Card(String id, String versionFifa, String typeCard, String firstName, String lastName, String nickName, String nationality,
                String club, String position, String photo, AttributeCard attributeCard) {
        this.id = id;
        this.versionFifa = versionFifa;
        this.typeCard = typeCard;
        this.firstName = firstName;
        this.lastName = lastName;
        this.nickName = nickName;
        this.nationality = nationality;
        this.club = club;
        this.position = position;
        this.photo = photo;
        this.attributeCard = attributeCard;
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

    public String getTypeCard() {
        return typeCard;
    }

    public void setTypeCard(String typeCard) {
        this.typeCard = typeCard;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Card card = (Card) o;
        return Objects.equals(id, card.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }
}
