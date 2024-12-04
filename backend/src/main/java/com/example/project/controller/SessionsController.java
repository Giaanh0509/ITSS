package com.example.project.controller;

import com.example.project.dto.LoginDTO;
import com.example.project.dto.UserDTO;
import com.example.project.entity.User;
import com.example.project.response.LoginResponse;
import com.example.project.service.UsersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/sessions")
public class SessionsController {
    @Autowired
    UsersService usersService;

    @PostMapping("/")
    public ResponseEntity<?> registerUser(@RequestBody UserDTO userDTO) {
        ResponseEntity<?> response = usersService.registerUser(userDTO);
        return response;
    }

    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody LoginDTO loginDTO) {
        LoginResponse loginResponse = usersService.loginUser(loginDTO);
        return ResponseEntity.ok(loginResponse);
    }
}
