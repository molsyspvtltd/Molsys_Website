package org.backend.molsys.wellnessassessment;


import org.apache.commons.csv.CSVFormat;
import org.apache.commons.csv.CSVPrinter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.ByteArrayOutputStream;
import java.io.OutputStreamWriter;
import java.nio.charset.StandardCharsets;
import java.util.List;

@Service
public class FormDataService {

    @Autowired
    private FormDataRepository formDataRepository;


    public FormData saveFormData(FormData formData) {
        return formDataRepository.save(formData);
    }

    public byte[] generateCsv(List<FormData> formDataList) throws Exception {
        ByteArrayOutputStream out = new ByteArrayOutputStream();
        OutputStreamWriter writer = new OutputStreamWriter(out, StandardCharsets.UTF_8);
        try (CSVPrinter csvPrinter = new CSVPrinter(writer, CSVFormat.DEFAULT.withHeader(
                "Form ID","Name", "Contact", "Email", "Age", "Height", "Weight", "Gender", "Waist", "Neck", "Weightstatus",
                "Abovenormal", "Belownormal", "Diagnosed", "Family_history", "Ysymptoms", "Sleep", "Doctorprescribed",
                "Doctor_not_prescribed", "Medical_information", "Diet", "PreBreakfasttime", "Breakfasttime",
                "MidMorningtime", "Eunchtime", "Evening_Tea", "EveningSnackstime", "Dinnertime", "PostDinnertime",
                "Consumption", "Beverages", "Lifestyle", "Outside_food", "FreqExercise", "Most_followed_exercise",
                "Sport", "Existing_disease", "PreferredDate_time"))) {
            for (FormData formData : formDataList) {
                csvPrinter.printRecord(
                        formData.getFormId(),formData.getName(), formData.getContact(), formData.getEmail(), formData.getAge(),
                        formData.getHeight(), formData.getWeight(), formData.getGender(), formData.getWaist(),
                        formData.getNeck(), formData.getWeightstatus(), formData.getAbovenormal(), formData.getBelownormal(),
                        formData.getDiagnosed(), formData.getFamily_history(), formData.getYsymptoms(), formData.getSleep(),
                        formData.getDoctorprescribed(), formData.getDoctor_not_prescribed(), formData.getMedical_information(),
                        formData.getDiet(), formData.getPreBreakfasttime(), formData.getBreakfasttime(), formData.getMidMorningtime(),
                        formData.getLunchtime(), formData.getEvening_Tea(), formData.getEveningSnackstime(), formData.getDinnertime(),
                        formData.getPostDinnertime(), formData.getConsumption(), formData.getBeverages(), formData.getLifestyle(),
                        formData.getOutside_food(), formData.getFreqExercise(), formData.getMost_followed_exercise(), formData.getSport(),
                        formData.getExisting_disease(), formData.getPreferredDate_time());
            }
        }
        return out.toByteArray();
    }
}

