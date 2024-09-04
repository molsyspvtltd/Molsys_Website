package org.backend.molsys.testrequests.analysisConsultation;

import org.backend.molsys.testrequests.TestRequest;
import org.backend.molsys.testrequests.analysisConsultation.AnalysisConsultation;
import org.backend.molsys.users.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;


public interface AnalysisConsultationRepository extends JpaRepository<AnalysisConsultation,Long> {


    Optional<AnalysisConsultation> findById(Long analysis_id);



    void deleteById(Long analysis_id);





    List<AnalysisConsultation> findByAnalysis(User user);
    Optional<AnalysisConsultation> findByRequest(TestRequest testRequest);

    Optional<AnalysisConsultation> findByAnalysisAndRequest(User analysis,TestRequest testRequest);


}
