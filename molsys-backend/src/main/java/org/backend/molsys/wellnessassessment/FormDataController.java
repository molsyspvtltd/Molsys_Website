package org.backend.molsys.wellnessassessment;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.Arrays;

@RestController
@RequestMapping("/api/wellness-form")
public class FormDataController {

    @Autowired
    private FormDataService formDataService;

    @Autowired
    private EmailService emailService;

    @Autowired
    private FormIdService formIdService;

    @PostMapping("/submit")
    public String submitForm(@RequestBody FormData formData) {
        String formId = formIdService.generateFormId();
        formData.setFormId(formId);

        FormData savedFormData = formDataService.saveFormData(formData);
        try {
            byte[] csvData = formDataService.generateCsv(Arrays.asList(savedFormData));
            byte[] pdfData = PdfGenerator.generatePdf(savedFormData);

            String csvFileName = formData.getName() + "_wellness_form.csv";
            String pdfFileName = formData.getName() + "_wellness_form.pdf";

            String subject = "Wellness Report " + formData.getName() + " (Form ID: " + formData.getFormId() + ")";

            emailService.sendEmailWithAttachment(
                    new String[]{"gaurab.banerjee@molsys.in", "nishant.sharma@molsys.in", "melbin.molsys@gmail.com", "solutions@molsys.in"},
                    subject,
                    "Please find the attached CSV and PDF files containing the wellness-form data.",
                    csvData,
                    pdfData,
                    csvFileName,
                    pdfFileName
            );
            return "Form submitted and email sent successfully.";
        } catch (Exception e) {
            e.printStackTrace();
            return "Error occurred while processing the form.";
        }
    }
}
