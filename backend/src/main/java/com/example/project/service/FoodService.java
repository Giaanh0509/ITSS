package com.example.project.service;

import com.example.project.dto.FoodDto;
import com.example.project.entity.Food;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.Optional;

public interface FoodService {

    Optional<FoodDto> getFoodById(int id);

    Food saveFoodWithImage(String description, String location, String name, Double price, MultipartFile file);
}
