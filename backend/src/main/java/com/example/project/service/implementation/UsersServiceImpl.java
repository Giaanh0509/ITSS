package com.example.project.service.implementation;

import com.example.project.dao.UsersRepository;
import com.example.project.dto.LoginDTO;
import com.example.project.dto.UserDTO;
import com.example.project.entity.User;
import com.example.project.response.LoginResponse;
import com.example.project.service.RolesService;
import com.example.project.service.UsersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
@Transactional
public class UsersServiceImpl implements UsersService {

    @Autowired
    UsersRepository usersRepository;

    @Autowired
    RolesService rolesService;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public ResponseEntity<?> registerUser(UserDTO userDTO) {
        if(usersRepository.existsByUsername(userDTO.getUsername())) {
            return ResponseEntity.badRequest().body(new Error("Username that already exist"));
        }

        if(usersRepository.existsByEmail(userDTO.getEmail())) {
            return ResponseEntity.badRequest().body(new Error("Email that already exist"));
        }

        User user = new User(userDTO.getUsername(),
                userDTO.getName(),
                this.passwordEncoder.encode(userDTO.getPassword()),
                userDTO.getEmail());
        usersRepository.save(user);
        System.out.println(user.getEmail());
        System.out.println(user.getUsername());
        return ResponseEntity.ok("Successful Account Registration");
    }

    @Override
    public User saveUser(User user) {
        return usersRepository.save(user);
    }

    @Override
    public LoginResponse loginUser(LoginDTO loginDTO) {
        String msg = "";
        User user1 = usersRepository.findByUsername(loginDTO.getUsername());

        if (user1 != null) {
            String password = loginDTO.getPassword();
            String encodedPassword = user1.getPassword();
            Boolean isPwdRight = passwordEncoder.matches(password, encodedPassword);
            if (isPwdRight) {
                Optional<User> user = usersRepository.findOneByUsernameAndPassword(loginDTO.getUsername(), encodedPassword);
                if (user.isPresent()) {
                    return new LoginResponse("Login Success", true);
                } else {
                    return new LoginResponse("Login Failed", false);
                }
            } else {
                return new LoginResponse("password Not Match", false);
            }
        } else {
            return new LoginResponse("Username not exits", false);
        }
    }

    @Override
    public User findByUsername(String username) {
        return usersRepository.findByUsername(username);
    }
}
