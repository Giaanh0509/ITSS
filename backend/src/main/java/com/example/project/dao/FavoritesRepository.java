package com.example.project.dao;

import com.example.project.entity.Favorite;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface FavoritesRepository extends JpaRepository<Favorite, Integer> {

    List<Favorite> findTop4ByUserIdOrderByAddDateDesc(int userId);


    List<Favorite> findByUserId(int userId);

    Optional<Favorite> findByUserIdAndFoodId(int userId, int foodId);
}

