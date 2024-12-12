package com.example.project.service;

import com.example.project.dto.AddReviewDto;
import com.example.project.dto.ReviewDto;
import com.example.project.entity.Review;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface ReviewsService {

    Page<ReviewDto> findReviewsByFoodId(int foodId, Pageable pageable);

    List<ReviewDto> findTop3HighestRatedReviews();

    void saveReview(AddReviewDto addReviewDto);
}
