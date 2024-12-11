package com.example.project.controller;

import com.example.project.dto.TagDto;
import com.example.project.entity.Tag;
import com.example.project.service.TagsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/tags")
public class TagsController {

    private final TagsService tagsService;

    @Autowired
    public TagsController(TagsService tagsService) {
        this.tagsService = tagsService;
    }

    @GetMapping
    public ResponseEntity<List<TagDto>> getAllTags() {
        try {
            // Fetch tags and map them to DTOs
            List<TagDto> tags = tagsService.getAllTags().stream()
                    .map(tag -> new TagDto(tag.getId(), tag.getTagName()))
                    .collect(Collectors.toList());
            return ResponseEntity.ok(tags);
        } catch (Exception e) {
            return ResponseEntity.status(500).body(null);
        }
    }
}
