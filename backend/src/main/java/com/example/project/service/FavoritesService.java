package com.example.project.service;

import com.example.project.dto.FavoriteDto;
import com.example.project.entity.Favorite;
import org.springframework.data.domain.Page;
//import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

public interface FavoritesService {

    List<FavoriteDto> findMostRecentFavoritesByUsername(String username);

    Page<FavoriteDto> findFavoritesByUsername(String username, int page, int size);

    void addFavorite(Favorite favorite);

    Optional<Favorite> findByUserAndFood(int userId, int foodId);

    void deleteFavoriteByUserAndFood(int userId, int foodId);

}
