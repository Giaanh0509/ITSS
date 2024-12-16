package com.example.project.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "ankets")
public class Anket {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @Column(name = "favorite_flavor")
    private String favoriteFlavor;

    @Column(name = "favorite_food")
    private String favoriteFood;

    @Column(name = "price_range")
    private String priceRange;

    @Column(name = "dislike")
    private String dislike;

    @OneToOne
    @JoinColumn(name = "user_id", referencedColumnName = "id")
    private User user;

    // Getters and Setters
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getFavoriteFlavors() {
        return favoriteFlavor;
    }

    public void setFavoriteFlavors(String favoriteFlavor) {
        this.favoriteFlavor = favoriteFlavor;
    }

    public String getFavoriteFoods() {
        return favoriteFood;
    }

    public void setFavoriteFoods(String favoriteFood) {
        this.favoriteFood = favoriteFood;
    }

    public String getPrice() {
        return priceRange;
    }

    public void setPrice(String priceRange) {
        this.priceRange = priceRange;
    }

    public String getDislikes() {
        return dislike;
    }

    public void setDislikes(String dislike) {
        this.dislike = dislike;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}