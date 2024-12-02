package com.example.project.service;

import com.example.project.entity.User;
import org.springframework.http.ResponseEntity;

public interface UsersService {
    ResponseEntity<?> registerUser(User user);

    User saveUser (User user);
}
