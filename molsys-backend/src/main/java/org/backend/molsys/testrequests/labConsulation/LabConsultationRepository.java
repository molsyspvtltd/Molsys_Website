package org.backend.molsys.testrequests.labConsulation;

import org.backend.molsys.testrequests.TestRequest;
import org.backend.molsys.testrequests.labConsulation.LabConsultation;
import org.backend.molsys.users.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;


public interface LabConsultationRepository extends JpaRepository<LabConsultation,Long> {


    Optional<LabConsultation> findById(Long Lab_id);



    void deleteById(Long Lab_id);





    List<LabConsultation> findByLab(User user);
    Optional<LabConsultation> findByRequest(TestRequest testRequest);

    Optional<LabConsultation> findByLabAndRequest(User lab,TestRequest testRequest);



}
