package org.backend.molsys.testrequests;

import org.backend.molsys.config.security.UserLoggedInService;
import org.backend.molsys.exception.AppException;
import org.backend.molsys.users.User;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.http.HttpStatus;
import org.springframework.web.server.ResponseStatusException;
import org.backend.molsys.users.models.Gender;

import java.time.LocalDate;

import static org.hibernate.validator.internal.util.Contracts.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.ArgumentMatchers.any;

@ExtendWith(MockitoExtension.class)
class TestRequestControllerTest {

    @InjectMocks
    TestRequestController testRequestController;

    @Mock
    TestRequestService testRequestService;

    @Mock
    UserLoggedInService userLoggedInService;

    @Test
    public void when_testRequestCreateService_createTestRequestFrom_returns_valid_expect_same_as_response(){

        //Arrange
        User user= createUser();
        CreateTestRequest createTestRequest = createTestRequest();
        TestRequest mockedResponse = getMockedResponseFrom(createTestRequest);
        Mockito.when(userLoggedInService.getLoggedInUser()).thenReturn(user);
        Mockito.when(testRequestService.createTestRequestFrom(user,createTestRequest)).thenReturn(mockedResponse);

        //Act
        TestRequest result = testRequestController.createRequest(createTestRequest);

        //Assert
        assertNotNull(result);
        assertEquals(result,mockedResponse);

    }

    @Test
    public void when_testRequestCreateService_createTestRequestFrom_throws_appException_expect_response_status_exception_to_be_thrown(){

        //Arrange
        User user= createUser();
        CreateTestRequest createTestRequest = createTestRequest();

        Mockito.when(userLoggedInService.getLoggedInUser()).thenReturn(user);
        Mockito.when(testRequestService.createTestRequestFrom(user,createTestRequest)).thenThrow(new AppException("Invalid data"));

        //Act
        ResponseStatusException result = assertThrows(ResponseStatusException.class,()->{

            testRequestController.createRequest(createTestRequest);
        });


        //Assert
        assertNotNull(result);
        assertEquals(HttpStatus.BAD_REQUEST, result.getStatus());
        assertEquals("Invalid data",result.getReason());

    }

//   / private String service;
//    /private String quantity;
//  /  private String amountOfData;
//   / private Boolean isolation;
//   / private Boolean analysis;

    public CreateTestRequest createTestRequest() {
        CreateTestRequest createTestRequest = new CreateTestRequest();
//        createTestRequest.setAddress("some Addres");
        createTestRequest.setQuantity("10");
//        createTestRequest.setEmail("someone" + "123456789" + "@somedomain.com");
//        createTestRequest.setGender(Gender.MALE);
        createTestRequest.setService("someservice");
//        createTestRequest.setCategory("somecategory");
//        createTestRequest.setPhoneNumber("123456789");
//        createTestRequest.setPinCode(716768);
        createTestRequest.setAmountOfData("500GB");

        createTestRequest.getIsolation("yes");
        createTestRequest.getAnalysis("no");
        return createTestRequest;
    }
    public TestRequest getMockedResponseFrom(CreateTestRequest createTestRequest) {
        TestRequest testRequest = new TestRequest();

        testRequest.setService(createTestRequest.getService());
//        testRequest.setCategory(createTestRequest.getCategory());
        testRequest.setCreated(LocalDate.now());
        testRequest.setStatus(RequestStatus.INITIATED);
        testRequest.setQuantity(createTestRequest.getQuantity());
//        testRequest.setEmail(createTestRequest.getEmail());
//        testRequest.setPhoneNumber(createTestRequest.getPhoneNumber());
//        testRequest.setPinCode(createTestRequest.getPinCode());
//        testRequest.setAddress(createTestRequest.getAddress());
//        testRequest.setGender(createTestRequest.getGender());
        testRequest.setAmountOfData(createTestRequest.getAmountOfData());
        testRequest.setAnalysis(createTestRequest.getAnalysis());
        testRequest.setIsolation(createTestRequest.getIsolation());

        testRequest.setCreatedBy(createUser());

        return testRequest;
    }


    private User createUser() {
        User user = new User();
        user.setUser_id(1L);
        user.setUserName("someuser");
        return user;
    }
}