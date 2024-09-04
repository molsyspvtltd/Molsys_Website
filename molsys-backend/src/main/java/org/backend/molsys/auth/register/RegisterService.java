package org.backend.molsys.auth.register;

import org.backend.molsys.exception.AppException;
import org.backend.molsys.users.User;
import org.backend.molsys.users.UserService;
import org.backend.molsys.users.models.AccountStatus;
import org.backend.molsys.users.roles.UserRole;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;


@Service
public class RegisterService {

    @Autowired
    private UserService userService;

    @Autowired
    private JavaMailSender javaMailSender;


    private static final Logger log = LoggerFactory.getLogger(RegisterService.class);


    public User addUser(RegisterRequest user) {


        if((null != userService.findByUserName(user.getUserName())))
            throw new AppException("Username already exists " + user.getUserName());

        if((null != userService.findByEmail(user.getEmail())))
            throw new AppException("User with Same email already exists " + user.getEmail());


        if((null != userService.findByPhoneNumber(user.getPhoneNumber())))
            throw new AppException("User with Same Phone number already exists " + user.getPhoneNumber());


        User newUser = new User();
        newUser.setUserName(user.getUserName());
        newUser.setPassword(userService.toEncrypted(user.getPassword()));
        newUser.setRoles(userService.getRoleFor(UserRole.USER));
        newUser.setCreated(LocalDateTime.now());
        newUser.setUpdated(LocalDateTime.now());
        newUser.setAddress(user.getAddress());
        newUser.setFirstName(user.getFirstName());
        newUser.setLastName(user.getLastName());
        newUser.setEmail(user.getEmail());
        newUser.setPhoneNumber(user.getPhoneNumber());
        newUser.setAddress(user.getAddress());
        newUser.setCountry(user.getCountry());
        newUser.setState(user.getState());
        newUser.setGst_number(user.getGst_number());
        newUser.setPinCode(user.getPinCode());
        newUser.setInstitution(user.getInstitution());
        newUser.setDepartment(user.getDepartment());
//        newUser.setStatus(AccountStatus.APPROVED);
//        User updatedUser = userService.saveInDatabase(newUser);


        // Generate a random verification code
        String verificationCode = generateVerificationCode();

        // Set the verification code and save the user
        newUser.setVerificationCode(verificationCode);
        User updatedUser = userService.saveInDatabase(newUser);

        // Send the verification email
        sendVerificationEmail(updatedUser);

        return updatedUser;




    }

    public User addLab(RegisterRequest user) {

        if((null != userService.findByUserName(user.getUserName())))
            throw new AppException("Username already exists " + user.getUserName());

        if((null != userService.findByEmail(user.getEmail())))
            throw new AppException("User with Same email already exists " + user.getEmail());


        if((null != userService.findByPhoneNumber(user.getPhoneNumber())))
            throw new AppException("User with Same Phone number already exists " + user.getPhoneNumber());


        User newUser = new User();
        newUser.setUserName(user.getUserName());
        newUser.setPassword(userService.toEncrypted(user.getPassword()));
        newUser.setRoles(userService.getRoleFor(UserRole.LAB));
        newUser.setCreated(LocalDateTime.now());
        newUser.setUpdated(LocalDateTime.now());
        newUser.setAddress(user.getAddress());
        newUser.setFirstName(user.getFirstName());
        newUser.setLastName(user.getLastName());
        newUser.setEmail(user.getEmail());
        newUser.setPhoneNumber(user.getPhoneNumber());
//        newUser.setPinCode(user.getPinCode());
//        newUser.setGender(user.getGender());
        newUser.setAddress(user.getAddress());
//        newUser.setDateOfBirth(DateParser.getDateFromString(user.getDateOfBirth()));
//        newUser.setStatus(AccountStatus.APPROVED);
        User updatedUser = userService.saveInDatabase(newUser);


        return updatedUser;


    }

    public User addAnalysis(RegisterRequest user) {

        if((null != userService.findByUserName(user.getUserName())))
            throw new AppException("Username already exists " + user.getUserName());

        if((null != userService.findByEmail(user.getEmail())))
            throw new AppException("User with Same email already exists " + user.getEmail());


        if((null != userService.findByPhoneNumber(user.getPhoneNumber())))
            throw new AppException("User with Same Phone number already exists " + user.getPhoneNumber());


        User newUser = new User();
        newUser.setUserName(user.getUserName());
        newUser.setPassword(userService.toEncrypted(user.getPassword()));
        newUser.setRoles(userService.getRoleFor(UserRole.ANALYSIS));
        newUser.setCreated(LocalDateTime.now());
        newUser.setUpdated(LocalDateTime.now());
        newUser.setAddress(user.getAddress());
        newUser.setFirstName(user.getFirstName());
        newUser.setLastName(user.getLastName());
        newUser.setEmail(user.getEmail());
        newUser.setPhoneNumber(user.getPhoneNumber());
//        newUser.setPinCode(user.getPinCode());
//        newUser.setGender(user.getGender());
        newUser.setAddress(user.getAddress());
//        newUser.setDateOfBirth(DateParser.getDateFromString(user.getDateOfBirth()));
//        newUser.setStatus(AccountStatus.INITIATED);
        User updatedUser = userService.saveInDatabase(newUser);


        return updatedUser;


    }

