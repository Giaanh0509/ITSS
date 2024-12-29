package com.example.project.dao;

import com.example.project.entity.Food;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

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

    @Query(value = """
        SELECT DISTINCT f.*
        FROM foods f
        JOIN JSON_TABLE(
            CONCAT('["', REPLACE(f.tagName, ',', '","'), '"]'),
            '$[*]' COLUMNS(tag VARCHAR(255) PATH '$')
        ) AS split_tags
        ON split_tags.tag IN (:tags)
        WHERE NOT EXISTS (
            SELECT 1
            FROM JSON_TABLE(
                CONCAT('["', REPLACE(f.tagName, ',', '","'), '"]'),
                '$[*]' COLUMNS(dislikedTag VARCHAR(255) PATH '$')
            ) AS split_disliked_tags
            WHERE split_disliked_tags.dislikedTag IN (
                SELECT JSON_UNQUOTE(JSON_EXTRACT(a.dislike, CONCAT('$[', n, ']')))
                FROM ankets a
                JOIN users u ON a.user_id = u.id
                CROSS JOIN JSON_TABLE(
                    CONCAT('["', REPLACE(a.dislike, ',', '","'), '"]'),
                    '$[*]' COLUMNS(n INT PATH '$')
                ) AS split_dislikes
                WHERE u.username = :username
            )
        )
    """, nativeQuery = true)
    List<Food> findFoodsByTags(@Param("tags") List<String> tags, @Param("username") String username);





}

