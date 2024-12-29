package com.example.project.service.implementation;

import java.util.Base64;
import java.util.List;
import java.util.Objects;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.project.dao.AnketRepository;
import com.example.project.dao.FoodsRepository;
import com.example.project.dto.FoodDto;
import com.example.project.entity.Anket;
import com.example.project.entity.Food;
import com.example.project.service.RecommendationService;

@Service
public class RecommendationServiceImpl implements RecommendationService {

    private final AnketRepository anketRepository;
    private final FoodsRepository foodRepository;

    @Autowired
    public RecommendationServiceImpl(AnketRepository anketRepository, FoodsRepository foodRepository) {
        this.anketRepository = anketRepository;
        this.foodRepository = foodRepository;
    }

    @Override
    public List<FoodDto> getRecommendationsForUser(String username) {
        // Step 1: Retrieve ankets entry for the user
        Optional<Anket> anketOptional = anketRepository.findByUserUsername(username);
        if (anketOptional.isEmpty()) {
            return List.of(); // No preferences found
        }
        Anket anket = anketOptional.get();

        // Step 2: Fetch matching tags from the ankets data
        
        String temp = anket.getFavoriteFlavors() + "," + anket.getFavoriteFoods() + "," + anket.getPrice();

        List<String> preferredTags = List.of(temp.split(","))
                .stream()
                .filter(Objects::nonNull)
                .map(String::trim)
                .collect(Collectors.toList());

        temp = anket.getDislikes();
        List<String> dislikedTags = List.of(temp.split(","))
                .stream()
                .filter(Objects::nonNull)
                .map(String::trim)
                .collect(Collectors.toList());

        // Step 3: Find food items that match the tags
        List<Food> matchingFoods = foodRepository.findFoodsByTags(preferredTags, username, dislikedTags);

        // Step 4: Map the food entities to DTOs
        return matchingFoods.stream()
                .map(this::convertToDto)
                .collect(Collectors.toList());
    }

    private FoodDto convertToDto(Food food) {
        FoodDto dto = new FoodDto();
        dto.setId(food.getId());
        dto.setName(food.getName());
        dto.setDescription(food.getDescription());
        dto.setPrice(food.getPrice());
        if (food.getImage() != null) {
            String base64Image = Base64.getEncoder().encodeToString(food.getImage());
            dto.setImageBase64(base64Image);
        }
        return dto;
    }
}
