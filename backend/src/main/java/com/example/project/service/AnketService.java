// AnketService.java
package com.example.project.service;

import com.example.project.dto.AnketDto;
import com.example.project.entity.Anket;

public interface AnketService {
    AnketDto findAnketByUserId(int userId);
    Anket addAnket(AnketDto anketDto);
}