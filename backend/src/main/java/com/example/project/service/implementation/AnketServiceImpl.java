package com.example.project.service.implementation;

import org.springframework.stereotype.Service;

import com.example.project.dao.AnketRepository;
import com.example.project.dao.UsersRepository;
import com.example.project.dto.AnketDto;
import com.example.project.entity.Anket;
import com.example.project.entity.User;
import com.example.project.service.AnketService;

@Service
public class AnketServiceImpl implements AnketService {

    private final AnketRepository anketRepository;
    private final UsersRepository usersRepository;

    public AnketServiceImpl(AnketRepository anketRepository, UsersRepository usersRepository) {
        this.anketRepository = anketRepository;
        this.usersRepository = usersRepository;
    }

    @Override
    public AnketDto findAnketByUserId(int userId) {
        Anket anket = anketRepository.findAnketByUserId(userId);
        return new AnketDto(anket.getFavoriteFlavors(), anket.getFavoriteFoods(), anket.getPrice(), anket.getDislikes(), userId);
    }

    @Override
    public Anket addAnket(AnketDto anketDto) {
        Anket anket = new Anket();
        User user = usersRepository.findById(anketDto.getUserId()).orElseThrow(() -> new RuntimeException("User not found"));
        anket.setUser(user);
        anket.setFavoriteFlavors(anketDto.getFavoriteFlavor());
        anket.setFavoriteFoods(anketDto.getFavoriteFoods());
        anket.setPrice(anketDto.getPrice());
        anket.setDislikes(anketDto.getDislikes());
        return anketRepository.save(anket);
    }
}