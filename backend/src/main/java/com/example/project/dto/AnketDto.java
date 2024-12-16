package com.example.project.dto;

public class AnketDto {
    private String price;
    private String favoriteFoods;
    private String favoriteFlavor;
    private String dislikes;
    private String username;

    // Getters and Setters

    public AnketDto(String favoriteFlavor, String favoriteFoods, String price, String dislikes, String Username) {
        this.price = price;
        this.favoriteFoods = favoriteFoods;
        this.favoriteFlavor = favoriteFlavor;
        this.dislikes = dislikes;
        this.username = Username;
    }

    public String getPrice() {
        return price;
    }

    public void setPrice(String price) {
        this.price = price;
    }

    public String getFavoriteFoods() {
        return favoriteFoods;
    }

    public void setFavoriteFoods(String favoriteFoods) {
        this.favoriteFoods = favoriteFoods;
    }

    public String getFavoriteFlavor() {
        return favoriteFlavor;
    }

    public void setFavoriteFlavor(String favoriteFlavor) {
        this.favoriteFlavor = favoriteFlavor;
    }

    public String getDislikes() {
        return dislikes;
    }

    public void setDislikes(String dislikes) {
        this.dislikes = dislikes;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }
}