    public User addOperator(RegisterRequest user) {

        if((null != userService.findByUserName(user.getUserName())))
            throw new AppException("Username already exists " + user.getUserName());

        if((null != userService.findByEmail(user.getEmail())))
            throw new AppException("User with Same email already exists " + user.getEmail());


        if((null != userService.findByPhoneNumber(user.getPhoneNumber())))
            throw new AppException("User with Same Phone number already exists " + user.getPhoneNumber());


        User newUser = new User();
        newUser.setUserName(user.getUserName());
        newUser.setPassword(userService.toEncrypted(user.getPassword()));
        newUser.setRoles(userService.getRoleFor(UserRole.OPERATOR));
        newUser.setCreated(LocalDateTime.now());
        newUser.setUpdated(LocalDateTime.now());
        newUser.setAddress(user.getAddress());
        newUser.setFirstName(user.getFirstName());
        newUser.setLastName(user.getLastName());
        newUser.setEmail(user.getEmail());
        newUser.setPhoneNumber(user.getPhoneNumber());
//        newUser.setPinCode(user.getPinCode());
//        newUser.setGender(user.getGender());
        newUser.setAddress(user.getAddress());
//        newUser.setDateOfBirth(DateParser.getDateFromString(user.getDateOfBirth()));
//        newUser.setStatus(AccountStatus.INITIATED);
        User updatedUser = userService.saveInDatabase(newUser);


        return updatedUser;


    }

    public User addSuperAdmin(RegisterRequest user) {

        if((null != userService.findByUserName(user.getUserName())))
            throw new AppException("Username already exists " + user.getUserName());

        if((null != userService.findByEmail(user.getEmail())))
            throw new AppException("User with Same email already exists " + user.getEmail());


        if((null != userService.findByPhoneNumber(user.getPhoneNumber())))
            throw new AppException("User with Same Phone number already exists " + user.getPhoneNumber());


        User newUser = new User();
        newUser.setUserName(user.getUserName());
        newUser.setPassword(userService.toEncrypted(user.getPassword()));
        newUser.setRoles(userService.getRoleFor(UserRole.SUPER_ADMIN));
        newUser.setCreated(LocalDateTime.now());
        newUser.setUpdated(LocalDateTime.now());
        newUser.setAddress(user.getAddress());
        newUser.setFirstName(user.getFirstName());
        newUser.setLastName(user.getLastName());
        newUser.setEmail(user.getEmail());
        newUser.setPhoneNumber(user.getPhoneNumber());
//        newUser.setPinCode(user.getPinCode());
//        newUser.setGender(user.getGender());
        newUser.setAddress(user.getAddress());
//        newUser.setDateOfBirth(DateParser.getDateFromString(user.getDateOfBirth()));
//        newUser.setStatus(AccountStatus.APPROVED);
        User updatedUser = userService.saveInDatabase(newUser);


        return updatedUser;


    }

    public User addSales(RegisterRequest user) {

        if((null != userService.findByUserName(user.getUserName())))
            throw new AppException("Username already exists " + user.getUserName());

        if((null != userService.findByEmail(user.getEmail())))
            throw new AppException("User with Same email already exists " + user.getEmail());


        if((null != userService.findByPhoneNumber(user.getPhoneNumber())))
            throw new AppException("User with Same Phone number already exists " + user.getPhoneNumber());


        User newUser = new User();
        newUser.setUserName(user.getUserName());
        newUser.setPassword(userService.toEncrypted(user.getPassword()));
        newUser.setRoles(userService.getRoleFor(UserRole.SALES));
        newUser.setCreated(LocalDateTime.now());
        newUser.setUpdated(LocalDateTime.now());
        newUser.setAddress(user.getAddress());
        newUser.setFirstName(user.getFirstName());
        newUser.setLastName(user.getLastName());
        newUser.setEmail(user.getEmail());
        newUser.setPhoneNumber(user.getPhoneNumber());
//        newUser.setPinCode(user.getPinCode());
//        newUser.setGender(user.getGender());
        newUser.setAddress(user.getAddress());
//        newUser.setDateOfBirth(DateParser.getDateFromString(user.getDateOfBirth()));
//        newUser.setStatus(AccountStatus.APPROVED);
        User updatedUser = userService.saveInDatabase(newUser);


        return updatedUser;


    }

//    private String generateVerificationCode() {
//        // Generate a random alphanumeric verification code
//        // Replace this with a more robust method or use a library
//        int length = 6;
//        String characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
//        StringBuilder verificationCode = new StringBuilder();
//
//        for (int i = 0; i < length; i++) {
//            int index = (int) (Math.random() * characters.length());
//            verificationCode.append(characters.charAt(index));
//        }
//
//        return verificationCode.toString();
//    }
//
//    private void sendVerificationEmail(User user) {
//        SimpleMailMessage mailMessage = new SimpleMailMessage();
//        mailMessage.setTo(user.getEmail());
//        mailMessage.setSubject("Email Verification");
//        mailMessage.setText("Your verification code is: " + user.getVerificationCode());
//
//        // Send the email
//        javaMailSender.send(mailMessage);
//    }

    public void verifyUser(RegisterRequest user) {
        User existingUser = userService.findByUserName(user.getUserName());

        if (existingUser == null) {
            throw new AppException("User not found.");
        }

        if (!existingUser.getVerificationCode().equals(user.getVerificationCode())) {
            throw new AppException("Invalid verification code.");
        }

        // Verify the user by updating the status
        existingUser.setApproved(true);
        userService.saveInDatabase(existingUser);
        log.info("Email verified and user approved for login: " + existingUser.getUserName());
    }

    private String generateVerificationCode() {
        int length = 6;
        String characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        StringBuilder verificationCode = new StringBuilder();

        for (int i = 0; i < length; i++) {
            int index = (int) (Math.random() * characters.length());
            verificationCode.append(characters.charAt(index));
        }

        return verificationCode.toString();
    }

    private void sendVerificationEmail(User user) {
        SimpleMailMessage mailMessage = new SimpleMailMessage();
        mailMessage.setTo(user.getEmail());
        mailMessage.setSubject("Email Verification");
        mailMessage.setText("Your verification code is: " + user.getVerificationCode());

        javaMailSender.send(mailMessage);
    }


}
