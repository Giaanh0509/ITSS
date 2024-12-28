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
    public AnketDto findAnketByUsername(String username) {
        User user = usersRepository.findByUsername(username);
        Anket anket = anketRepository.findAnketByUserId(user.getId());
        return new AnketDto(anket.getFavoriteFlavors(), anket.getFavoriteFoods(), anket.getPrice(), anket.getDislikes(), anket.getUser().getUsername());
    }

    @Override
    public Anket addAnket(AnketDto anketDto) {
        Anket anket = new Anket();
        User user = usersRepository.findByUsername(anketDto.getUsername());
        
        if (user == null) {
            throw new RuntimeException("User not found with username: " + anketDto.getUsername());
        }
        
        anket.setUser(user);
        anket.setFavoriteFlavors(anketDto.getFavoriteFlavor());
        anket.setFavoriteFoods(anketDto.getFavoriteFoods());
        anket.setPrice(anketDto.getPrice());
        anket.setDislikes(anketDto.getDislikes());
        return anketRepository.save(anket);
    }

    @Override
    public void deleteAnket(String username) {
        User user = usersRepository.findByUsername(username);
        Anket anket = anketRepository.findAnketByUserId(user.getId());
        anketRepository.delete(anket);
    }
}