package com.example.project.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.project.dto.AnketDto;
import com.example.project.entity.Anket;
import com.example.project.service.AnketService;

@RestController
@RequestMapping("/suggest")
public class AnketController {

    private final AnketService anketService;

    public AnketController(AnketService anketService) {
        this.anketService = anketService;
    }

    @PostMapping("/anket")
        public ResponseEntity<?> createAnket(@RequestBody AnketDto anketDto) {
        try {
            Anket createdAnket = anketService.addAnket(anketDto);
            return ResponseEntity.ok(createdAnket);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(500).body("Internal Server Error: " + e.getMessage());
        }
    }

    @GetMapping("/anket/{username}")
    public ResponseEntity<AnketDto> getAnketByUserId(@PathVariable String username) {
        AnketDto anketDto = anketService.findAnketByUsername(username);
        return ResponseEntity.ok(anketDto);
    }

    @DeleteMapping("/anket/{username}")
    public ResponseEntity<?> deleteAnket(@PathVariable String username) {
        try {
            anketService.deleteAnket(username);
            return ResponseEntity.ok("Anket deleted successfully");
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(500).body("Internal Server Error: " + e.getMessage());
        }
    }
}