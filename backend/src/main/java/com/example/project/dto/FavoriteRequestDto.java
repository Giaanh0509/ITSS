package com.example.project.dto;

public class FavoriteRequestDto {

    private int foodId;
    private String username;
    private String addDate; // yyyy-MM-dd format

    // Getters and setters
    public int getFoodId() {
        return foodId;
    }

    public void setFoodId(int foodId) {
        this.foodId = foodId;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getAddDate() {
        return addDate;
    }

    public void setAddDate(String addDate) {
        this.addDate = addDate;
    }
}
