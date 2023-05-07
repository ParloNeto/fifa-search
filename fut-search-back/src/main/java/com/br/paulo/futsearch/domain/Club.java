package com.br.paulo.futsearch.domain;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Entity
@Document(collection = "club")
public class Club {

    @Id
    private String id;
    @Column(nullable = false, length = 40)
    private String club;
    @Column(nullable = false, length = 100)
    private String clubUrl;

    public Club() {
    }

    public Club(String id, String club, String clubUrl) {
        this.id = id;
        this.club = club;
        this.clubUrl = clubUrl;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getClub() {
        return club;
    }

    public void setClub(String club) {
        this.club = club;
    }

    public String getClubUrl() {
        return clubUrl;
    }

    public void setClubUrl(String clubUrl) {
        this.clubUrl = clubUrl;
    }
}
