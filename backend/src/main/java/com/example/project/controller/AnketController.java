package com.example.project.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.project.dto.AnketDto;
import com.example.project.service.AnketService;

@RestController
@RequestMapping("/ankets")
public class AnketController {

    private final AnketService anketService;

    @Autowired
    public AnketController(AnketService anketService) {
        this.anketService = anketService;
    }

    @PostMapping
    public void createAnket(@RequestBody AnketDto anketDto) {
        anketService.addAnket(anketDto);
    }

    @GetMapping("/{id}")
    public AnketDto getAnketByUserId(@PathVariable("id") int id) {
        return anketService.findAnketByUserId(id);
    }
}