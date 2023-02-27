package com.br.paulo.model;

import org.springframework.data.annotation.Id;

import java.io.Serializable;
import java.util.List;
import java.util.Objects;

public class Card implements Serializable {
    @Id
    private Long id;
    private String type;
    private String firstName;
    private String lastName;
    private String nickName;
    private String nationality;
    private String club;
    private String position;
    private String photo;
    AttributeCard attributes;

    public Card() {
    }

    public Card(Long id, String type, String firstName, String lastName, String nickName, String nationality,
                String club, String position, String photo, AttributeCard attributes) {
        this.id = id;
        this.type = type;
        this.firstName = firstName;
        this.lastName = lastName;
        this.nickName = nickName;
        this.nationality = nationality;
        this.club = club;
        this.position = position;
        this.photo = photo;
        this.attributes = attributes;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
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

    public AttributeCard getAttributes() {
        return attributes;
    }

    public void setAttributes(AttributeCard attributes) {
        this.attributes = attributes;
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
