package org.backend.molsys.pms;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;


@Service
public class PatientService {

    @Autowired
    private PatientRepository patientRepository;

    @Autowired
    private JavaMailSender javaMailSender;

    @Value("${mail.copyTo}") // Configure this in your application.properties or application.yml
    private String copyToEmail;

    private static int patientCounter = 1;
//    private static int tubeCounter = 1;--to be updated

    public Patient registerPatient(Patient patient) {
        // Generate patientId and tubeId
        String patientId = generatePatientId();
//        String tubeId = generateTubeId();--to be updated

        patient.setPatientId(patientId);
//        patient.setTubeId(tubeId);--to be updated

        // Save patient details to the database
        Patient savedPatient = patientRepository.save(patient);

        // Send email to the user
        sendRegistrationEmail(savedPatient);

        // Send a copy to a particular email
        sendCopyToEmail(savedPatient);

        return savedPatient;
    }

    private String generatePatientId() {
        return "MOLPID" + String.format("%03d", patientCounter++);
    }

//    private String generateTubeId() {
//        return "MOLTUBID" + String.format("%03d", tubeCounter++);--to be updated
//    }

    private void sendRegistrationEmail(Patient patient) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo(patient.getEmail());
        message.setSubject("Registration Completed");
        message.setText("Your Registration is completed. Your Patient ID: "
                + patient.getPatientId()
//                + " and Tube ID: " + patient.getTubeId()--to be updated
        );

        javaMailSender.send(message);
    }

    private void sendCopyToEmail(Patient patient) {
        // Send a copy of entered details to a particular email
        SimpleMailMessage copyMessage = new SimpleMailMessage();
        copyMessage.setTo(copyToEmail);
        copyMessage.setSubject("New Patient Registration");
        copyMessage.setText("New patient details:\n\n"
                        + "Patient ID: " + patient.getPatientId() + "\n"
                        + "Tube ID: " + patient.getTubeId() + "\n"
                        + "First Name: " + patient.getFirstName() + "\n"
                        + "Last Name: " + patient.getLastName() + "\n"
                        + "Email: " + patient.getEmail() + "\n"
                        + "Phone Number: " + patient.getPhone() + "\n"
                        + "Test: " + patient.getTest() + "\n"
                        + "Clinic ID: " + patient.getClinicId() + "\n"
                        + "Shipping Address: " + patient.getShipAddress() + "\n"
                        + "Patient Address: " + patient.getPatientAddress() + "\n"
                        + "Age: " + patient.getAge() + "\n"
                        + "Gender: " + patient.getGender() + "\n"
                        + "Date of Birth: " + patient.getDob()+ "\n"
                        + "Doctor/Hospital/Clinic Name: " + patient.getConsultantDetails()
                // Add more patient details as needed
        );

        javaMailSender.send(copyMessage);
    }
}
