package com.example.project.service.implementation;

import com.example.project.dao.TagsRepository;
import com.example.project.entity.Tag;
import com.example.project.service.TagsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TagsServiceImpl implements TagsService {

    private final TagsRepository tagsRepository;

    @Autowired
    public TagsServiceImpl(TagsRepository tagsRepository) {
        this.tagsRepository = tagsRepository;
    }

    public List<Tag> getAllTags() {
        return tagsRepository.findAll();
    }
}
