package com.example.project.service.implementation;

import com.example.project.dao.FoodRepository;
import com.example.project.dto.FoodDto;
import com.example.project.entity.Food;
import com.example.project.exception.AddFoodFailException;
import com.example.project.service.FoodService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Base64;
import java.util.Optional;

@Service
public class FoodServiceImpl implements FoodService {

    private final FoodRepository foodRepository;

    @Autowired
    public FoodServiceImpl(FoodRepository foodRepository) {
        this.foodRepository = foodRepository;
    }

    @Override
    public Optional<FoodDto> getFoodById(int id) {
        Optional<Food> foodOptional = foodRepository.findById(id);

        if (foodOptional.isPresent()) {
            Food food = foodOptional.get();

            // Map Food entity to FoodDTO
            FoodDto foodDTO = new FoodDto();
            foodDTO.setName(food.getName());
            foodDTO.setDescription(food.getDescription());
            foodDTO.setRating(food.getRating());
            foodDTO.setPrice(food.getPrice());
            foodDTO.setLocation(food.getLocation());

            // Convert byte[] to Base64 string
            if (food.getImage() != null) {
                String base64Image = Base64.getEncoder().encodeToString(food.getImage());
                foodDTO.setImageBase64(base64Image);
            }

            return Optional.of(foodDTO);
        }

        return Optional.empty();
    }

    @Override
    public Food saveFoodWithImage(String description, String location,
                                  String name, Double price, MultipartFile file) {
        try {
            Food food = new Food();
            food.setDescription(description);
            food.setLocation(location);
            food.setName(name);
            food.setPrice(price);
            food.setRating(0); // Default rating

            // Convert the image file to a byte array
            food.setImage(file.getBytes()); // Handles the image upload

            // Save the food to the repository
            return foodRepository.save(food);
        } catch (IOException e) {
            throw new AddFoodFailException("Error while saving food ", e);
        }
    }


}
