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

@JsonPropertyOrder({ "id","nation","nationUrl"})
public class NationVO extends RepresentationModel<NationVO> implements Serializable {

    @JsonProperty("id")
    private String id;

    private String nation;

    private String nationUrl;

    public NationVO() {
    }

    public NationVO(String id, String nation, String nationUrl) {
        this.id = id;
        this.nation = nation;
        this.nationUrl = nationUrl;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getNation() {
        return nation;
    }

    public void setNation(String nation) {
        this.nation = nation;
    }

    public String getNationUrl() {
        return nationUrl;
    }

    public void setNationUrl(String nationUrl) {
        this.nationUrl = nationUrl;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        if (!super.equals(o)) return false;
        NationVO nationVO = (NationVO) o;
        return Objects.equals(id, nationVO.id) && Objects.equals(nation, nationVO.nation) && Objects.equals(nationUrl, nationVO.nationUrl);
    }

    @Override
    public int hashCode() {
        return Objects.hash(super.hashCode(), id, nation, nationUrl);
    }
}
