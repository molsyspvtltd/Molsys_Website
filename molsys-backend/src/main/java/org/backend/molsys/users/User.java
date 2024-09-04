package org.backend.molsys.users;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.backend.molsys.users.models.Gender;
import org.backend.molsys.users.models.AccountStatus;
import org.backend.molsys.users.roles.Role;

import javax.persistence.*;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Set;

@Entity
@Getter
@Setter
@ToString
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long user_id;

    @Column(unique = true)
    private String userName;

    @Column
    @JsonIgnore
    @ToString.Exclude
    private String password;

    private LocalDateTime created;

    private LocalDate dateOfBirth;


    private LocalDateTime updated;

    private String firstName;



    @Column(unique = true)
    private String email;


    private String lastName;


    private Gender gender;

    private String institution;

    private String department;


    @Column(unique = true)
    private String phoneNumber;

    private String country;

    private String state;

    private String address;

    private Integer pinCode;

    private String gst_number;

    @Column(name = "verification_code")
    private String verificationCode;

    @Column(name = "approved")
    private boolean approved;



    @ManyToMany(fetch = FetchType.EAGER)
    private Set<Role> roles;


    public boolean doesRoleIsLab() {

        return doesUserHasRole("LAB");


    }

    public boolean doesRoleIsAnalysis() {

        return doesUserHasRole("ANALYSIS");


    }

    public boolean doesUserHasRole(String s) {
        return roles.stream()
                .filter(role -> {
                    return role.getName().equalsIgnoreCase(s);
                })
                .findFirst()
                .isPresent();
    }

    public boolean doesRoleIsUser() {
        return doesUserHasRole("USER");
    }

    public boolean doesRoleIsAdmin() {
        return doesUserHasRole("SUPER_ADMIN");
    }

    public boolean doesRoleIsOperator() {
        return doesUserHasRole("OPERATOR");
    }

    public boolean doesRoleIsSales() {
        return doesUserHasRole("SALES");
    }

    public Integer getAge(){

        if(null != dateOfBirth)
            return LocalDate.now().getYear() - dateOfBirth.getYear();
        else
            return 0;
    }


}
