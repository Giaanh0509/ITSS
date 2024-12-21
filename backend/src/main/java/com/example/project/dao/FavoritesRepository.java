package com.example.project.dao;

import com.example.project.entity.Favorite;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface FavoritesRepository extends JpaRepository<Favorite, Integer> {

    List<Favorite> findTop4ByUserIdOrderByAddDateDesc(int userId);

    List<Favorite> findByUserId(int userId);

    Optional<Favorite> findByUserIdAndFoodId(int userId, int foodId);

    @Modifying
    @Query("DELETE FROM Favorite f WHERE f.user.id = :userId AND f.food.id = :foodId")
    void deleteByUserIdAndFoodId(@Param("userId") int userId, @Param("foodId") int foodId);


}

