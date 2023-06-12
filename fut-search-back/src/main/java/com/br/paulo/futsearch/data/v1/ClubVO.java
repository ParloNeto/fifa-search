package com.br.paulo.futsearch.data.v1;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.hateoas.RepresentationModel;

import java.io.Serializable;
import java.util.Objects;

@JsonPropertyOrder({ "id","club","clubUrl"})
public class ClubVO extends RepresentationModel<ClubVO> implements Serializable {

    @JsonProperty("id")
    private String id;

    private String club;

    private String clubUrl;

    public ClubVO() {
    }

    public ClubVO(String id, String club, String clubUrl) {
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

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        if (!super.equals(o)) return false;
        ClubVO clubVO = (ClubVO) o;
        return Objects.equals(id, clubVO.id) && Objects.equals(club, clubVO.club) && Objects.equals(clubUrl, clubVO.clubUrl);
    }

    @Override
    public int hashCode() {
        return Objects.hash(super.hashCode(), id, club, clubUrl);
    }
}
