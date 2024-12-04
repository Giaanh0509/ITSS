package com.example.project.service;

import com.example.project.dto.LoginDTO;
import com.example.project.dto.UserDTO;
import com.example.project.entity.User;
import com.example.project.response.LoginResponse;
import org.springframework.http.ResponseEntity;

public interface UsersService {
    ResponseEntity<?> registerUser(UserDTO userDTO);

    User saveUser (User user);

    LoginResponse loginUser(LoginDTO loginDTO);

    User findByUsername(String username);
}
