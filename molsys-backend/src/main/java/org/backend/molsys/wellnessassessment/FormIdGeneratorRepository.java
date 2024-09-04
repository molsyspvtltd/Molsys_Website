package org.backend.molsys.wellnessassessment;

import org.springframework.data.jpa.repository.JpaRepository;

public interface FormIdGeneratorRepository extends JpaRepository<FormIdGenerator, Long> {
}
