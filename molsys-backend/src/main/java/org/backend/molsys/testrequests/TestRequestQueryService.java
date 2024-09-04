package org.backend.molsys.testrequests;

import org.backend.molsys.exception.AppException;
import org.backend.molsys.testrequests.analysisConsultation.AnalysisConsultation;
import org.backend.molsys.testrequests.analysisConsultation.AnalysisConsultationRepository;
import org.backend.molsys.testrequests.lab.LabResult;
import org.backend.molsys.testrequests.lab.LabResultRepository;
import org.backend.molsys.testrequests.labConsulation.LabConsultation;
import org.backend.molsys.testrequests.labConsulation.LabConsultationRepository;
import org.backend.molsys.users.User;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.validation.annotation.Validated;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@Validated
public class TestRequestQueryService {

    @Autowired
    private TestRequestRepository testRequestRepository;


    @Autowired
    private LabResultRepository labResultRepository;


    @Autowired
    private AnalysisConsultationRepository analysisConsultationRepository;


    @Autowired
    private LabConsultationRepository labConsultationRepository;

    private static Logger logger = LoggerFactory.getLogger(TestRequestQueryService.class);


    public List<TestRequest> findAll() {

        return testRequestRepository.findAll();
    }


    public Optional<TestRequest> getTestRequestById(Long id) {

        return testRequestRepository.findById(id);
    }




    public List<TestRequest> findBy(RequestStatus requestStatus) {
        return testRequestRepository.findByStatus(requestStatus);

    }



    public List<TestRequest> findBySales(User user) {

        return  labResultRepository.findBySales(user)
                .stream()
                .map(LabResult::getRequest)
                .collect(Collectors.toList());

    }

    public List<TestRequest> findByLab(User user) {
        return  labConsultationRepository.findByLab(user)
                .stream()
                .map(LabConsultation::getRequest)
                .collect(Collectors.toList());
    }

    public List<TestRequest> findByAnalysis(User user) {
        return  analysisConsultationRepository.findByAnalysis(user)
                .stream()
                .map(AnalysisConsultation::getRequest)
                .collect(Collectors.toList());
    }




    public Optional<TestRequest> findTestRequestForUserByID(User user,Long user_id) {


        logger.info("findTestRequestForUserByID" + user.getRoles().toString());

        if(user.doesRoleIsUser())
            return  findByUserAndID(user,user_id);
        else if(user.doesRoleIsSales())
            return findBySalesAndID(user,user_id);
        else if(user.doesRoleIsLab())
            return findByLabAndID(user,user_id);
        else if(user.doesRoleIsAnalysis())
            return findByAnalysisAndID(user,user_id);
        else if(user.doesRoleIsOperator())
            return testRequestRepository.findByOrderID(user_id);
        else if(user.doesRoleIsAdmin())
            return testRequestRepository.findByOrderID(user_id);
        else
            throw new AppException("Invalid Role");

    }




    public Optional<TestRequest> findByLabAndID(User lab,Long lab_id) {


        return  testRequestRepository.findByOrderID(lab_id)
                .filter(testRequest -> labConsultationRepository.findByLabAndRequest(lab,testRequest).isPresent());

    }
    public Optional<TestRequest> findByAnalysisAndID(User analysis,Long analysis_id) {


        return  testRequestRepository.findByOrderID(analysis_id)
                .filter(testRequest -> analysisConsultationRepository.findByAnalysisAndRequest(analysis,testRequest).isPresent());

    }
    public Optional<TestRequest> findBySalesAndID(User sales,Long sales_id) {


        return  testRequestRepository.findByOrderID(sales_id)
                .filter(testRequest -> labResultRepository.findBySalesAndRequest(sales,testRequest).isPresent());


    }
//    public Optional<TestRequest> findByOperatorAndID(User operator,Long operator_id) {
//
//
//        return  testRequestRepository.findByOrderID(operator_id)
//                .filter(testRequest -> labResultRepository.findByOperatorAndRequest(operator,testRequest).isPresent());
//
//
//    }

    public Optional<TestRequest> findByUserAndID(User user,Long user_id) {

        return  testRequestRepository.findByCreatedByAndOrderID(user,user_id);

    }

    public List<TestRequest> findByUser(User user) {
        return  testRequestRepository.findByCreatedBy(user);


    }

}
