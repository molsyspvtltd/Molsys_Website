//package org.backend.molsys.auth.register;
//
//
//import lombok.EqualsAndHashCode;
//import lombok.Getter;
//import lombok.Setter;
//import lombok.ToString;
//import org.backend.molsys.users.models.Gender;
//
//@Getter
//@Setter
//@ToString
//@EqualsAndHashCode
//public class RegisterRequest {
//
//
//    private String userName;
//
//    private String password;
//    private String firstName;
//
//    private String email="";
//
//    private String phoneNumber="";
//
//
//    private String lastName;
//
//    private String address;
//
//    private String verificationToken;
//
//
//
//
//
//}

package org.backend.molsys.auth.register;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@EqualsAndHashCode
public class RegisterRequest {

    private String userName;
    private String password;
    private String firstName;
    private String email = "";
    private String phoneNumber = "";
    private String lastName;
    private String address;
    private String verificationCode;
    private boolean approved;
    private String institution;
    private String department;
    private String country;
    private String state;
    private Integer pinCode;
    private String gst_number;


}

