package com.example.project.dto;

import java.util.Date;

public class AddReviewDto {
    private String username;
    private int foodId;
    private double star;
    private String comment;
    private Date date;



    public AddReviewDto(String username, int foodId, double star, String comment, Date date) {
        this.username = username;
        this.foodId = foodId;
        this.star = star;
        this.comment = comment;
        this.date = date;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(int userId) {
        this.username = username;
    }

    public int getFoodId() {
        return foodId;
    }

    public void setFoodId(int foodId) {
        this.foodId = foodId;
    }

    // Getters and Setters

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
