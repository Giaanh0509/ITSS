package com.example.project.entity;

import jakarta.persistence.*;
import java.util.Set;

@Entity
@Table(name = "foods")
public class Food {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @Column
    private String name;

    @Column(name = "description", length = 1000)
    private String description;

    @Column
    private double rating;

    @Column
    private double price;

    @Column
    private String location;

    @Lob
    @Column(columnDefinition="LONGBLOB")
    private byte[] image;

    @OneToMany(mappedBy = "food", cascade = CascadeType.ALL)
    private Set<Review> reviews;

    @OneToMany(mappedBy = "food", cascade = CascadeType.ALL)
    private Set<Favorite> favorites;

    @OneToMany(mappedBy = "food", cascade = CascadeType.ALL)
    private Set<Recommend> recommends;

    @ManyToMany
    @JoinTable(
            name = "food_tags",
            joinColumns = @JoinColumn(name = "food_id"),
            inverseJoinColumns = @JoinColumn(name = "tag_id")
    )
    private Set<Tag> tags;

    public int getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public double getRating() {
        return rating;
    }

    public void setRating(double rating) {
        this.rating = rating;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public byte[] getImage() {
        return image;
    }

    public void setImage(byte[] image) {
        this.image = image;
    }

    public Set<Review> getReviews() {
        return reviews;
    }

    public void setReviews(Set<Review> reviews) {
        this.reviews = reviews;
    }

    public Set<Favorite> getFavorites() {
        return favorites;
    }

    public void setFavorites(Set<Favorite> favorites) {
        this.favorites = favorites;
    }

    public Set<Tag> getTags() {
        return tags;
    }

    public void setTags(Set<Tag> tags) {
        this.tags = tags;
    }

    public Set<Recommend> getRecommends() {
        return recommends;
    }

    public void setRecommends(Set<Recommend> recommends) {
        this.recommends = recommends;
    }

    @Override
    public String toString() {
        return "Food{" +
                "name='" + name + '\'' +
                ", id=" + id +
                '}';
    }
}