package com.gsb.backend;

import com.gsb.backend.model.Users;
import com.gsb.backend.repository.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class BackEndApplication {

	public static void main(String[] args) {
		SpringApplication.run(BackEndApplication.class, args);
	}

	@Bean
	CommandLineRunner initDatabase(UserRepository courseRepository) {
		return args -> {
			courseRepository.deleteAll();

			Users user = new Users();
			user.setName("Vitória Silva");
			user.setBirth("03/03/2001");
			user.setGender("Female");
			user.setCountry("Brazil");
			user.setPhone("+5588969632");
			user.setEmail("vitoriasouza0303@gmail.com");

			courseRepository.save(user);
		};
	}

}
