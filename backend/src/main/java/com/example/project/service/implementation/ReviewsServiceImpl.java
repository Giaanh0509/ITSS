package com.example.project.service.implementation;

import com.example.project.dao.FoodsRepository;
import com.example.project.dao.ReviewsRepository;
import com.example.project.dao.UsersRepository;
import com.example.project.dto.AddReviewDto;
import com.example.project.dto.ReviewDto;
import com.example.project.entity.Food;
import com.example.project.entity.Review;
import com.example.project.entity.User;
import com.example.project.service.ReviewsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ReviewsServiceImpl implements ReviewsService {

    private final ReviewsRepository reviewsRepository;
    private final FoodsRepository foodsRepository;
    private final UsersRepository usersRepository;

    @Autowired
    public ReviewsServiceImpl(ReviewsRepository reviewsRepository, FoodsRepository foodsRepository, UsersRepository usersRepository) {
        this.reviewsRepository = reviewsRepository;
        this.foodsRepository = foodsRepository;
        this.usersRepository = usersRepository;
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

    public void saveReview(AddReviewDto addReviewDto) {
        // Fetch the Food entity
        Food food = foodsRepository.findById(addReviewDto.getFoodId())
                .orElseThrow(() -> new IllegalArgumentException("Food not found with ID: " + addReviewDto.getFoodId()));

        // Fetch the User entity
        User user = usersRepository.findByUsername(addReviewDto.getUsername());
        if (user == null) {
            throw new RuntimeException("User not found");
        }

        // Create a new Review object
        Review review = new Review();
        review.setFood(food);
        review.setUser(user);
        review.setStar(addReviewDto.getStar());
        review.setComment(addReviewDto.getComment());
        review.setDate(addReviewDto.getDate());

        // Save the review in the database
        reviewsRepository.save(review);
        updateFoodRating(food);
    }

    private void updateFoodRating(Food food) {
        // Fetch all reviews for the given Food
        Pageable pageable = PageRequest.of(0, 8); // For page 0 with 10 items per page
        Page<Review> pagedReviews = reviewsRepository.findByFoodId(food.getId(), pageable);
        List<Review> reviews = pagedReviews.getContent();

        // Calculate the average rating
        double averageRating = reviews.stream()
                .mapToDouble(Review::getStar)
                .average()
                .orElse(0.0);
        double formattedRating = Double.parseDouble(String.format("%.1f", averageRating));
        // Update the Food entity's rating
        food.setRating(formattedRating);
        foodsRepository.save(food);
    }
}
