package org.backend.molsys.config.loaddata;

import org.backend.molsys.shared.DateParser;
import org.backend.molsys.users.User;
import org.backend.molsys.users.UserService;
import org.backend.molsys.users.models.Gender;
import org.backend.molsys.users.roles.RoleService;
import org.backend.molsys.users.roles.UserRole;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.ApplicationListener;
import org.springframework.stereotype.Component;
import org.backend.molsys.auth.register.RegisterRequest;

import java.time.LocalDate;
import java.util.*;


@Component
public class AppInitializationService implements ApplicationListener<ApplicationReadyEvent> {


    @Autowired
    RoleService roleService;

    @Autowired
    UserService userService;


    User defaultLab = null;

    User defaultAnalysis = null;
    User defaultSales = null;
    User defaultOperator = null;
    User superAdmin = null;
    static List<String> generatedPhones = new ArrayList<>();

    private static final Logger log = LoggerFactory.getLogger(AppInitializationService.class);



    @Override
    public void onApplicationEvent(ApplicationReadyEvent event) {


        if ( roleService.shouldInitialize()) {
            log.info("loading default values");
            initialize();

            log.info("loaded default values");
        }


    }



    public void initialize() {

        roleService.saveRoleFor(UserRole.USER);
        roleService.saveRoleFor(UserRole.LAB);
        roleService.saveRoleFor(UserRole.ANALYSIS);
        roleService.saveRoleFor(UserRole.SALES);
        roleService.saveRoleFor(UserRole.OPERATOR);
        roleService.saveRoleFor(UserRole.SUPER_ADMIN);
        addDefaultUserData();

    }


    public void addDefaultUserData() {

        createUserFrom("user", getRandomPinCode());


        defaultLab = userService.addLab(createRegisterRequestWith("lab", getRandomPinCode()));

        defaultAnalysis = userService.addAnalysis(createRegisterRequestWith("Analysis", getRandomPinCode()));

        defaultOperator = userService.addOperator(createRegisterRequestWith("operator", getRandomPinCode()));


        defaultSales = userService.addSales(createRegisterRequestWith("sales", getRandomPinCode()));

        superAdmin = userService.addSuperAdmin(createRegisterRequestWith("admin", getRandomPinCode()));

    }

    public User createUserFrom(String name, Integer pincode) {
        return userService.addUser(createRegisterRequestWith(name, pincode));
    }
    public  static RegisterRequest createRegisterRequestWith(String user, int pincode) {
        RegisterRequest registerRequest = new RegisterRequest();
        String userNameinLowerCase = user.replace(" ", "").toLowerCase().replaceAll("[^a-z0-9]", "");
        ;
        registerRequest.setUserName(userNameinLowerCase);
        registerRequest.setPassword("password");
        registerRequest.setFirstName(user);
        registerRequest.setLastName("");
//        registerRequest.setGender(getRandomGender());
        registerRequest.setAddress(getRandomAddress(pincode));
        registerRequest.setPhoneNumber(getAPhoneNumber());
//        registerRequest.setPinCode(pincode);
//        registerRequest.setDateOfBirth(getRandomDateOfBirth());
        registerRequest.setEmail(userNameinLowerCase + "@molsys.in");
        return registerRequest;
    }
    private static String getAPhoneNumber() {
        String phone = getRandomPhoneNumber();
        while (generatedPhones.contains(phone) == true) {

            phone = getRandomPhoneNumber();
        }
        generatedPhones.add(phone);
        return phone;
    }

    static boolean canSetOtherGender() {
        Random r = new Random();
        int low = 1;
        int high = 100;
        int result = r.nextInt(high - low) + low;
        return result == 8;
    }

    private static Gender getRandomGender() {

        List<Gender> genders = Arrays.asList(Gender.MALE, Gender.FEMALE);

        Random rand = new Random();
        final Gender gender = genders.get(rand.nextInt(genders.size()));

        if (gender.equals(Gender.FEMALE) && canSetOtherGender())
            return Gender.OTHER;
        else
            return gender;
    }
    static String getRandomDoorNumber() {

        int min = 1;
        int max = 275;

        Random r = new Random();
        int l = (max - min) + 1;
        int res = r.nextInt(l) + min;

        String myChar = getRandomItemInStrings(Arrays.asList("", "A", "B", "C", "D", "E", "F", "G", "H"));


        if (myChar.equalsIgnoreCase(""))
            return "" + res;
        else
            return res + "/" + myChar;
    }

    static String getRandomItemInStrings(List<String> characters) {
        Random rand = new Random();
        return characters.get(rand.nextInt(characters.size()));
    }

    private static String getRandomStreetName() {

        String street = getRandomItemInStrings(Arrays.asList("Gandhi Street", "Nehru Street", "Nietzche Avenue", "Jefferson Avenue", "Grant Avenue", "Franklin Avenue", "4th Street North", "8th Street", "Strawberry Lane", "Sycamore Street", "Monroe Drive", "Route 10", "Highland Avenue", "Sherman Street", "Mulberry Court", "Main Street North", "Hillside Drive", "Andover Court", "Eagle Street", "Lakeview Drive", "Mulberry Lane", "Route 6", "Lantern Lane", "5th Street", "Buttonwood Drive", "Colonial Avenue", "Ann Street", "Brookside Drive", "Canterbury Court", "Marshall Street", "Hudson Street", "Union Street", "Jones Street", "Sycamore Lane", "6th Avenue", "Clark Street", "Cedar Avenue", "Park Street", "Evergreen Lane", "Aspen Drive", "6th Street North", "Magnolia Avenue", "Heather Lane", "Spruce Avenue", "B Street", "Ashley Court", "York Street", "Front Street North", "Brook Lane", "Jackson Avenue", "Hillcrest Drive", "Windsor Drive", "2nd Street"));

        return street;

    }

    static String getRandomAddress(Integer pinCode) {


        Map<Integer, String> addresses = new HashMap<>();
        addresses.put(110001, getRandomDoorNumber() + " - " + getRandomStreetName() + ",New Delhi");
        addresses.put(560003, getRandomDoorNumber() + " - " + getRandomStreetName() + ",Bangalore");
        addresses.put(400001, getRandomDoorNumber() + " - " + getRandomStreetName() + ",Mumbai");
        addresses.put(700004, getRandomDoorNumber() + " - " + getRandomStreetName() + ",KOlkatta");


        if (addresses.containsKey(pinCode))
            return addresses.get(pinCode);
        else
            return getRandomDoorNumber() + " - " + getRandomStreetName() + ",Goa";

    }
    static int getRandomPinCode() {


        List<Integer> integers = Arrays.asList(110001, 560003, 400001, 700004);
        Random rand = new Random();
        return integers.get(rand.nextInt(integers.size()));

    }


    private static String getRandomPhoneNumber() {

        Long start = 9629150000L;

        int min = 1000;
        int max = 9999;

        Random r = new Random();
        int l = (max - min) + 1;
        int res = r.nextInt(l) + min;
        long l1 = start + res;
        return "" + l1;
    }

    public static Integer getRandomAge() {

        int min = 21;
        int max = 75;

        Random r = new Random();
        int l = (max - min) + 1;
        int res = r.nextInt(l) + min;

        return res;
    }

    private static String getRandomDateOfBirth() {


        return DateParser.getStringFromDate(LocalDate.now().minusYears(getRandomAge()));
    }

}

