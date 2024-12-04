package com.example.project.controller;

import com.example.project.dto.FoodDto;
import com.example.project.entity.Food;
import com.example.project.exception.AddFoodFailException;
import com.example.project.service.FoodsService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.Optional;

@RestController
@RequestMapping("/foods")
public class FoodDetailController {

    private final FoodsService foodService;

    public FoodDetailController(FoodsService foodService) {
        this.foodService = foodService;
    }

    @GetMapping("/{id}")
    public ResponseEntity<FoodDto> getFoodById(@PathVariable int id) {
        Optional<FoodDto> foodDTO = foodService.getFoodDtoById(id);
        return foodDTO.map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping("/add")
    public ResponseEntity<?> addFood(
            @RequestParam("description") String description,
            @RequestParam("location") String location,
            @RequestParam("name") String name,
            @RequestParam("price") Double price,
            @RequestParam("file") MultipartFile file) {

        try {
            Food savedFood = foodService.saveFoodWithImage(description, location, name, price, file);
            return ResponseEntity.ok(savedFood);
        } catch (AddFoodFailException e) {
            // Handle the custom exception and return a failure response
            return ResponseEntity.status(500).body("Failed to add food: " + e.getMessage());
        }
    }
}
