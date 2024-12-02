package com.example.project.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "recommends")
public class Recommend {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "food_id", referencedColumnName = "id")
    private Food food;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "anket_id", referencedColumnName = "id")
    private Anket anket;
}
