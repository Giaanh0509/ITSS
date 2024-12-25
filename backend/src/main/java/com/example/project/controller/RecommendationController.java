package com.example.project.controller;

import com.example.project.dto.FoodDto;
import com.example.project.service.RecommendationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.project.dto.AnketDto;
import com.example.project.entity.Anket;
import com.example.project.service.AnketService;

import java.util.List;

@RestController
@RequestMapping("/recommendations")
public class RecommendationController {

    private final RecommendationService recommendationService;

    @Autowired
    public RecommendationController(RecommendationService recommendationService) {
        this.recommendationService = recommendationService;
    }

    @GetMapping
    public ResponseEntity<List<FoodDto>> getRecommendations(@RequestParam String username) {
        List<FoodDto> recommendations = recommendationService.getRecommendationsForUser(username);
        if (recommendations.isEmpty()) {
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.ok(recommendations);
    }
}
