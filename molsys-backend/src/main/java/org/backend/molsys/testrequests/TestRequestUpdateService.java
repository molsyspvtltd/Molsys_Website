package org.backend.molsys.testrequests;

import lombok.extern.slf4j.Slf4j;
import org.backend.molsys.exception.AppException;
import org.backend.molsys.testrequests.analysisConsultation.AnalysisConsultation;
import org.backend.molsys.testrequests.analysisConsultation.AnalysisConsultationService;
import org.backend.molsys.testrequests.analysisConsultation.CreateAnalysisConsultationRequest;
import org.backend.molsys.testrequests.flow.TestRequestFlowService;
import org.backend.molsys.testrequests.lab.CreateLabResult;
import org.backend.molsys.testrequests.lab.LabResult;
import org.backend.molsys.testrequests.lab.LabResultService;
import org.backend.molsys.testrequests.labConsulation.CreateLabConsultationRequest;
import org.backend.molsys.testrequests.labConsulation.LabConsultation;
import org.backend.molsys.testrequests.labConsulation.LabConsultationService;
import org.backend.molsys.users.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.validation.annotation.Validated;

import javax.transaction.Transactional;
import javax.validation.Valid;

@Service
@Slf4j
@Validated
public class TestRequestUpdateService {

    @Autowired
    private TestRequestRepository testRequestRepository;


    @Autowired
    private TestRequestFlowService testRequestFlowService;


    @Autowired
    private LabResultService labResultService;


    @Autowired
    private LabConsultationService labConsultationService;

    @Autowired
    private AnalysisConsultationService analysisConsultationService;


    @Transactional
    public TestRequest saveTestRequest(@Valid TestRequest result) {


        return testRequestRepository.save(result);
    }


    TestRequest updateStatusAndSave(TestRequest testRequest, RequestStatus status) {
        testRequest.setStatus(status);
        return saveTestRequest(testRequest);
    }


    public TestRequest assignForLabTest(Long id, User sales) {
        TestRequest testRequest = testRequestRepository.findByOrderIDAndStatus(id,RequestStatus.INITIATED).orElseThrow(()-> new AppException("Invalid ID"));
        LabResult labResult= labResultService.assignForLabTest(testRequest,sales);
        testRequestFlowService.log(testRequest, RequestStatus.INITIATED, RequestStatus.SALES_REVIEW_IN_PROGRESS, sales);
        testRequest.setLabResult(labResult);
        return updateStatusAndSave(testRequest, RequestStatus.SALES_REVIEW_IN_PROGRESS);
    }

    public TestRequest updateLabTest(Long id,@Valid CreateLabResult createLabResult, User sales) {

        TestRequest testRequest = testRequestRepository.findByOrderIDAndStatus(id,RequestStatus.SALES_REVIEW_IN_PROGRESS).orElseThrow(()-> new AppException("Invalid ID or State"));


        labResultService.updateLabTest(testRequest, createLabResult);

        testRequestFlowService.log(testRequest, RequestStatus.SALES_REVIEW_IN_PROGRESS, RequestStatus.SALES_REVIEW_COMPLETED, sales);
        return updateStatusAndSave(testRequest, RequestStatus.SALES_REVIEW_COMPLETED);
    }

    public TestRequest assignForLabConsultation(Long id, User lab) {
        TestRequest testRequest = testRequestRepository.findByOrderIDAndStatus(id,RequestStatus.SALES_REVIEW_COMPLETED).orElseThrow(()-> new AppException("Invalid ID or State"));
        LabConsultation labConsultation =labConsultationService.assignForLabConsultation(testRequest,lab);
        testRequestFlowService.log(testRequest, RequestStatus.SALES_REVIEW_COMPLETED, RequestStatus.LAB_TEST_IN_PROCESS, lab);
        testRequest.setLabConsultation(labConsultation);
        return updateStatusAndSave(testRequest, RequestStatus.LAB_TEST_IN_PROCESS);
    }

    public TestRequest assignForAnalysisConsultation(Long id, User analysis) {
        TestRequest testRequest = testRequestRepository.findByOrderIDAndStatus(id,RequestStatus.SALES_REVIEW_COMPLETED).orElseThrow(()-> new AppException("Invalid ID or State"));
        AnalysisConsultation analysisConsultation =analysisConsultationService.assignForAnalysisConsultation(testRequest,analysis);
        testRequestFlowService.log(testRequest, RequestStatus.SALES_REVIEW_COMPLETED, RequestStatus.ANALYSIS_IN_PROCESS, analysis);
        testRequest.setAnalysisConsultation(analysisConsultation);
        return updateStatusAndSave(testRequest, RequestStatus.ANALYSIS_IN_PROCESS);
    }


    public TestRequest updateLabConsultation(Long id, @Valid CreateLabConsultationRequest createLabConsultationRequest, User lab) {

        TestRequest testRequest = testRequestRepository.findByOrderIDAndStatus(id,RequestStatus.LAB_TEST_IN_PROCESS).orElseThrow(()-> new AppException("Invalid ID or State"));
        labConsultationService.updateLabConsultation(testRequest,createLabConsultationRequest);
        testRequestFlowService.log(testRequest, RequestStatus.LAB_TEST_IN_PROCESS, RequestStatus.COMPLETED, lab);
        return updateStatusAndSave(testRequest, RequestStatus.COMPLETED);
    }

    public TestRequest updateAnalysisConsultation(Long id, @Valid CreateAnalysisConsultationRequest createAnalysisConsultationRequest, User analysis) {

        TestRequest testRequest = testRequestRepository.findByOrderIDAndStatus(id,RequestStatus.ANALYSIS_IN_PROCESS).orElseThrow(()-> new AppException("Invalid ID or State"));
        analysisConsultationService.updateAnalysisConsultation(testRequest,createAnalysisConsultationRequest);
        testRequestFlowService.log(testRequest, RequestStatus.ANALYSIS_IN_PROCESS, RequestStatus.COMPLETED, analysis);
        return updateStatusAndSave(testRequest, RequestStatus.COMPLETED);
    }



}
