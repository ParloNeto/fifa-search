package com.br.paulo.futsearch.domain;

import java.io.Serializable;

public class ColorText implements Serializable {
    private String colorOverall;
    private String colorFontName;
    private String colorPosition;
    private String colorAttributes;

    public ColorText() {
    }

    public ColorText(String colorOverall, String colorFontName, String colorPosition, String colorAttributes) {
        this.colorOverall = colorOverall;
        this.colorFontName = colorFontName;
        this.colorPosition = colorPosition;
        this.colorAttributes = colorAttributes;
    }

    public String getColorOverall() {
        return colorOverall;
    }

    public void setColorOverall(String colorOverall) {
        this.colorOverall = colorOverall;
    }

    public String getColorFontName() {
        return colorFontName;
    }

    public void setColorFontName(String colorFontName) {
        this.colorFontName = colorFontName;
    }

    public String getColorPosition() {
        return colorPosition;
    }

    public void setColorPosition(String colorPosition) {
        this.colorPosition = colorPosition;
    }

    public String getColorAttributes() {
        return colorAttributes;
    }

    public void setColorAttributes(String colorAttributes) {
        this.colorAttributes = colorAttributes;
    }
}
