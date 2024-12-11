package com.example.project.controller;

import com.example.project.dto.FoodDto;
import com.example.project.service.FoodsService;
import org.springframework.beans.factory.annotation.Autowired;
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

    // Endpoint to get food details by id

}
