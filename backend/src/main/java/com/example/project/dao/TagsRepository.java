package com.example.project.dao;

import com.example.project.entity.Tag;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface TagsRepository extends JpaRepository<Tag, Integer> {
    Optional<Tag> findByTagName(String tagName);
}