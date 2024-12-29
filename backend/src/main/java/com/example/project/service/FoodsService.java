package com.example.project.service;

import java.util.List;
import java.util.Optional;

import org.springframework.web.multipart.MultipartFile;

import com.example.project.dto.FoodDto;
import com.example.project.entity.Food;

public interface FoodsService {
    List<FoodDto> getAllFoods();
    Optional<FoodDto> getFoodDtoById(int id);

    Food getFoodById(int id);

    Food saveFoodWithImage(String description, String location, String name, Double price, MultipartFile file, List<Integer> tagIds);
    List<FoodDto> getFoodsByTagName(String tagName);

}