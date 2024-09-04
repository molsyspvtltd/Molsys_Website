//package org.backend.molsys.auth.register;
//
//import org.backend.molsys.exception.AppException;
//import org.backend.molsys.users.User;
//import org.backend.molsys.users.UserService;
//import org.backend.molsys.users.models.AccountStatus;
//import org.slf4j.Logger;
//import org.slf4j.LoggerFactory;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RequestParam;
//import org.springframework.web.bind.annotation.RestController;
//
//@RestController
//@RequestMapping("/auth/verify")
//public class VerificationController {
//
//    private final UserService userService;
//
//    private static final Logger log = LoggerFactory.getLogger(VerificationController.class);
//
//    @Autowired
//    public VerificationController(UserService userService) {
//        this.userService = userService;
//    }
//
//    @GetMapping
//    public String verifyEmail(@RequestParam("code") String verificationCode) {
//        try {
//            // Find the user by verification code
//            User user = userService.findByVerificationCode(verificationCode);
//
//            if (user != null) {
//                // Verify the user by updating the status
//                user.setStatus(AccountStatus.APPROVED);
//                userService.saveInDatabase(user);
//                log.info("Email verified for user: " + user.getUserName());
//                return "Email verification successful!";
//            } else {
//                return "Invalid verification code!";
//            }
//        } catch (AppException e) {
//            log.error("Error during email verification: " + e.getMessage());
//            return "Error during email verification.";
//        }
//    }
//}

package org.backend.molsys.auth.register;

import org.backend.molsys.exception.AppException;
import org.backend.molsys.users.User;
import org.backend.molsys.users.UserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/auth/verify")
public class VerificationController {

    private final UserService userService;

    private static final Logger log = LoggerFactory.getLogger(VerificationController.class);

    @Autowired
    public VerificationController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping
    public ResponseEntity<String> verifyEmail(@RequestBody Map<String, String> request) {
        try {
            String verificationCode = request.get("verificationCode");

            if (verificationCode != null && !verificationCode.isEmpty()) {
                User user = userService.findByVerificationCode(verificationCode);

                if (user != null) {
                    // Verify the user by updating the status
                    user.setApproved(true);
                    userService.saveInDatabase(user);
                    log.info("Email verified and user approved for login: " + user.getUserName());
                    return ResponseEntity.ok("Email verification successful. You can now log in.");
                } else {
                    return ResponseEntity.ok("Invalid verification code.");
                }
            } else {
                return ResponseEntity.ok("Verification code is required.");
            }
        } catch (AppException e) {
            log.error("Error during email verification: " + e.getMessage());
            return ResponseEntity.ok("Error during email verification.");
        }
    }
}


