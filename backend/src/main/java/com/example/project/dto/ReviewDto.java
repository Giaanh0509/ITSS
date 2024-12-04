package com.example.project.dto;

import java.util.Date;

public class ReviewDto {

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
