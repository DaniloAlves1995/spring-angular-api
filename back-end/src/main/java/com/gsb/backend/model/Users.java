package com.gsb.backend.model;

import lombok.Data;

import javax.persistence.*;

/**
 * <h1>Users class</h1>
 * The Users class implements an entity of this API,
 * which simply has the common data of an user.
 * <p>
 * The class uses dependency injection to be used as object
 * directly mapped to database by JPA and to implements getts
 * and setts methods by lombok.
 *
 * @author  Danilo Alves
 * @version 1.0
 * @since   2022-07-11
 */
@Data
@Entity
public class Users {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(length = 60, nullable = false)
    private String name;

    @Column(length = 12, nullable = false)
    private String birth;

    @Column(length = 25, nullable = false)
    private String gender;

    @Column(length = 60, nullable = true)
    private String country;

    @Column(length = 20, nullable = true)
    private String phone;

    @Column(length = 40, nullable = false)
    private String email;

}
