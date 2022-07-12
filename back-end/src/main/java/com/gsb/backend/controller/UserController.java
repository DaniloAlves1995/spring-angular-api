package com.gsb.backend.controller;

import com.gsb.backend.model.Users;
import com.gsb.backend.repository.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * <h1>UserController class</h1>
 * This class implements the API endpoints specifying
 * the actions to be performed by each required http route and method.
 * <p>
 * The class has just one end-point with two http methods,
 * one of them to list users using GET method and another
 * to register users using POST method.
 *
 * @author  Danilo Alves
 * @version 1.0
 * @since   2022-07-11
 */
@RestController
@RequestMapping("/api/users")
@CrossOrigin
@AllArgsConstructor
public class UserController {
    private final UserRepository courseRepository;

    /**
     * Method for endpoint on GET call.   It returns all
     * users registered in the database .
     *
     * @retur List<Users>: the list with users from database.
     */
    @GetMapping
    public List<Users> list() {
        return courseRepository.findAll();
    }

    /**
     * Method for endpoint on POST call.   receives the data of
     * a request per post in the body and saves it in the database.
     *
     * @retur Users: the object that was saved
     */
    @PostMapping
    @ResponseStatus(code = HttpStatus.CREATED)
    public Users create(@RequestBody Users user) {
        return courseRepository.save(user);
    }
}
