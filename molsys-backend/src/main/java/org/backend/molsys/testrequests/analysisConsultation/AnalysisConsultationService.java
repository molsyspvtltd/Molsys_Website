package org.backend.molsys.testrequests.analysisConsultation;

import org.backend.molsys.exception.AppException;
import org.backend.molsys.testrequests.TestRequest;
import org.backend.molsys.users.User;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.validation.annotation.Validated;

import javax.transaction.Transactional;
import java.time.LocalDate;

@Service
@Validated
public class AnalysisConsultationService {

    @Autowired
    private AnalysisConsultationRepository analysisConsultationRepository;

    private static Logger logger = LoggerFactory.getLogger(AnalysisConsultationService.class);


    @Transactional
    public AnalysisConsultation assignForAnalysisConsultation(TestRequest testRequest, User analysis) {
        AnalysisConsultation analysisConsultation = new AnalysisConsultation();
        analysisConsultation.setAnalysis(analysis);
        analysisConsultation.setRequest(testRequest);

        return    analysisConsultationRepository.save(analysisConsultation);


    }

    public AnalysisConsultation updateAnalysisConsultation(TestRequest testRequest , CreateAnalysisConsultationRequest createAnalysisConsultationRequest) {
        AnalysisConsultation analysisConsultation = analysisConsultationRepository.findByRequest(testRequest).orElseThrow(()-> new AppException("Invalid Request"));

        analysisConsultation.setSuggestion(createAnalysisConsultationRequest.getSuggestion());
        analysisConsultation.setComments(createAnalysisConsultationRequest.getComments());
        analysisConsultation.setUpdatedOn(LocalDate.now());

        return analysisConsultationRepository.save(analysisConsultation);


    }


}
