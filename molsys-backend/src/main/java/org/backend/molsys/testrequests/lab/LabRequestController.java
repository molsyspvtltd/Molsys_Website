package org.backend.molsys.testrequests.lab;


import org.backend.molsys.config.security.UserLoggedInService;
import org.backend.molsys.exception.AppException;
import org.backend.molsys.testrequests.TestRequestUpdateService;
import org.backend.molsys.testrequests.flow.TestRequestFlowService;
import org.backend.molsys.users.User;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import org.backend.molsys.testrequests.RequestStatus;
import org.backend.molsys.testrequests.TestRequest;
import org.backend.molsys.testrequests.TestRequestQueryService;

import javax.validation.ConstraintViolationException;
import java.util.List;

import static org.backend.molsys.exception.MolsysResponseStatusException.asBadRequest;
import static org.backend.molsys.exception.MolsysResponseStatusException.asConstraintViolation;


@RestController
@RequestMapping("/api/labrequests")
public class LabRequestController {

    Logger log = LoggerFactory.getLogger(LabRequestController.class);




    @Autowired
    private TestRequestUpdateService testRequestUpdateService;

    @Autowired
    private TestRequestQueryService testRequestQueryService;

    @Autowired
    private TestRequestFlowService testRequestFlowService;



    @Autowired
    private UserLoggedInService userLoggedInService;



    @GetMapping("/to-be-tested")
    @PreAuthorize("hasAnyRole('SALES')")
    public List<TestRequest> getForTests()  {

       return testRequestQueryService.findBy(RequestStatus.INITIATED);
    }

    @GetMapping
    @PreAuthorize("hasAnyRole('SALES')")
    public List<TestRequest> getForSales()  {

        // Implement This Method

        // Create an object of User class and store the current logged in user first
        //Implement this method to return the list of test requests assigned to current tester(make use of the above created User object)
        //Make use of the findByTester() method from testRequestQueryService class
        // For reference check the method getForTests() method from LabRequestController class
        User loggedInSales = userLoggedInService.getLoggedInUser(); //getting currently logged in tester
        return testRequestQueryService.findBySales(loggedInSales); //getting all test requests assigned to the given tester
    }


    @PreAuthorize("hasAnyRole('SALES')")
    @PutMapping("/assign/{id}")
    public TestRequest assignForLabTest(@PathVariable Long id) {

        User sales =userLoggedInService.getLoggedInUser();
        return testRequestUpdateService.assignForLabTest(id,sales);
    }

    @PreAuthorize("hasAnyRole('SALES')")
    @PutMapping("/update/{id}")
    public TestRequest updateLabTest(@PathVariable Long id,@RequestBody CreateLabResult createLabResult) {

        try {
            User tester=userLoggedInService.getLoggedInUser();
            return testRequestUpdateService.updateLabTest(id,createLabResult,tester);
        } catch (ConstraintViolationException e) {
            throw asConstraintViolation(e);
        }catch (AppException e) {
            throw asBadRequest(e.getMessage());
        }
    }
}


