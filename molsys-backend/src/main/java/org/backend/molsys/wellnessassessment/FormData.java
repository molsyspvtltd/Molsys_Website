package org.backend.molsys.wellnessassessment;

import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.util.List;

@Entity
public class FormData {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String formId;
    private String name;
    private String contact;
    private String email;
    private String age;
    private String height;
    private String weight;
    private String gender;
    private String waist;
    private String neck;
    private String weightstatus;

    @ElementCollection
    private List<String> abovenormal;

    @ElementCollection
    private List<String> belownormal;

    @ElementCollection
    private List<String> diagnosed;

    @ElementCollection
    private List<String> family_history;

    @ElementCollection
    private List<String> ysymptoms;

    private String sleep;
    private String doctorprescribed;
    private String doctor_not_prescribed;

    @ElementCollection
    private List<String> diet;
    private String preBreakfasttime;
    private String breakfasttime;
    private String midMorningtime;
    private String medical_information;
    private String lunchtime;
    private String evening_Tea;
    private String eveningSnackstime;
    private String dinnertime;
    private String postDinnertime;
    @ElementCollection
    private List<String> consumption;
    @ElementCollection
    private List<String> beverages;
    @ElementCollection
    private List<String> lifestyle;
    private String outside_food;
    private String freqExercise;
    private String most_followed_exercise;
    private String sport;
    private String existing_disease;
    private String preferredDate_time;

    // Getters and Setters


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFormId() {
        return formId;
    }

    public void setFormId(String formId) {
        this.formId = formId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getContact() {
        return contact;
    }

    public void setContact(String contact) {
        this.contact = contact;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getAge() {
        return age;
    }

    public void setAge(String age) {
        this.age = age;
    }

    public String getHeight() {
        return height;
    }

    public void setHeight(String height) {
        this.height = height;
    }

    public String getWeight() {
        return weight;
    }

    public void setWeight(String weight) {
        this.weight = weight;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getWaist() {
        return waist;
    }

    public void setWaist(String waist) {
        this.waist = waist;
    }

    public String getNeck() {
        return neck;
    }

    public void setNeck(String neck) {
        this.neck = neck;
    }

    public String getWeightstatus() {
        return weightstatus;
    }

    public void setWeightstatus(String weightstatus) {
        this.weightstatus = weightstatus;
    }

    public List<String> getAbovenormal() {
        return abovenormal;
    }

    public void setAbovenormal(List<String> abovenormal) {
        this.abovenormal = abovenormal;
    }

    public List<String> getBelownormal() {
        return belownormal;
    }

    public void setBelownormal(List<String> belownormal) {
        this.belownormal = belownormal;
    }

    public List<String> getDiagnosed() {
        return diagnosed;
    }

    public void setDiagnosed(List<String> diagnosed) {
        this.diagnosed = diagnosed;
    }

    public List<String> getFamily_history() {
        return family_history;
    }

    public void setFamily_history(List<String> family_history) {
        this.family_history = family_history;
    }

    public List<String> getYsymptoms() {
        return ysymptoms;
    }

    public void setYsymptoms(List<String> ysymptoms) {
        this.ysymptoms = ysymptoms;
    }

    public String getSleep() {
        return sleep;
    }

    public void setSleep(String sleep) {
        this.sleep = sleep;
    }

    public String getDoctorprescribed() {
        return doctorprescribed;
    }

    public void setDoctorprescribed(String doctorprescribed) {
        this.doctorprescribed = doctorprescribed;
    }

    public String getDoctor_not_prescribed() {
        return doctor_not_prescribed;
    }

    public void setDoctor_not_prescribed(String doctor_not_prescribed) {
        this.doctor_not_prescribed = doctor_not_prescribed;
    }

    public List<String> getDiet() {
        return diet;
    }

    public void setDiet(List<String> diet) {
        this.diet = diet;
    }

    public String getPreBreakfasttime() {
        return preBreakfasttime;
    }

    public void setPreBreakfasttime(String preBreakfasttime) {
        this.preBreakfasttime = preBreakfasttime;
    }

    public String getBreakfasttime() {
        return breakfasttime;
    }

    public void setBreakfasttime(String breakfasttime) {
        this.breakfasttime = breakfasttime;
    }

    public String getMidMorningtime() {
        return midMorningtime;
    }

    public void setMidMorningtime(String midMorningtime) {
        this.midMorningtime = midMorningtime;
    }

    public String getLunchtime() {
        return lunchtime;
    }

    public void setLunchtime(String lunchtime) {
        this.lunchtime = lunchtime;
    }

    public String getEvening_Tea() {
        return evening_Tea;
    }

    public void setEvening_Tea(String evening_Tea) {
        this.evening_Tea = evening_Tea;
    }

    public String getEveningSnackstime() {
        return eveningSnackstime;
    }

    public void setEveningSnackstime(String eveningSnackstime) {
        this.eveningSnackstime = eveningSnackstime;
    }

    public String getDinnertime() {
        return dinnertime;
    }

    public void setDinnertime(String dinnertime) {
        this.dinnertime = dinnertime;
    }

    public String getPostDinnertime() {
        return postDinnertime;
    }

    public void setPostDinnertime(String postDinnertime) {
        this.postDinnertime = postDinnertime;
    }

    public List<String> getConsumption() {
        return consumption;
    }

    public void setConsumption(List<String> consumption) {
        this.consumption = consumption;
    }

    public List<String> getBeverages() {
        return beverages;
    }

    public void setBeverages(List<String> beverages) {
        this.beverages = beverages;
    }

    public List<String> getLifestyle() {
        return lifestyle;
    }

    public void setLifestyle(List<String> lifestyle) {
        this.lifestyle = lifestyle;
    }

    public String getOutside_food() {
        return outside_food;
    }

    public void setOutside_food(String outside_food) {
        this.outside_food = outside_food;
    }

    public String getFreqExercise() {
        return freqExercise;
    }

    public void setFreqExercise(String freqExercise) {
        this.freqExercise = freqExercise;
    }

    public String getMost_followed_exercise() {
        return most_followed_exercise;
    }

    public void setMost_followed_exercise(String most_followed_exercise) {
        this.most_followed_exercise = most_followed_exercise;
    }

    public String getMedical_information() {
        return medical_information;
    }

    public void setMedical_information(String medical_information) {
        this.medical_information = medical_information;
    }

    public String getSport() {
        return sport;
    }

    public void setSport(String sport) {
        this.sport = sport;
    }

    public String getExisting_disease() {
        return existing_disease;
    }

    public void setExisting_disease(String existing_disease) {
        this.existing_disease = existing_disease;
    }

    public String getPreferredDate_time() {
        return preferredDate_time;
    }

    public void setPreferredDate_time(String preferredDate_time) {
        this.preferredDate_time = preferredDate_time;
    }


}
