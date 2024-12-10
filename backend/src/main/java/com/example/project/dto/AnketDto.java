package com.example.project.dto;

public class AnketDto {
    private int id;
    private String favoriteFlavor;
    private String favoriteFood;
    private String priceRange;
    private String dislike;
    private int userId;

    public AnketDto() {
    }

    public AnketDto(int id, String favoriteFlavor, String favoriteFood, String priceRange, String dislike, int userId) {
        this.id = id;
        this.favoriteFlavor = favoriteFlavor;
        this.favoriteFood = favoriteFood;
        this.priceRange = priceRange;
        this.dislike = dislike;
        this.userId = userId;
    }

    //getters and setters
    public int getId() {
        return id;
    }

    public String getFavoriteFlavor() {
        return favoriteFlavor;
    }

    public String getFavoriteFood() {
        return favoriteFood;
    }

    public String getPriceRange() {
        return priceRange;
    }

    public String getDislike() {
        return dislike;
    }

    public int getUserId() {
        return userId;
    }

    public void setId(int id) {
        this.id = id;
    }

    public void setFavoriteFlavor(String favoriteFlavor) {
        this.favoriteFlavor = favoriteFlavor;
    }

    public void setFavoriteFood(String favoriteFood) {
        this.favoriteFood = favoriteFood;
    }

    public void setPriceRange(String priceRange) {
        this.priceRange = priceRange;
    }

    public void setDislike(String dislike) {
        this.dislike = dislike;
    }
}
