package org.backend.molsys.testrequests.labConsulation;

import lombok.Data;
import org.backend.molsys.testrequests.labConsulation.LabSuggestion;

import javax.validation.constraints.NotNull;

@Data
public class CreateLabConsultationRequest {

    @NotNull
    private LabSuggestion suggestion;

    private String comments;
}
