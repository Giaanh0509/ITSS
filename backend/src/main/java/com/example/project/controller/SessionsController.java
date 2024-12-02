package com.example.project.controller;

import com.example.project.entity.User;
import com.example.project.service.UsersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:3000/")
@RestController
@RequestMapping("/sessions")
public class SessionsController {
    @Autowired
    UsersService usersService;

    @PostMapping("/")
    public ResponseEntity<?> registerUser(@RequestBody User user) {
        ResponseEntity<?> response = usersService.registerUser(user);
        return response;
    }
}
