package com.example.project.service.implementation;

import com.example.project.dao.ReviewsRepository;
import com.example.project.dto.ReviewDto;
import com.example.project.entity.Review;
import com.example.project.service.ReviewsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ReviewsServiceImpl implements ReviewsService {

    private final ReviewsRepository reviewsRepository;

    @Autowired
    public ReviewsServiceImpl(ReviewsRepository reviewsRepository) {
        this.reviewsRepository = reviewsRepository;
    }

    @Override
    public Page<ReviewDto> findReviewsByFoodId(int foodId, Pageable pageable) {
        Page<Review> reviews = reviewsRepository.findByFoodId(foodId, pageable);

        return reviews.map(review -> new ReviewDto(
                review.getUser().getUsername(),
                review.getFood().getName(),
                review.getStar(),
                review.getComment(),
                review.getDate()
        ));
    }

    @Override
    public List<ReviewDto> findTop3HighestRatedReviews() {
        List<Review> highestRatedReviews = reviewsRepository.findTop3ByOrderByStarDesc();

        return highestRatedReviews.stream()
                .map(review -> new ReviewDto(
                        review.getUser().getUsername(),
                        review.getFood().getName(),
                        review.getStar(),
                        review.getComment(),
                        review.getDate()
                ))
                .collect(Collectors.toList());
    }
}
