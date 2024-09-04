package org.backend.molsys.gcell;

import org.springframework.data.jpa.repository.JpaRepository;

// StudentRepository.java
public interface StudentRepository extends JpaRepository<Student, Long> {
    Student findByEmail(String email);
}
