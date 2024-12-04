package com.example.project.controller;

import com.example.project.dto.FavoriteDto;
import com.example.project.dto.FavoriteRequestDto;
import com.example.project.dto.FoodDto;
import com.example.project.entity.Favorite;
import com.example.project.entity.Food;
import com.example.project.entity.User;
import com.example.project.service.FavoritesService;
import com.example.project.service.FoodsService;
import com.example.project.service.UsersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/favorites")
public class FavoriteController {

    private final FavoritesService favoriteService;
    private final UsersService usersService;
    private final FoodsService foodsService;

    @Autowired
    public FavoriteController(FavoritesService favoriteService,
                              UsersService usersService,
                              FoodsService foodsService) {
        this.favoriteService = favoriteService;
        this.usersService = usersService;
        this.foodsService = foodsService;
    }

    @GetMapping("/recent")
    public ResponseEntity<List<FavoriteDto>> getRecentFavorites() {
        try {
            List<FavoriteDto> recentFavorites = favoriteService.findMostRecentFavorites();

            if (!recentFavorites.isEmpty()) {
                return ResponseEntity.ok(recentFavorites);
            } else {
                return ResponseEntity.notFound().build();
            }
        } catch (Exception e) {
            return ResponseEntity.status(500).body(null);
        }
    }

    @PostMapping("/add")
    public ResponseEntity<String> addFavorite(@RequestBody FavoriteRequestDto request) throws ParseException {
        try {
            User user = usersService.findByUsername(request.getUsername());
            if (user == null) {
                return ResponseEntity.status(404).body("User not found.");
            }

            Food food = foodsService.getFoodById(request.getFoodId());
            if (food == null) {
                return ResponseEntity.status(404).body("Food not found.");
            }

            SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
            String dateString = dateFormat.format(new Date());

            Date addDate = dateFormat.parse(dateString);

            Favorite favorite = new Favorite();
            favorite.setFood(food);
            favorite.setUser(user);
            favorite.setAddDate(addDate);

            favoriteService.addFavorite(favorite);

            return ResponseEntity.ok("Favorite added sucessfully.");
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Error adding new favorite: " + e.getMessage());
        }
    }
}
