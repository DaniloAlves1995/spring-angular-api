package com.gsb.backend.model;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
public class Users {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(length = 60, nullable = false)
    private String name;

    @Column(length = 12, nullable = true)
    private String birth;

    @Column(length = 25, nullable = false)
    private String gender;

    @Column(length = 60, nullable = false)
    private String country;

    @Column(length = 20, nullable = false)
    private String phone;

    @Column(length = 40, nullable = false)
    private String email;




}
