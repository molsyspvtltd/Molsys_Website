package org.backend.molsys.config.security;

import org.backend.molsys.users.User;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.backend.molsys.users.UserService;

import java.util.Set;
import java.util.stream.Collectors;


@Service(value = "MolsysUserDetailsService")
public class MolsysUserDetailsService implements UserDetailsService {


	private UserService userService;



	private static final Logger log = LoggerFactory.getLogger(MolsysUserDetailsService.class);

	@Autowired
	public MolsysUserDetailsService(UserService userService) {
		this.userService = userService;
	}

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		User user = userService.findByUserName(username);
		log.info("loadUserByUsername " + user.toString());
		if(user == null){
			throw new UsernameNotFoundException("Invalid username or password.");
		}
		return new org.springframework.security.core.userdetails.User(user.getUserName(), user.getPassword(), getAdmin(user));
	}

	private Set<SimpleGrantedAuthority> getAdmin(User user) {

		return user.getRoles()
				.stream()
				.map(role -> new SimpleGrantedAuthority("ROLE_" + role.getName()))
				.collect(Collectors.toSet());

	}

}
