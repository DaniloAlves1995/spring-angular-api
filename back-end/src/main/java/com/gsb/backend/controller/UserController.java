package com.gsb.backend.controller;

import com.gsb.backend.model.Users;
import com.gsb.backend.repository.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "http://localhost:4200")
@AllArgsConstructor
public class UserController {
    private final UserRepository courseRepository;

    @GetMapping
    public List<Users> list() {
        return courseRepository.findAll();
    }

    @PostMapping
    @ResponseStatus(code = HttpStatus.CREATED)
    public Users create(@RequestBody Users user) {
        return courseRepository.save(user);
    }
}
