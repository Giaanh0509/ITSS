package com.example.project.controller;

import com.example.project.dto.FoodDto;
import com.example.project.service.FoodsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("")  // Base path for the API
public class FoodController {

    private final FoodsService foodsService;

    @Autowired
    public FoodController(FoodsService foodsService) {
        this.foodsService = foodsService;
    }

    // Endpoint to get all food items for the Menu page
    @GetMapping("/menu")
    public List<FoodDto> getAllFoods() {
        return foodsService.getAllFoods();
    }

    @GetMapping("/{id}")
    public ResponseEntity<FoodDto> getFoodById(@PathVariable int id) {
        return foodsService.getFoodDtoById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }
    @GetMapping("/menu/by-tag")
    public ResponseEntity<List<FoodDto>> getFoodsByTag(@RequestParam String tagName) {
        try {
            List<FoodDto> foods = foodsService.getFoodsByTagName(tagName);
            return ResponseEntity.ok(foods);
        } catch (Exception e) {
            return ResponseEntity.status(500).body(null);
        }
    }

}