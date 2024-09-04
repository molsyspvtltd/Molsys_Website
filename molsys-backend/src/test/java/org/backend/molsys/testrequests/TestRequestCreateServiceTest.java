//package org.backend.molsys.testrequests;
//
//import org.backend.molsys.exception.AppException;
//import org.backend.molsys.users.User;
//import org.junit.jupiter.api.Test;
//import org.junit.jupiter.api.extension.ExtendWith;
//import org.mockito.InjectMocks;
//import org.mockito.Mock;
//import org.mockito.Mockito;
//import org.mockito.junit.jupiter.MockitoExtension;
//import org.backend.molsys.users.models.Gender;
//
//import java.time.LocalDate;
//import java.util.ArrayList;
//import java.util.List;
//
//import static org.junit.jupiter.api.Assertions.*;
//import static org.hamcrest.MatcherAssert.*;
//import static org.hamcrest.Matchers.*;
//import static org.mockito.ArgumentMatchers.any;
//
//@ExtendWith(MockitoExtension.class)
//class TestRequestCreateServiceTest {
//
//    @Mock
//    TestRequestRepository testRequestRepository;
//
//
//    @InjectMocks
//    TestRequestService testRequestService;
//
////    @Test
////    public void when_TestRequest_with_valid_data_sent_expect_repository_save_method_called() {
////
//////        //Arrange
//////
////        TestRequest mockedResponse = getMockedTestRequest();
////
//////
//////
//////        //Parameters
//////        //CreateTestRequest
//////        //User
////        User user= createUser();
////        CreateTestRequest createTestRequest = createTestRequest();
//////
//////
//////        //Mock
//////        //testRequestRepository.findByEmailOrPhoneNumber
//////        //returns  List<TestRequest>
//////
////        List<TestRequest> existingTestRequests = new ArrayList<>();
////        Mockito.when(testRequestRepository.findByService(createTestRequest.getService())).thenReturn(existingTestRequests);
//////
//////        //testRequestRepository.save
//////        //return TestRequest
//////        //Mockito.when(testRequestRepository.save(mockedResponse)).thenReturn(mockedResponse);
//////
//////        //Act
//////        // Call createTestRequestFrom
//////
//////
//////
//////
////            testRequestService.createTestRequestFrom(user,createTestRequest);
////
//////
//////
//////        //Assert
//////
////        Mockito.verify(testRequestRepository).save(any());
////
////    }
//@Test
//public void when_TestRequest_with_valid_data_sent_expect_repository_save_method_called() {
//    // Arrange
//    TestRequest mockedResponse = getMockedTestRequest();
//
//    // Parameters
//    User user = createUser();
//    CreateTestRequest createTestRequest = createTestRequest();
//
//    // Act
//    testRequestService.createTestRequestFrom(user, createTestRequest);
//
//    // Assert
//    Mockito.verify(testRequestRepository).save(any());
//}
//
//
//    @Test
//    public void when_TestRequest_with_same_phoneNumber_Already_exists_throw_exception() {
//
////        //Arrange
////
//        TestRequest mockedResponse = getMockedTestRequest();
//
//
//
////        //Parameters
////        //CreateTestRequest
////        //User
//        User user= createUser();
//        CreateTestRequest createTestRequest = createTestRequest();
////
////
////        //Mock
//        //testRequestRepository.findByEmailOrPhoneNumber
//            //returns  List<TestRequest>
////
//        List<TestRequest> existingTestRequests = getExistingTestRequests();
//        Mockito.when(testRequestRepository.findByService(createTestRequest.getService())).thenReturn(existingTestRequests);
////        //testRequestRepository.save
////        //return TestRequest
////
////
////        //Act
////        // Call createTestRequestFrom
////
////
////
//        AppException result = assertThrows(AppException.class,()->{
//
//            testRequestService.createTestRequestFrom(user,createTestRequest);
//        });
//
//
////        //Assert
//
//        assertNotNull(result);
//        assertThat(result.getMessage(),containsString("A Request with same PhoneNumber or Email is already in progress"));
//
//    }
//
//
//
//
//
//
//
//
//    public CreateTestRequest createTestRequest() {
//        CreateTestRequest createTestRequest = new CreateTestRequest();
////        createTestRequest.setAddress("some Addres");
//        createTestRequest.setQuantity("40GB");
////        createTestRequest.setEmail("someone" + "123456789" + "@somedomain.com");
////        createTestRequest.setGender(Gender.MALE);
//        createTestRequest.setService("someservice");
////        createTestRequest.setCategory("somecategory");
////        createTestRequest.setPhoneNumber("123456789");
////        createTestRequest.setPinCode(716768);
//        createTestRequest.setAmountOfData("500GB");
//
//        createTestRequest.getIsolation("yes");
//        createTestRequest.getAnalysis("no");
//        return createTestRequest;
//    }
//
//     List<TestRequest> getExistingTestRequests() {
//        List<TestRequest> testRequests = new ArrayList<>();
//
//        testRequests.add(getMockedTestRequest());
//        return testRequests;
//    }
//
//
//    public TestRequest getMockedTestRequest() {
//        CreateTestRequest createTestRequest =createTestRequest();
//        TestRequest testRequest = new TestRequest();
//        testRequest.setService(createTestRequest.getService());
////        testRequest.setCategory(createTestRequest.getCategory());
//        testRequest.setCreated(LocalDate.now());
//        testRequest.setStatus(RequestStatus.INITIATED);
//        testRequest.setQuantity(createTestRequest.getQuantity());
////        testRequest.setEmail(createTestRequest.getEmail());
////        testRequest.setPhoneNumber(createTestRequest.getPhoneNumber());
////        testRequest.setPinCode(createTestRequest.getPinCode());
////        testRequest.setAddress(createTestRequest.getAddress());
////        testRequest.setGender(createTestRequest.getGender());
//        testRequest.setAmountOfData(createTestRequest.getAmountOfData());
//        testRequest.setAnalysis(createTestRequest.getAnalysis());
//        testRequest.setIsolation(createTestRequest.getIsolation());
//
//
//        testRequest.setCreatedBy(createUser());
//
//        return testRequest;
//    }
//
//
//    private User createUser() {
//        User user = new User();
//        user.setUser_id(1L);
//        user.setUserName("someuser");
//        return user;
//    }
//
//}