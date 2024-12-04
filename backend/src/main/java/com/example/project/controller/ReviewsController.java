package com.example.project.controller;

import com.example.project.dto.ReviewDto;
import com.example.project.entity.Review;
import com.example.project.service.ReviewsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/reviews")
public class ReviewsController {

    private final ReviewsService reviewsService;

    @Autowired
    public ReviewsController(ReviewsService reviewsService) {
        this.reviewsService = reviewsService;
    }

    @GetMapping("/food/{foodId}")
    public ResponseEntity<Page<ReviewDto>> getAllReviews(
            @PathVariable int foodId,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "4") int size
    ) {
        Pageable pageable = PageRequest.of(page, size);
        Page<ReviewDto> reviews = reviewsService.findReviewsByFoodId(foodId, pageable);

        return ResponseEntity.ok(reviews);
    }

    @GetMapping("/highest")
    public ResponseEntity<List<ReviewDto>> getHighestRatedReviews() {
        List<ReviewDto> reviews = reviewsService.findTop3HighestRatedReviews();
        return ResponseEntity.ok(reviews);
    }

}
