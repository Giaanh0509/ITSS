package com.example.project.dto;

import java.util.List;

public class AnketDto {
    private List<String> price;
    private List<String> favoriteFoods;
    private List<String> favoriteFlavors;
    private List<String> dislikes;
    private int userId;

    // Getters and Setters
    public List<String> getPrice() {
        return price;
    }

    public AnketDto(List<String> favoriteFlavors, List<String> favoriteFoods, List<String> priceRange, List<String> dislikes, int userId) {
        this.favoriteFlavors = favoriteFlavors;
        this.favoriteFoods = favoriteFoods;
        this.price = priceRange;
        this.dislikes = dislikes;
        this.userId = userId;
    }

    public void setPrice(List<String> price) {
        this.price = price;
    }

    public List<String> getFavoriteFoods() {
        return favoriteFoods;
    }

    public void setFavoriteFoods(List<String> favoriteFoods) {
        this.favoriteFoods = favoriteFoods;
    }

    public List<String> getFavoriteFlavor() {
        return favoriteFlavors;
    }

    public void setFavoriteFlavor(List<String> favoriteFlavor) {
        this.favoriteFlavors = favoriteFlavor;
    }

    public List<String> getDislikes() {
        return dislikes;
    }

    public void setDislikes(List<String> dislikes) {
        this.dislikes = dislikes;
    }

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }
}