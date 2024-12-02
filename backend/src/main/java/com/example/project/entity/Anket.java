package com.example.project.entity;

import jakarta.persistence.*;

import java.util.Set;

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

    @Column()
    private String dislike;

    @OneToOne
    @JoinColumn(name = "user_id")
    private User user;

    @OneToMany(mappedBy = "anket", cascade = CascadeType.ALL)
    private Set<Recommend> recommends;
}
