package org.backend.molsys.testrequests.analysisConsultation;

import lombok.Data;
import org.backend.molsys.testrequests.analysisConsultation.AnalysisSuggestion;

import javax.validation.constraints.NotNull;

@Data
public class CreateAnalysisConsultationRequest {

    @NotNull
    private AnalysisSuggestion suggestion;

    private String comments;
}
