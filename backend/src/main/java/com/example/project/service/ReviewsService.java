package com.example.project.service;

import com.example.project.entity.Review;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface ReviewsService {

    Page<Review> getReviews(Pageable pageable);
}
