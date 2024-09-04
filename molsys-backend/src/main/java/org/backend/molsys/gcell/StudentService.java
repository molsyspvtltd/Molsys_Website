package org.backend.molsys.gcell;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;



@Service
public class StudentService {
    @Autowired
    private StudentRepository studentRepository;

    @Autowired
    private JavaMailSender javaMailSender;

    @Value("${mail.copyTo}") // Configure this in your application.properties or application.yml
    private String copyToEmail;

    public Student registerStudent(Student student) {
        // Generate a unique student ID (counter-based)
        String studentId = generateUniqueStudentId();
        student.setStudentId(studentId);

        // Save the student to the database
        Student savedStudent = studentRepository.save(student);

        // Send registration email
        sendRegistrationEmail(savedStudent);

        // Send copy to a particular email
        sendCopyToEmail(savedStudent);

        return savedStudent;
    }

    private void sendRegistrationEmail(Student student) {
        // Implement your email sending logic here using JavaMailSender
        // You can use MimeMessageHelper for a more complex email setup
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo(student.getEmail());
        message.setSubject("Registration Completed");
        message.setText("Your Registration is completed, and your student ID is: " + student.getStudentId());

        javaMailSender.send(message);
    }

    private void sendCopyToEmail(Student student) {
        // Send a copy of entered details to a particular email
        SimpleMailMessage copyMessage = new SimpleMailMessage();
        copyMessage.setTo(copyToEmail);
        copyMessage.setSubject("New Student Registration");
        copyMessage.setText("New student details:\n\n"
                + "Student ID: " + student.getStudentId() + "\n"
                + "First Name: " + student.getFirstName() + "\n"
                + "Last Name: " + student.getLastName() + "\n"
                + "Gender: " + student.getGender() + "\n"
                + "Age: " + student.getAge() + "\n"
                + "Email: " + student.getEmail() + "\n"
                + "Phone: " + student.getPhone() + "\n"
                + "Referral Code: " + student.getReferralCode() + "\n"
                + "Student Address: " + student.getAddress() + "\n"
                + "University: " + student.getUniversity() + "\n"
                + "Institution: " + student.getInstitution() + "\n"
                + "Educational Qualification: " + student.getEduQualification() + "\n"
                + "Current Year of Study: " + student.getYrOfStudy() + "\n"
                + "Year of Course Completion std.10: " + student.getCcYearStd10() + "\n"
                + "Marks Obtained std.10: " + student.getMarkStd10() + "\n"
                + "Year of Course Completion std.12: " + student.getCcYearStd12() + "\n"
                + "Marks Obtained std.12: " + student.getMarkStd12() + "\n"
                + "Year of Course Completion UG: " + student.getCcYearStdUG() + "\n"
                + "Marks Obtained UG: " + student.getMarkStdUG() + "\n"
                + "Year of Course Completion PG: " + student.getCcYearStdPG() + "\n"
                + "Marks Obtained PG: " + student.getMarkStdPG() + "\n"
                + "Tenure of Training & Internship: " + student.getTenure() + "\n"
                + "Thematic Area: " + student.getThematicArea() + "\n"





        );

        javaMailSender.send(copyMessage);
    }

    private String generateUniqueStudentId() {
        // Retrieve the current count of students
        long studentCount = studentRepository.count();

        // Generate a unique student ID using a counter
        // Assuming a maximum of 999 students for simplicity
        return "MOLSTUDID" + String.format("%03d", studentCount + 1);
    }
}

