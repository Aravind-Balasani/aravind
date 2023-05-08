package com.ojas.repo;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ojas.model.Student;
@Repository
public interface StudentRepo extends JpaRepository<Student, Integer> {
	Optional<Student>  findByUserName(String userName);

}
