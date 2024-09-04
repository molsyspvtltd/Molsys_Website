package org.backend.molsys.testrequests.labConsulation;


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
@RequestMapping("/api/labConsultations")
public class LabConsultationController {

    Logger log = LoggerFactory.getLogger(LabConsultationController.class);




    @Autowired
    private TestRequestUpdateService testRequestUpdateService;

    @Autowired
    private TestRequestQueryService testRequestQueryService;


    @Autowired
    TestRequestFlowService testRequestFlowService;

    @Autowired
    private UserLoggedInService userLoggedInService;



    @GetMapping("/in-queue")
    @PreAuthorize("hasAnyRole('LAB')")
    public List<TestRequest> getForLabConsultations()  {

        // Implement this method

        //Implement this method to get the list of test requests having status as 'LAB_TEST_COMPLETED'
        // make use of the findBy() method from testRequestQueryService class
        //return the result
        // For reference check the method getForTests() method from LabRequestController class
        return testRequestQueryService.findBy(RequestStatus.SALES_REVIEW_COMPLETED); // getting all test requests for which lab test is completed
    }

    @GetMapping
    @PreAuthorize("hasAnyRole('LAB')")
    public List<TestRequest> getForLab()  {

        //Implement this method

        // Create an object of User class and store the current logged in user first
        //Implement this method to return the list of test requests assigned to current doctor(make use of the above created User object)
        //Make use of the findByDoctor() method from testRequestQueryService class to get the list
        // For reference check the method getForTests() method from LabRequestController class
        User loggedInLab = userLoggedInService.getLoggedInUser(); // getting currently logged in doctor
        return testRequestQueryService.findByLab(loggedInLab); // getting all test requests assigned to given doctor
    }



    @PreAuthorize("hasAnyRole('LAB')")
    @PutMapping("/assign/{lab_id}")
    public TestRequest assignForLabConsultation(@PathVariable Long lab_id) {

        // Implement this method

        // Implement this method to assign a particular test request to the current doctor(logged in user)
        //Create an object of User class and get the current logged in user
        //Create an object of TestRequest class and use the assignForConsultation() method of testRequestUpdateService to assign the particular id to the current user
        // return the above created object
        // For reference check the method assignForLabTest() method from LabRequestController class
        try {
            User loggedInLab = userLoggedInService.getLoggedInUser(); // getting currently logged in doctor
            return testRequestUpdateService.assignForLabConsultation(lab_id,loggedInLab); // assigning the given test request(by id) to the given doctor for consultation
        }catch (AppException e) {
            throw asBadRequest(e.getMessage());
        }
    }



    @PreAuthorize("hasAnyRole('LAB')")
    @PutMapping("/update/{lab_id}")
    public TestRequest updateLabConsultation(@PathVariable Long lab_id,@RequestBody CreateLabConsultationRequest testResult) {

        // Implement this method

        // Implement this method to update the result of the current test request id with test doctor comments
        // Create an object of the User class to get the logged in user
        // Create an object of TestResult class and make use of updateConsultation() method from testRequestUpdateService class
        //to update the current test request id with the testResult details by the current user(object created)
        // For reference check the method updateLabTest() method from LabRequestController class

        try {
            User loggedInLab = userLoggedInService.getLoggedInUser(); // getting currently logged in doctor
            return testRequestUpdateService.updateLabConsultation(lab_id,testResult,loggedInLab);// updating the given consultation details for given test request(by id) for the given doctor
        } catch (ConstraintViolationException e) {
            throw asConstraintViolation(e);
        }catch (AppException e) {
            throw asBadRequest(e.getMessage());
        }
    }



}
