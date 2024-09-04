package org.backend.molsys.users;

import org.backend.molsys.exception.AppException;
import org.backend.molsys.shared.DateParser;
import org.backend.molsys.shared.StringValidator;
import org.backend.molsys.users.models.AccountStatus;
import org.backend.molsys.users.models.UpdateUserDetailRequest;
import org.backend.molsys.users.roles.Role;
import org.backend.molsys.users.roles.RoleService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.CachePut;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.validation.annotation.Validated;
import org.backend.molsys.auth.register.RegisterRequest;
import org.backend.molsys.users.roles.UserRole;


import javax.validation.Valid;
import javax.validation.constraints.NotNull;
import java.time.LocalDateTime;
import java.util.*;

import static org.backend.molsys.shared.StringValidator.isNotEmptyOrNull;


@Service
@Validated
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    RoleService roleService;

    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    private static final Logger log = LoggerFactory.getLogger(UserService.class);



    @Cacheable("user")
    public User findByUserName(String userName) {

        return userRepository.findByUserName(userName);

    }

//    public List<User> findPendingApprovals() {
//
//        return userRepository.findByStatus(AccountStatus.INITIATED);
//
//    }
//
//    public boolean isApprovedUser(String userName) {
//
//        return userRepository.findByUserName(userName).getStatus() == AccountStatus.APPROVED;
//
//    }

    public void validateUserWithSameDataExists(RegisterRequest user) {

        if((null != findByUserName(user.getUserName())))
            throw new AppException("Username already exists " + user.getUserName());

        userRepository.findByEmail(user.getEmail()).ifPresent(user1 ->  {
            throw new AppException("User with Same email already exists " + user.getEmail());
        });
        userRepository.findByPhoneNumber(user.getPhoneNumber()).ifPresent(user1 ->  {
            throw new AppException("User with Same Phone number already exists " + user.getPhoneNumber());
        });

    }


    public List<User> findAll() {
        List<User> list = new ArrayList<>();
        userRepository.findAll().iterator().forEachRemaining(list::add);
        return list;
    }





    public Optional<User> findById(Long user_id) {
        return userRepository.findById(user_id);
    }


    public User addUser(RegisterRequest user) {


        return addUserWithRole(user, roleService.getForUser(), AccountStatus.APPROVED);
    }

    public User addLab(RegisterRequest user) {

        return addUserWithRole(user, roleService.getForLab(), AccountStatus.INITIATED);
    }

    public User addAnalysis(RegisterRequest user) {

        return addUserWithRole(user, roleService.getForAnalysis(), AccountStatus.INITIATED);
    }

    public User addOperator(RegisterRequest user) {

        return addUserWithRole(user, roleService.getForOperator(), AccountStatus.INITIATED);
    }

    public User addSuperAdmin(RegisterRequest user) {

        return addUserWithRole(user, roleService.getForSuperAdmin(), AccountStatus.APPROVED);
    }

    public User addSales(RegisterRequest user) {

        return addUserWithRole(user, roleService.getForSales(), AccountStatus.INITIATED);
    }


    public User addUserWithRole(@Valid RegisterRequest registerRequest, Role role, AccountStatus status) {

        validateUserWithSameDataExists(registerRequest);


        User newUser = new User();
        newUser.setUserName(registerRequest.getUserName());
        newUser.setPassword(toEncrypted(registerRequest.getPassword()));
        newUser.setRoles(getRolesForUser(role));
        newUser.setCreated(LocalDateTime.now());
        newUser.setUpdated(LocalDateTime.now());
        newUser.setAddress(registerRequest.getAddress());
        newUser.setFirstName(registerRequest.getFirstName());
        newUser.setLastName(registerRequest.getLastName());
        newUser.setEmail(registerRequest.getEmail());
        newUser.setPhoneNumber(registerRequest.getPhoneNumber());
        newUser.setPinCode(registerRequest.getPinCode());
        newUser.setAddress(registerRequest.getAddress());
        newUser.setDepartment(registerRequest.getDepartment());
        newUser.setInstitution(registerRequest.getInstitution());
       newUser.setGst_number(registerRequest.getGst_number());
        newUser.setState(registerRequest.getState());
        newUser.setCountry(registerRequest.getCountry());

        User updatedUser = saveInDatabase(newUser);


        return updatedUser;


    }

//    @CachePut(value = "user")
//    public User updateApprovalStatus(Long user_Id,AccountStatus status) {
//        User user = userRepository.findById(user_Id).orElseThrow(() -> new AppException("Invalid User ID"));
//
//        return updateStatusAndSave(user, status);
//
//    }

//    public User updateStatusAndSave(User user, @NotNull AccountStatus status) {
//        user.setStatus(status);
//        return saveInDatabase(user);
//    }

    @CachePut(value = "user")
    public User saveInDatabase(User newUser) {
        try{
            return userRepository.save(newUser);
        }
        catch (DataIntegrityViolationException e) {

            e.printStackTrace();
            throw new AppException("User with same data Already exists, Email/Phone should be unique");

        }

    }

    public User updateUserDetails(User user, UpdateUserDetailRequest updateUserDetailRequest) {



        if(StringValidator.isNotEmptyOrNull(updateUserDetailRequest.getFirstName()))
            user.setFirstName(updateUserDetailRequest.getFirstName());

        if(StringValidator.isNotEmptyOrNull(updateUserDetailRequest.getLastName()))
            user.setLastName(updateUserDetailRequest.getLastName());

        if(StringValidator.isNotEmptyOrNull(updateUserDetailRequest.getEmail()))
            user.setEmail(updateUserDetailRequest.getEmail());

        if(StringValidator.isNotEmptyOrNull(updateUserDetailRequest.getPhoneNumber()))
            user.setPhoneNumber(updateUserDetailRequest.getPhoneNumber());


        User savedUser = saveInDatabase(user);
        log.info("updateUserDetails" + savedUser.toString());
        return savedUser;


    }


    public Set<Role> getRoleFor(UserRole userRole) {
        return getRolesForUser(roleService.findByRole(userRole));
    }


    private Set<Role> getRolesForUser(Role role) {
        Set<Role> roles = new HashSet<>();
        roles.add(role);
        return roles;
    }


    public String toEncrypted(String password) {

        return bCryptPasswordEncoder.encode(password);
    }

    public User findByEmail(String email) {
        return userRepository.findByEmail(email).orElse(null);
    }

    public User findByPhoneNumber(String email) {
        return userRepository.findByPhoneNumber(email).orElse(null);
    }


    public User findByVerificationCode(String verificationCode) { return userRepository.findByVerificationCode(verificationCode).orElse(null); }
}
