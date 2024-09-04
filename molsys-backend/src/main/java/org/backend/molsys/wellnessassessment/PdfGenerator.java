package org.backend.molsys.wellnessassessment;

import org.apache.pdfbox.pdmodel.PDDocument;
import org.apache.pdfbox.pdmodel.PDPage;
import org.apache.pdfbox.pdmodel.PDPageContentStream;
import org.apache.pdfbox.pdmodel.font.PDType1Font;
import org.springframework.stereotype.Component;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
@Component
public class PdfGenerator {

    public static byte[] generatePdf(FormData formData) throws IOException {
        try (PDDocument document = new PDDocument()) {
            PDPage firstPage = new PDPage();
            document.addPage(firstPage);

            try (PDPageContentStream contentStream = new PDPageContentStream(document, firstPage)) {
                contentStream.beginText();
                contentStream.setFont(PDType1Font.HELVETICA_BOLD, 12);
                contentStream.newLineAtOffset(50, 700);
                contentStream.showText("Wellness Form Submission Data");
                contentStream.newLineAtOffset(0, -20);
                contentStream.showText("Form ID: " + formData.getFormId());
                contentStream.newLineAtOffset(0, -20);
                contentStream.showText("Name: " + formData.getName());
                contentStream.newLineAtOffset(0, -20);
                contentStream.showText("Contact: " + formData.getContact());
                contentStream.newLineAtOffset(0, -20);
                contentStream.showText("Email: " + formData.getEmail());
                contentStream.newLineAtOffset(0, -20);
                contentStream.showText("Age: " + formData.getAge());
                contentStream.newLineAtOffset(0, -20);
                contentStream.showText("Height: " + formData.getHeight());
                contentStream.newLineAtOffset(0, -20);
                contentStream.showText("Weight: " + formData.getWeight());
                contentStream.newLineAtOffset(0, -20);
                contentStream.showText("Gender: " + formData.getGender());
                contentStream.newLineAtOffset(0, -20);
                contentStream.showText("Waist: " + formData.getWaist());
                contentStream.newLineAtOffset(0, -20);
                contentStream.showText("Neck: " + formData.getNeck());
                contentStream.newLineAtOffset(0, -20);
                contentStream.showText("Weight Status: " + formData.getWeightstatus());
                contentStream.newLineAtOffset(0, -20);
                contentStream.showText("Above Normal: " + formData.getAbovenormal());
                contentStream.newLineAtOffset(0, -20);
                contentStream.showText("Below Normal: " + formData.getBelownormal());
                contentStream.newLineAtOffset(0, -20);
                contentStream.showText("Diagnosed: " + formData.getDiagnosed());
                contentStream.newLineAtOffset(0, -20);
                contentStream.showText("Family History: " + formData.getFamily_history());
                contentStream.newLineAtOffset(0, -20);
                contentStream.showText("Symptoms: " + formData.getYsymptoms());
                contentStream.newLineAtOffset(0, -20);
                contentStream.showText("Sleep: " + formData.getSleep());
                contentStream.newLineAtOffset(0, -20);
                contentStream.showText("Doctor Prescribed: " + formData.getDoctorprescribed());
                contentStream.newLineAtOffset(0, -20);
                contentStream.showText("Doctor Not Prescribed: " + formData.getDoctor_not_prescribed());
                contentStream.newLineAtOffset(0, -20);
                contentStream.showText("Diet: " + formData.getDiet());
                contentStream.newLineAtOffset(0, -20);
                contentStream.showText("Pre Breakfast Time: " + formData.getPreBreakfasttime());
                contentStream.newLineAtOffset(0, -20);
                contentStream.showText("Breakfast Time: " + formData.getBreakfasttime());
                contentStream.newLineAtOffset(0, -20);
                contentStream.showText("Mid Morning Time: " + formData.getMidMorningtime());
                contentStream.newLineAtOffset(0, -20);
                contentStream.showText("Medical Information: " + formData.getMedical_information());
                contentStream.newLineAtOffset(0, -20);
                contentStream.showText("Lunch Time: " + formData.getLunchtime());
                contentStream.newLineAtOffset(0, -20);
                contentStream.showText("Evening Tea Time: " + formData.getEvening_Tea());
                contentStream.newLineAtOffset(0, -20);
                contentStream.showText("Evening Snacks Time: " + formData.getEveningSnackstime());
                contentStream.newLineAtOffset(0, -20);
                contentStream.showText("Dinner Time: " + formData.getDinnertime());
                contentStream.newLineAtOffset(0, -20);
                contentStream.showText("Post Dinner Time: " + formData.getPostDinnertime());
                contentStream.newLineAtOffset(0, -20);
                contentStream.showText("Consumption: " + formData.getConsumption());
                contentStream.newLineAtOffset(0, -20);
                contentStream.showText("Beverages: " + formData.getBeverages());
                contentStream.newLineAtOffset(0, -20);
                contentStream.showText("Lifestyle: " + formData.getLifestyle());
                contentStream.newLineAtOffset(0, -20);
                contentStream.showText("Outside Food: " + formData.getOutside_food());
                // Ending text for the first page
                contentStream.endText();
            }

            // Adding the second page
            PDPage secondPage = new PDPage();
            document.addPage(secondPage);

            try (PDPageContentStream contentStream = new PDPageContentStream(document, secondPage)) {
                contentStream.beginText();
                contentStream.setFont(PDType1Font.HELVETICA_BOLD, 12);
                contentStream.newLineAtOffset(50, 700);
                contentStream.showText("Additional Wellness Form Submission Data");
                contentStream.newLineAtOffset(0, -20);
                contentStream.showText("Frequency of Exercise: " + formData.getFreqExercise());
                contentStream.newLineAtOffset(0, -20);
                contentStream.showText("Most Followed Exercise: " + formData.getMost_followed_exercise());
                contentStream.newLineAtOffset(0, -20);
                contentStream.showText("Sport: " + formData.getSport());
                contentStream.newLineAtOffset(0, -20);
                contentStream.showText("Existing Disease: " + formData.getExisting_disease());
                contentStream.newLineAtOffset(0, -20);
                contentStream.showText("Preferred Date and Time: " + formData.getPreferredDate_time());
                // Ending text for the second page
                contentStream.endText();
            }

            ByteArrayOutputStream outputStream = new ByteArrayOutputStream();
            document.save(outputStream);
            return outputStream.toByteArray();
        }
    }
}
