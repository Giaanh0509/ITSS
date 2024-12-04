package com.example.project.service;

import com.example.project.dto.FavoriteDto;
import com.example.project.entity.Favorite;

import java.util.List;

public interface FavoritesService {

    List<FavoriteDto> findMostRecentFavorites();

    void addFavorite(Favorite favorite);
}
