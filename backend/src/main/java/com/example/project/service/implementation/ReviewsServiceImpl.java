package com.example.project.service.implementation;

import com.example.project.dao.ReviewsRepository;
import com.example.project.entity.Review;
import com.example.project.service.ReviewsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class ReviewsServiceImpl implements ReviewsService {

    private final ReviewsRepository reviewsRepository;

    @Autowired
    public ReviewsServiceImpl(ReviewsRepository reviewsRepository) {
        this.reviewsRepository = reviewsRepository;
    }

    @Override
    public Page<Review> getReviews(Pageable pageable) {
        return reviewsRepository.findAll(pageable);
    }
}
