// AnketService.java
package com.example.project.service;

import com.example.project.dto.AnketDto;

public interface AnketService {
    AnketDto findAnketByUserId(int userId);
    void addAnket(AnketDto anketDto);
}