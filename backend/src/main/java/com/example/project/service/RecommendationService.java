package com.example.project.service;

import com.example.project.dto.FoodDto;
import java.util.List;

public interface RecommendationService {
    List<FoodDto> getRecommendationsForUser(String username);
}
