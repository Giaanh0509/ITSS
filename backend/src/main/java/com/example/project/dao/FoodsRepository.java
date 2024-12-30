package com.example.project.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.project.entity.Food;

@Repository
public interface FoodsRepository extends JpaRepository<Food, Integer> {

//    @Query("""
//        SELECT DISTINCT f
//        FROM Food f
//        JOIN f.tags t
//        WHERE t.tagName IN :tags
//          AND NOT EXISTS (
//              SELECT 1
//              FROM f.tags t2
//              WHERE t2.tagName IN (
//                  SELECT a.dislike
//                  FROM Anket a
//                  JOIN a.user u
//                  WHERE u.username = :username
//              )
//          )
//    """)
//    List<Food> findFoodsByTags(@Param("tags") List<String> tags, @Param("username") String username);

    @Query("""
        SELECT DISTINCT f
        FROM Food f
        JOIN f.tags t
        WHERE t.tagName IN :tags
        AND NOT EXISTS (
            SELECT 1
            FROM f.tags t2
            WHERE t2.tagName IN :dislikedTags
        )
    """)

    List<Food> findFoodsByTags(@Param("tags") List<String> tags, @Param("username") String username, @Param("dislikedTags") List<String> dislikedTags);


}

