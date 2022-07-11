package com.gsb.backend.repository;

import com.gsb.backend.model.Users;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * <h1>UserRepository interface</h1>
 * This interface inherits the JPA, which allows work with database of
 * a elegant and easier way. The inherits already provide all the necessaries
 * implementations for this API to use the database.
 *
 * @author  Danilo Alves
 * @version 1.0
 * @since   2022-07-11
 */
public interface UserRepository extends JpaRepository<Users, Long> {
}
