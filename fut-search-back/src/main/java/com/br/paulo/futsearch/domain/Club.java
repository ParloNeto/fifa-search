package com.br.paulo.futsearch.domain;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "club")
public class Club {

    @Id
    private String id;

    private String club;

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
