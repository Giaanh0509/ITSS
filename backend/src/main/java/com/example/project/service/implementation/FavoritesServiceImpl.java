package com.example.project.service.implementation;

import com.example.project.dao.FavoritesRepository;
import com.example.project.dao.UsersRepository;
import com.example.project.dto.FavoriteDto;
import com.example.project.entity.Favorite;
import com.example.project.entity.Food;
import com.example.project.entity.User;
import com.example.project.service.FavoritesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Base64;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class FavoritesServiceImpl implements FavoritesService {

    private final FavoritesRepository favoriteRepository;
    private final UsersRepository usersRepository;

    @Autowired
    public FavoritesServiceImpl(FavoritesRepository favoriteRepository,
                                UsersRepository usersRepository) {
        this.favoriteRepository = favoriteRepository;
        this.usersRepository = usersRepository;
    }

    @Override
    public List<FavoriteDto> findMostRecentFavoritesByUsername(String username) {

        User user = usersRepository.findByUsername(username);

        List<Favorite> recentFavorites = favoriteRepository.findTop4ByUserIdOrderByAddDateDesc(user.getId());
        return recentFavorites.stream()
                .map(favorite -> {
                    FavoriteDto favoriteDto = new FavoriteDto();
                    Food food = favorite.getFood();
                    favoriteDto.setId(favorite.getId());
                    favoriteDto.setName(food.getName());
                    favoriteDto.setDescription(food.getDescription());
                    favoriteDto.setRating(food.getRating());
                    favoriteDto.setPrice(food.getPrice());
                    favoriteDto.setLocation(food.getLocation());
                    if (food.getImage() != null) {
                        String base64Image = Base64.getEncoder().encodeToString(food.getImage());
                        favoriteDto.setImageBase64(base64Image);
                    }
                    favoriteDto.setAddDate(favorite.getAddDate());
                    return favoriteDto;
                })
                .collect(Collectors.toList());
    }

    @Override
    public void addFavorite(Favorite favorite) {
        favoriteRepository.save(favorite);
    }

    @Override
    public Optional<Favorite> findByUserAndFood(int userId, int foodId) {
        return favoriteRepository.findByUserIdAndFoodId(userId, foodId);
    }
}
