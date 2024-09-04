package org.backend.molsys.auth.register;

import org.backend.molsys.exception.MolsysResponseStatusException;
import org.backend.molsys.users.User;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.backend.molsys.exception.AppException;

import static org.backend.molsys.exception.MolsysResponseStatusException.asBadRequest;

@RestController
public class RegisterController {



    private RegisterService registerService;


    private static final Logger log = LoggerFactory.getLogger(RegisterController.class);


    @Autowired
    public RegisterController( RegisterService userService) {

        this.registerService = userService;
    }


    @RequestMapping(value = "/api/auth/register", method = RequestMethod.POST)
    public User saveUser(@RequestBody RegisterRequest user) {

        try {
            return registerService.addUser(user);
        } catch (AppException e) {
            throw   MolsysResponseStatusException.asBadRequest(e.getMessage());
        }


    }


    @RequestMapping(value = "/auth/lab/register", method = RequestMethod.POST)
    public User saveLab(@RequestBody RegisterRequest user) {

        try {
            return registerService.addLab(user);
        } catch (AppException e) {
            throw MolsysResponseStatusException.asBadRequest(e.getMessage());
        }
    }

    @RequestMapping(value = "/auth/analysis/register", method = RequestMethod.POST)
    public User saveAnalysis(@RequestBody RegisterRequest user) {

        try {
            return registerService.addAnalysis(user);
        } catch (AppException e) {
            throw MolsysResponseStatusException.asBadRequest(e.getMessage());
        }
    }

    @RequestMapping(value = "/auth/operator/register", method = RequestMethod.POST)
    public User saveOperator(@RequestBody RegisterRequest user) {

        try {
            return registerService.addOperator(user);
        } catch (AppException e) {
            throw MolsysResponseStatusException.asBadRequest(e.getMessage());
        }
    }


    @RequestMapping(value = "/auth/sales/register", method = RequestMethod.POST)
    public User saveSales(@RequestBody RegisterRequest user) {

        try {
            return registerService.addSales(user);
        } catch (AppException e) {
            throw MolsysResponseStatusException.asBadRequest(e.getMessage());
        }
    }


    @RequestMapping(method = RequestMethod.POST)
    public ResponseEntity<String> saveUser(@RequestBody RegisterRequest user,
                                           @RequestParam(name = "verificationCode", required = false) String verificationCode) {
        try {
            if (verificationCode != null && !verificationCode.isEmpty()) {
                // Verify the user with the entered verification code
                registerService.verifyUser(user);
            } else {
                // Proceed with normal registration (send verification code)
                User savedUser = registerService.addUser(user);

                if (!savedUser.isApproved()) {
                    // User needs to verify email before login
                    return ResponseEntity.ok("User registered. Please check your email for verification.");
                }
            }

            // User is approved, allow login
            return ResponseEntity.ok("User registered and email verified. You can now log in.");
        } catch (AppException e) {
            throw MolsysResponseStatusException.asBadRequest(e.getMessage());
        }
    }

}
