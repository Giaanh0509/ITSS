package com.example.project.dao;

import com.example.project.entity.Review;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ReviewsRepository extends JpaRepository<Review, Integer> {

    Page<Review> findByFoodId(int foodId, Pageable pageable);

    List<Review> findTop3ByOrderByStarDesc();
}
