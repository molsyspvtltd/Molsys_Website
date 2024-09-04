export function getAsUser(userObject) {

//console.log("userObject",userObject)
    return {
        id: userObject.id,
        userName: userObject.userName,
        age: userObject.age,
        gender: userObject.gender,
        address: userObject.address,
        firstName: userObject.firstName,
        email: userObject.email,
        lastName: userObject.lastName,
        phoneNumber: userObject.phoneNumber,
        pinCode: userObject.pinCode,
        department: userObject.department,
        institution: userObject.institution,
        country: userObject.country,
        state: userObject.state,
        gst_number: userObject.gst_number,
        created: new Date(userObject.created),
        updated: new Date(userObject.updated),
        role: userObject.roles[0].name,


    };
}
