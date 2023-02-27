package com.br.paulo.futsearch.domain;

public class AttributeCard {

    private int overall;
    private int pace;
    private int shooting;
    private int passing;
    private int dribbling;
    private int defending;
    private int physicality;

    public AttributeCard() {
    }

    public AttributeCard(int overall, int pace, int shooting, int passing, int dribbling, int defending, int physicality) {
        this.overall = overall;
        this.pace = pace;
        this.shooting = shooting;
        this.passing = passing;
        this.dribbling = dribbling;
        this.defending = defending;
        this.physicality = physicality;
    }

    public int getOverall() {
        return overall;
    }

    public void setOverall(int overall) {
        this.overall = overall;
    }

    public int getPace() {
        return pace;
    }

    public void setPace(int pace) {
        this.pace = pace;
    }

    public int getShooting() {
        return shooting;
    }

    public void setShooting(int shooting) {
        this.shooting = shooting;
    }

    public int getPassing() {
        return passing;
    }

    public void setPassing(int passing) {
        this.passing = passing;
    }

    public int getDribbling() {
        return dribbling;
    }

    public void setDribbling(int dribbling) {
        this.dribbling = dribbling;
    }

    public int getDefending() {
        return defending;
    }

    public void setDefending(int defending) {
        this.defending = defending;
    }

    public int getPhysicality() {
        return physicality;
    }

    public void setPhysicality(int physicality) {
        this.physicality = physicality;
    }

}
