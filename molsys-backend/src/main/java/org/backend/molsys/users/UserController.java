package org.backend.molsys.users;


import org.backend.molsys.config.security.UserLoggedInService;
import org.backend.molsys.exception.ForbiddenException;
import org.backend.molsys.users.models.credentials.ChangePasswordRequest;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import org.backend.molsys.users.models.credentials.ChangePasswordService;
import org.backend.molsys.users.models.AccountStatus;
import org.backend.molsys.users.models.UpdateUserDetailRequest;

import javax.validation.ConstraintViolationException;
import java.util.List;

import static org.backend.molsys.exception.MolsysResponseStatusException.asConstraintViolation;
import static org.backend.molsys.exception.MolsysResponseStatusException.asForbidden;


@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private UserService userService;


    @Autowired
    UserLoggedInService userLoggedInService;


    @Autowired
    ChangePasswordService changePasswordService;


    private static final Logger log = LoggerFactory.getLogger(UserController.class);


    @PreAuthorize("hasRole('SUPER_ADMIN')")
    @GetMapping
    public List<User> listUsers() {

        return userService.findAll();
    }


    @PreAuthorize("hasAnyRole('USER','SUPER_ADMIN','OPERATOR','LAB','ANALYSIS','SALES')")
    @GetMapping(value = "/details")
    public User getMyDetails() {

        return userLoggedInService.getLoggedInUser();
    }


    @PreAuthorize("hasAnyRole('USER','SUPER_ADMIN','OPERATOR','LAB','ANALYSIS','SALES')")
    @PutMapping(value = "/changepassword")
    public ResponseEntity<?> changePassword(@RequestBody ChangePasswordRequest changePasswordRequest) {


        try {
            log.info("No errors to change based on" + changePasswordRequest.getPassword());

            User user = userLoggedInService.getLoggedInUser();
            changePasswordService.changePassword(user, changePasswordRequest);
            return ResponseEntity.ok("Succesfully Changed");

        } catch (ConstraintViolationException e) {
            throw asConstraintViolation(e);
        }catch (ForbiddenException e) {
            throw asForbidden(e.getMessage());
        }


    }

    @PreAuthorize("hasAnyRole('USER','SUPER_ADMIN','OPERATOR','LAB','ANALYSIS','SALES')")
    @DeleteMapping(value = "/closeaccount")
    public ResponseEntity<?> closeAccount() {

        User user = userLoggedInService.getLoggedInUser();
        deleteUserByName(user.getUserName());


        return ResponseEntity.ok("Succesfully Closed Account");
    }


    @PreAuthorize("hasAnyRole('SUPER_ADMIN')")
    @DeleteMapping(value = "/deleteuser/{username}")
    public ResponseEntity<?> deleteUser(@PathVariable String username) {


        deleteUserByName(username);


        return ResponseEntity.ok("Succesfully removed User");
    }

    public void deleteUserByName(@PathVariable String username) {
        User user = userService.findByUserName(username);
//        userService.updateStatusAndSave(user, AccountStatus.DELETED);
    }


    @PreAuthorize("hasAnyRole('USER','SUPER_ADMIN','OPERATOR','LAB','ANALYSIS','SALES')")
    @PutMapping
    public User updateUserDetails(@RequestBody UpdateUserDetailRequest updateUserDetailRequest) {
        try {
            User user = userLoggedInService.getLoggedInUser();
            return userService.updateUserDetails(user,updateUserDetailRequest);
        } catch (ConstraintViolationException e) {
            throw asConstraintViolation(e);
        }


    }


}
