package org.backend.molsys.testrequests;

import lombok.Data;
import org.backend.molsys.testrequests.analysisConsultation.AnalysisConsultation;
import org.backend.molsys.testrequests.labConsulation.LabConsultation;
import org.backend.molsys.testrequests.analysisConsultation.AnalysisConsultation;
import org.backend.molsys.testrequests.lab.LabResult;
import org.backend.molsys.testrequests.labConsulation.LabConsultation;
import org.backend.molsys.users.User;
import org.backend.molsys.users.models.Gender;

import javax.persistence.*;
import java.time.LocalDate;

@Data
@Entity
public class TestRequest {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long orderID;

    @ManyToOne
    private User createdBy;

    private LocalDate created=LocalDate.now();

    private RequestStatus status = RequestStatus.INITIATED;


    private String service;
    private String category;
    private String quantity;
    private String amountOfData;
    private String isolation;
    private String analysis;
    private String image;
    private int price;
    private String fileGoogleDriveLink;

    @OneToOne(mappedBy="request")
    AnalysisConsultation analysisConsultation;

    @OneToOne(mappedBy="request")
    LabConsultation labConsultation;

    @OneToOne(mappedBy="request")
    LabResult labResult;

}
