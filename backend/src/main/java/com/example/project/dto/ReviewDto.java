package com.example.project.dto;

import java.util.Date;

public class ReviewDto {
    private int userId;
    private int foodId;
    private String username;
    private String foodName;
    private double star;
    private String comment;
    private Date date;

    public ReviewDto(String username, String foodName, double star, String comment, Date date) {
        this.username = username;
        this.foodName = foodName;
        this.star = star;
        this.comment = comment;
        this.date = date;
    }

    public ReviewDto(int userId, int foodId, double star, String comment, Date date) {
        this.userId = userId;
        this.foodId = foodId;
        this.star = star;
        this.comment = comment;
        this.date = date;
    }

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public int getFoodId() {
        return foodId;
    }

    public void setFoodId(int foodId) {
        this.foodId = foodId;
    }

    // Getters and Setters

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getFoodName() {
        return foodName;
    }

    public void setFoodName(String foodName) {
        this.foodName = foodName;
    }

    public double getStar() {
        return star;
    }

    public void setStar(double star) {
        this.star = star;
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }
}
