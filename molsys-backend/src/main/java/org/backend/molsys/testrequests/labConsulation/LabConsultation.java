package org.backend.molsys.testrequests.labConsulation;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;
import lombok.ToString;
import org.backend.molsys.testrequests.TestRequest;
import org.backend.molsys.testrequests.labConsulation.LabSuggestion;
import org.backend.molsys.testrequests.analysisConsultation.AnalysisSuggestion;
import org.backend.molsys.users.User;

import javax.persistence.*;
import java.time.LocalDate;

@Data
@Entity
public class LabConsultation {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long lab_id;




    @OneToOne(fetch = FetchType.LAZY)
    @JsonIgnore
    @ToString.Exclude
    private TestRequest request;

    private LabSuggestion suggestion;


    private String comments;

    private LocalDate updatedOn;

    @ManyToOne
    User lab;









}
