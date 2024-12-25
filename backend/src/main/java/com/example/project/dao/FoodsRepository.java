package com.example.project.dao;

import com.example.project.entity.Food;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FoodsRepository extends JpaRepository<Food, Integer> {

    @Query("SELECT DISTINCT f FROM Food f JOIN f.tags t WHERE t.tagName IN :tags")
    List<Food> findFoodsByTags(@Param("tags") List<String> tags);
}

