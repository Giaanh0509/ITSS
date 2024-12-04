package com.example.project.service;

import com.example.project.dto.FavoriteDto;
import com.example.project.entity.Favorite;

import java.util.List;
import java.util.Optional;

public interface FavoritesService {

    List<FavoriteDto> findMostRecentFavoritesByUsername(String username);

    void addFavorite(Favorite favorite);

    Optional<Favorite> findByUserAndFood(int userId, int foodId);
}
