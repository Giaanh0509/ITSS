package com.example.project.service;

import com.example.project.dto.FavoriteDto;
import com.example.project.entity.Favorite;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

public interface FavoritesService {

    List<FavoriteDto> findMostRecentFavoritesByUsername(String username);

    //
    List<FavoriteDto> findFavoritesByUsername(String username);

    void addFavorite(Favorite favorite);

    Optional<Favorite> findByUserAndFood(int userId, int foodId);

    void deleteFavoriteByUserAndFood(int userId, int foodId);

}
