package com.gsb.backend.controller;

import com.gsb.backend.model.Users;
import com.gsb.backend.repository.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/users")
@AllArgsConstructor
public class UserController {
    private final UserRepository courseRepository;

    @GetMapping
    public List<Users> list() {
        return courseRepository.findAll();
    }
}
