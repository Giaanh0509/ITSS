package com.example.project.service.implementation;

import com.example.project.dao.RolesRepository;
import com.example.project.entity.Role;
import com.example.project.service.RolesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class RolesServiceImpl implements RolesService {

    @Autowired
    RolesRepository rolesRepository;


    @Override
    public Role findById(int id) {
        return rolesRepository.findById(id);
    }
}
