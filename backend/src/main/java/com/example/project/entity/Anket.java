package com.example.project.entity;

import java.util.List;

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
    private List<String> favoriteFlavor;

    @Column(name = "favorite_food")
    private List<String> favoriteFood;

    @Column(name = "price_range")
    private List<String> priceRange;

    @Column(name = "dislike")
    private List<String> dislike;

    @OneToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    // Getters and Setters
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public List<String> getFavoriteFlavors() {
        return favoriteFlavor;
    }

    public void setFavoriteFlavors(List<String> favoriteFlavor) {
        this.favoriteFlavor = favoriteFlavor;
    }

    public List<String> getFavoriteFoods() {
        return favoriteFood;
    }

    public void setFavoriteFoods(List<String> favoriteFood) {
        this.favoriteFood = favoriteFood;
    }

    public List<String> getPrice() {
        return priceRange;
    }

    public void setPrice(List<String> priceRange) {
        this.priceRange = priceRange;
    }

    public List<String> getDislikes() {
        return dislike;
    }

    public void setDislikes(List<String> dislike) {
        this.dislike = dislike;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}