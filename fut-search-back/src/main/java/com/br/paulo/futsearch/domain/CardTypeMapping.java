package com.br.paulo.futsearch.domain;

import java.io.Serializable;
import java.util.Map;

public class CardTypeMapping implements Serializable {

    private Map<String, CardType> types;

    public Map<String, CardType> getTypes() {
        return types;
    }

    public void setTypes(Map<String, CardType> types) {
        this.types = types;
    }

    public static class CardType {
        private String gold;
        private String silver;
        private String bronze;

        public String getGold() {
            return gold;
        }

        public void setGold(String gold) {
            this.gold = gold;
        }

        public String getSilver() {
            return silver;
        }

        public void setSilver(String silver) {
            this.silver = silver;
        }

        public String getBronze() {
            return bronze;
        }

        public void setBronze(String bronze) {
            this.bronze = bronze;
        }
    }

}
