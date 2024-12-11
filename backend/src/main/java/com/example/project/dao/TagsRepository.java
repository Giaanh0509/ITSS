package com.example.project.dao;

import com.example.project.entity.Tag;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TagsRepository extends JpaRepository<Tag, Integer> {
}