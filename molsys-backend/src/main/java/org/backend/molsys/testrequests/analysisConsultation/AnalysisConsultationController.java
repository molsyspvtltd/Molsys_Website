package org.backend.molsys.testrequests.analysisConsultation;


import org.backend.molsys.config.security.UserLoggedInService;
import org.backend.molsys.exception.AppException;
import org.backend.molsys.testrequests.RequestStatus;
import org.backend.molsys.testrequests.TestRequest;
import org.backend.molsys.testrequests.TestRequestQueryService;
import org.backend.molsys.testrequests.TestRequestUpdateService;
import org.backend.molsys.testrequests.flow.TestRequestFlowService;
import org.backend.molsys.users.User;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import javax.validation.ConstraintViolationException;
import java.util.List;

import static org.backend.molsys.exception.MolsysResponseStatusException.asBadRequest;
import static org.backend.molsys.exception.MolsysResponseStatusException.asConstraintViolation;


@RestController
@RequestMapping("/api/analysisConsultations")
public class AnalysisConsultationController {

    Logger log = LoggerFactory.getLogger(AnalysisConsultationController.class);




    @Autowired
    private TestRequestUpdateService testRequestUpdateService;

    @Autowired
    private TestRequestQueryService testRequestQueryService;


    @Autowired
    TestRequestFlowService testRequestFlowService;

    @Autowired
    private UserLoggedInService userLoggedInService;



    @GetMapping("/in-queue")
    @PreAuthorize("hasAnyRole('ANALYSIS')")
    public List<TestRequest> getForAnalysisConsultations()  {

        // Implement this method

        //Implement this method to get the list of test requests having status as 'LAB_TEST_COMPLETED'
        // make use of the findBy() method from testRequestQueryService class
        //return the result
        // For reference check the method getForTests() method from LabRequestController class
        return testRequestQueryService.findBy(RequestStatus.SALES_REVIEW_COMPLETED); // getting all test requests for which lab test is completed
    }

    @GetMapping
    @PreAuthorize("hasAnyRole('ANALYSIS')")
    public List<TestRequest> getForAnalysis()  {

        //Implement this method

        // Create an object of User class and store the current logged in user first
        //Implement this method to return the list of test requests assigned to current doctor(make use of the above created User object)
        //Make use of the findByDoctor() method from testRequestQueryService class to get the list
        // For reference check the method getForTests() method from LabRequestController class
        User loggedInAnalysis = userLoggedInService.getLoggedInUser(); // getting currently logged in doctor
        return testRequestQueryService.findByAnalysis(loggedInAnalysis); // getting all test requests assigned to given doctor
    }



    @PreAuthorize("hasAnyRole('ANALYSIS')")
    @PutMapping("/assign/{analysis_id}")
    public TestRequest assignForAnalysisConsultation(@PathVariable Long analysis_id) {

        // Implement this method

        // Implement this method to assign a particular test request to the current doctor(logged in user)
        //Create an object of User class and get the current logged in user
        //Create an object of TestRequest class and use the assignForConsultation() method of testRequestUpdateService to assign the particular id to the current user
        // return the above created object
        // For reference check the method assignForLabTest() method from LabRequestController class
        try {
            User loggedInAnalysis = userLoggedInService.getLoggedInUser(); // getting currently logged in doctor
            return testRequestUpdateService.assignForAnalysisConsultation(analysis_id,loggedInAnalysis); // assigning the given test request(by id) to the given doctor for consultation
        }catch (AppException e) {
            throw asBadRequest(e.getMessage());
        }
    }



    @PreAuthorize("hasAnyRole('ANALYSIS')")
    @PutMapping("/update/{analysis_id}")
    public TestRequest updateAnalysisConsultation(@PathVariable Long analysis_id,@RequestBody CreateAnalysisConsultationRequest testResult) {

        // Implement this method

        // Implement this method to update the result of the current test request id with test doctor comments
        // Create an object of the User class to get the logged in user
        // Create an object of TestResult class and make use of updateConsultation() method from testRequestUpdateService class
        //to update the current test request id with the testResult details by the current user(object created)
        // For reference check the method updateLabTest() method from LabRequestController class

        try {
            User loggedInAnalysis = userLoggedInService.getLoggedInUser(); // getting currently logged in doctor
            return testRequestUpdateService.updateAnalysisConsultation(analysis_id,testResult,loggedInAnalysis);// updating the given consultation details for given test request(by id) for the given doctor
        } catch (ConstraintViolationException e) {
            throw asConstraintViolation(e);
        }catch (AppException e) {
            throw asBadRequest(e.getMessage());
        }
    }



}
