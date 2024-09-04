package org.backend.molsys.wellnessassessment;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import javax.transaction.Transactional;

@Service
public class FormIdService {
    @Autowired
    private FormIdGeneratorRepository formIdGeneratorRepository;

    @Transactional
    public String generateFormId() {
        FormIdGenerator formIdGenerator = formIdGeneratorRepository.findAll().stream().findFirst().orElse(new FormIdGenerator());
        int latestFormId = formIdGenerator.getLatestFormId();
        latestFormId++;
        formIdGenerator.setLatestFormId(latestFormId);
        formIdGeneratorRepository.save(formIdGenerator);
        return String.format("MOLWELLFORM%03d", latestFormId);
    }
}
