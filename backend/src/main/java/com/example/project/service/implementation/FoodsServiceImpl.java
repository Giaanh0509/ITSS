package com.example.project.service.implementation;

import com.example.project.dao.FoodsRepository;
import com.example.project.dao.TagsRepository;
import com.example.project.dto.FoodDto;
import com.example.project.entity.Food;
import com.example.project.entity.Tag;
import com.example.project.exception.AddFoodFailException;
import com.example.project.service.FoodsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.*;

@Service
public class FoodsServiceImpl implements FoodsService {

    private final FoodsRepository foodRepository;
    private final TagsRepository tagsRepository;

    @Autowired
    public FoodsServiceImpl(FoodsRepository foodRepository, TagsRepository tagsRepository) {
        this.foodRepository = foodRepository;
        this.tagsRepository = tagsRepository;
    }

    @Override
    public Optional<FoodDto> getFoodDtoById(int id) {
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
    public Food getFoodById(int id) {
        return foodRepository.getReferenceById(id);
    }

    @Override
    public Food saveFoodWithImage(String description, String location,
                                  String name, Double price, MultipartFile file, List<Integer> tagIds) {
        try {
            Food food = new Food();
            food.setDescription(description);
            food.setLocation(location);
            food.setName(name);
            food.setPrice(price);
            food.setRating(0); // Default rating

            // Convert the image file to a byte array
            food.setImage(file.getBytes()); // Handles the image upload

            Set<Tag> tags = new HashSet<>(tagsRepository.findAllById(tagIds));
            food.setTags(tags);

            // Save the food to the repository
            return foodRepository.save(food);
        } catch (IOException e) {
            throw new AddFoodFailException("Error while saving food ", e);
        }
    }


}
