package com.example.project.entity;

import jakarta.persistence.*;

import java.util.Date;

@Entity
@Table(name = "favorites")
public class Favorite {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "food_id", referencedColumnName = "id")
    private Food food;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "user_id", referencedColumnName = "id")
    private User user;

    @Column(name = "add_date")
    private Date addDate;

    public int getId() {
        return id;
    }

    public Food getFood() {
        return food;
    }

    public User getUser() {
        return user;
    }

    public Date getAddDate() {
        return addDate;
    }

    public void setFood(Food food) {
        this.food = food;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public void setAddDate(Date addDate) {
        this.addDate = addDate;
    }

    @Override
    public String toString() {
        return "Favorite{" +
                "food=" + food.toString() +
                ", user=" + user.toString() +
                ", addDate=" + addDate +
                '}';
    }
}
