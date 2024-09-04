package org.backend.molsys.testrequests.labConsulation;

import org.backend.molsys.exception.AppException;
import org.backend.molsys.testrequests.TestRequest;
import org.backend.molsys.testrequests.labConsulation.LabConsultation;
import org.backend.molsys.testrequests.labConsulation.LabConsultationRepository;
import org.backend.molsys.testrequests.labConsulation.CreateLabConsultationRequest;
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
public class LabConsultationService {

    @Autowired
    private LabConsultationRepository labConsultationRepository;

    private static Logger logger = LoggerFactory.getLogger(LabConsultationService.class);


    @Transactional
    public LabConsultation assignForLabConsultation(TestRequest testRequest, User lab) {
        LabConsultation labconsultation = new LabConsultation();
        labconsultation.setLab(lab);
        labconsultation.setRequest(testRequest);

        return    labConsultationRepository.save(labconsultation);


    }

    public LabConsultation updateLabConsultation(TestRequest testRequest , CreateLabConsultationRequest createLabConsultationRequest) {
        LabConsultation labconsultation = labConsultationRepository.findByRequest(testRequest).orElseThrow(()-> new AppException("Invalid Request"));

        labconsultation.setSuggestion(createLabConsultationRequest.getSuggestion());
        labconsultation.setComments(createLabConsultationRequest.getComments());
        labconsultation.setUpdatedOn(LocalDate.now());

        return labConsultationRepository.save(labconsultation);


    }


}
