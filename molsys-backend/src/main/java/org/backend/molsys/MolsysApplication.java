package org.backend.molsys;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.mail.javamail.JavaMailSender;

@SpringBootApplication
public class MolsysApplication {

	public static void main(String[] args) {
		SpringApplication.run(MolsysApplication.class, args);
	}


}

