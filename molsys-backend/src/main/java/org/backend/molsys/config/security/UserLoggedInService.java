package org.backend.molsys.config.security;

import org.backend.molsys.users.User;
import org.backend.molsys.users.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;


@Component
public class UserLoggedInService {

    private UserService userService;

    @Autowired
    public UserLoggedInService(UserService userService) {
        this.userService = userService;
    }


    public User getLoggedInUser() {
            UserDetails principal = (UserDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
            return userService.findByUserName(principal.getUsername());

    }


}
