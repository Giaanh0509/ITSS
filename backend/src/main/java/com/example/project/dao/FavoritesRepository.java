package com.example.project.dao;

import com.example.project.entity.Favorite;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface FavoritesRepository extends JpaRepository<Favorite, Integer> {

    List<Favorite> findTop4ByOrderByAddDateDesc();
}

