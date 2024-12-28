package com.example.project.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.project.entity.Anket;

@Repository
public interface AnketRepository extends JpaRepository<Anket, Integer> {
    Anket findAnketByUserId(int id);

    Optional<Anket> findByUserUsername(String username);
}
