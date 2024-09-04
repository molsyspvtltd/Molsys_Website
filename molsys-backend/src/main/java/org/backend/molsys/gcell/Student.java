package org.backend.molsys.gcell;

import org.hibernate.exception.DataException;

import javax.persistence.*;
import java.util.Date;

@Entity
public class Student {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique = true)
    private String studentId;
    private String firstName;
    private String lastName;
    private String gender;
    private int age;
    private String email;
    private String phone;
    private String referralCode;
    private String address;

    private Date dob;

    private String university;

    private String institution;

    private String eduQualification;

    private String yrOfStudy;

    private String ccYearStd10;

    private String ccYearStd12;

    private String ccYearStdUG;

    private String ccYearStdPG;

    private String markStd10;

    private String markStd12;

    private String markStdUG;

    private String markStdPG;

    private String tenure;

    private String thematicArea;





    // Constructors

    public Student() {
        // Default constructor required by JPA
    }

    public Student(Long id, String studentId, String firstName, String lastName, String gender, int age, String email, String phone, String referralCode, String address, Date dob, String university, String institution, String eduQualification, String yrOfStudy, String ccYearStd10, String ccYearStd12, String ccYearStdUG, String ccYearStdPG, String markStd10, String markStd12, String markStdUG, String markStdPG, String tenure, String thematicArea) {
        this.id = id;
        this.studentId = studentId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.age = age;
        this.email = email;
        this.phone = phone;
        this.referralCode = referralCode;
        this.address = address;
        this.dob = dob;
        this.university = university;
        this.institution = institution;
        this.eduQualification = eduQualification;
        this.yrOfStudy = yrOfStudy;
        this.ccYearStd10 = ccYearStd10;
        this.ccYearStd12 = ccYearStd12;
        this.ccYearStdUG = ccYearStdUG;
        this.ccYearStdPG = ccYearStdPG;
        this.markStd10 = markStd10;
        this.markStd12 = markStd12;
        this.markStdUG = markStdUG;
        this.markStdPG = markStdPG;
        this.tenure = tenure;
        this.thematicArea = thematicArea;
    }

    // Getters and Setters

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getStudentId() {
        return studentId;
    }

    public void setStudentId(String studentId) {
        this.studentId = studentId;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getReferralCode() {
        return referralCode;
    }

    public void setReferralCode(String referralCode) {
        this.referralCode = referralCode;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public Date getDob() {
        return dob;
    }

    public void setDob(Date dob) {
        this.dob = dob;
    }

    public String getUniversity() {
        return university;
    }

    public void setUniversity(String university) {
        this.university = university;
    }

    public String getInstitution() {
        return institution;
    }

    public void setInstitution(String institution) {
        this.institution = institution;
    }

    public String getEduQualification() {
        return eduQualification;
    }

    public void setEduQualification(String eduQualification) {
        this.eduQualification = eduQualification;
    }

    public String getYrOfStudy() {
        return yrOfStudy;
    }

    public void setYrOfStudy(String yrOfStudy) {
        this.yrOfStudy = yrOfStudy;
    }

    public String getCcYearStd10() {
        return ccYearStd10;
    }

    public void setCcYearStd10(String ccYearStd10) {
        this.ccYearStd10 = ccYearStd10;
    }

    public String getCcYearStd12() {
        return ccYearStd12;
    }

    public void setCcYearStd12(String ccYearStd12) {
        this.ccYearStd12 = ccYearStd12;
    }

    public String getCcYearStdUG() {
        return ccYearStdUG;
    }

    public void setCcYearStdUG(String ccYearStdUG) {
        this.ccYearStdUG = ccYearStdUG;
    }

    public String getCcYearStdPG() {
        return ccYearStdPG;
    }

    public void setCcYearStdPG(String ccYearStdPG) {
        this.ccYearStdPG = ccYearStdPG;
    }

    public String getMarkStd10() {
        return markStd10;
    }

    public void setMarkStd10(String markStd10) {
        this.markStd10 = markStd10;
    }

    public String getMarkStd12() {
        return markStd12;
    }

    public void setMarkStd12(String markStd12) {
        this.markStd12 = markStd12;
    }

    public String getMarkStdUG() {
        return markStdUG;
    }

    public void setMarkStdUG(String markStdUG) {
        this.markStdUG = markStdUG;
    }

    public String getMarkStdPG() {
        return markStdPG;
    }

    public void setMarkStdPG(String markStdPG) {
        this.markStdPG = markStdPG;
    }

    public String getTenure() {
        return tenure;
    }

    public void setTenure(String tenure) {
        this.tenure = tenure;
    }

    public String getThematicArea() {
        return thematicArea;
    }

    public void setThematicArea(String thematicArea) {
        this.thematicArea = thematicArea;
    }
}
