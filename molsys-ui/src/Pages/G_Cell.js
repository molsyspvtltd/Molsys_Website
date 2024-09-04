import React, { useState } from 'react';
import axios from 'axios';
import '../style/G_Cell.css';
import G_cell from '../assets/Gcell-tbg.png';
import gcellbg from '../assets/g_cellbg.jpg';
import emailjs from 'emailjs-com';
import videoBg from '../assets/gcell_ad.mp4';

function G_Cell() {

    const [student, setStudent] = useState({
        firstName: '',
        lastName: '',
        gender: '',
        age: '',
        email: '',
        phone: '',
        referralCode: '',
        address: '',
        dob: '',
        university: '',
        institution: '',
        eduQualification: '',
        yrOfStudy: '',
        ccYearStd10: '',
        markStd10: '',
        ccYearStd12: '',
        markStd12: '',
        ccYearStdUG: '',
        markStdUG: '',
        ccYearStdPG: '',
        markStdPG: '',
        tenure: '',
        thematicArea: '',
      });
    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setStudent({ ...student, [name]: value });
      };
    
      const handleSubmit = async () => {
        try {
          // Assuming your backend API endpoint for registration is '/api/register'
          const response = await axios.post('https://molsys.in/api/students/register', student);
          alert(`Registration successful. Student ID: ${response.data}`);
        } catch (error) {
          alert('Registration failed. Please try again.');
          console.error('Error:', error);
        }

        setStudent({
            firstName: '',
            lastName: '',
            gender: '',
            age: '',
            email: '',
            phone: '',
            referralCode: '',
            address: '',
            dob: '',
            university: '',
            institution: '',
            eduQualification: '',
            yrOfStudy: '',
            ccYearStd10: '',
            markStd10: '',
            ccYearStd12: '',
            markStd12: '',
            ccYearStdUG: '',
            markStdUG: '',
            ccYearStdPG: '',
            markStdPG: '',
            tenure: '',
            thematicArea: '',
          });

      };
    
    
  return (
    <div>
      <header class="masthead mt-5 shadow-lg fade-in" style={{backgroundImage: `url(${gcellbg})`, backgroundSize: "cover"} }>
    <div class="container">

        <div class="row align-items-center">

            <div class="col-6 py-5 mt-5 pt-5">
                <h1 class="mb-4">MOLSYS G-CELL</h1>
                <h2 class="mb-4">Welcome to Genomics Cell </h2>
                <p class="m-0">Explore Bio-clues Parameters with our Innovative Programs. Register now to unlock Valuable Insights. Join us on a journey of discovery and advancement in Biological Sciences. Ignite your Curiosity Today !</p>
            </div>
            
            <div class="col-12 col-md-6 py-5 px-4 text-center">
  <img src={G_cell} class="img-fluid" alt="Responsive Image" style={{height: '200px', width: '500px'}}/>
</div>


        </div>
    </div>
   
</header>

            <div class="">
            <video class="video" src={videoBg} autoPlay />
            </div>

        <div class="container-xl px-4 mt-4">

<div class="card mb-4 lead">
                <div class="card-header">Student Details</div>
                <div class="card-body">
                    <form>
                        {/* <!-- Form Row--> */}
                        <div class="row gx-3 mb-3">
                            {/* <!-- Form Group (first name)--> */}
                            <div class="col-md-6">
                                <label class="small mb-1" for="inputFirstName"> First name *</label>
                                <input class="form-control" id="inputFirstName" type="text" placeholder="Enter your first name" name="firstName" value={student.firstName} onChange={handleInputChange} required/>
                            </div>
                            {/* <!-- Form Group (last name)--> */}
                            <div class="col-md-6">
                                <label class="small mb-1" for="inputLastName"> Last name *</label>
                                <input class="form-control" id="inputLastName" type="text" placeholder="Enter your last name" name="lastName" value={student.lastName} onChange={handleInputChange} required/>
                            </div>
                        </div>
                        {/* <!-- Form Row        --> */}
                        
                        <div class="row gx-3 mb-3">
                        <div class="col-md-6">
                            <label class="small mb-1" for="inputAge">Age *</label>
                            <input class="form-control" id="inputAge" type="text" placeholder="Enter your age"  name="age" value={student.age} onChange={handleInputChange} required/>
                        </div>
                        <div class="col-md-6">
                          <label class="small mb-1" for="inputGender">Gender *</label>
                           <select class="form-control" id="inputGender" name="gender" value={student.gender} onChange={handleInputChange} required>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Other">Other</option>
                            </select>
                          </div>
                          </div>
                        {/* <!-- Form Group (email address)--> */}
                        <div class="mb-3">
                            <label class="small mb-1" for="inputEmailAddress">Email address *</label>
                            <input class="form-control" id="inputEmailAddress" type="email" placeholder="Enter your email address"  name="email" value={student.email} onChange={handleInputChange} required/>
                        </div>
                        <div class="mb-3">
                            <label class="small mb-1" for="inputPatientAddress"> Address *</label>
                            <input class="form-control" id="inputPatientAddress" type="address" placeholder="Enter the  address"  name="address" value={student.address} onChange={handleInputChange} required/>
                        </div>
                        {/* <!-- Form Row--> */}
                        <div class="row gx-3 mb-3">
                            {/* <!-- Form Group (phone number)--> */}
                            <div class="col-md-6">
                                <label class="small mb-1" for="inputPhone">Phone number *</label>
                                <input class="form-control" id="inputPhone" type="tel" placeholder="Enter your phone number"  name="phone" value={student.phone} onChange={handleInputChange} required />
                            </div>
                            {/* <!-- Form Group (birthday)--> */}
                            <div class="col-md-6">
                                <label class="small mb-1" for="inputBirthday">Date of Birth </label>
                                <input class="form-control" id="inputBirthday" type="date" name="dob" placeholder="Enter your Date of Birth" value={student.dob} onChange={handleInputChange} />
                            </div>
                            <div class="mb-3 mt-3">
                            <label class="small mb-1" for="inputReferal">Referal Code</label>
                            <input class="form-control" id="inputReferal" type="text" placeholder="Enter the Referal Code"   name="referralCode" value={student.referralCode} onChange={handleInputChange}/>
                        </div>
                        </div>
                        <div class="card-header">Student Academic Details</div>
                        <div class="row gx-3 mb-3">
                            {/* <!-- Form Group (organization name)--> */}
                            <div class="col-md-6 mt-3 mb-3">
                                <label class="small mb-1" for="inputUniversity">University *</label>
                                <input class="form-control" id="inputUniversity" type="text" placeholder="Enter the Institution name"  name="university" value={student.university} onChange={handleInputChange} required/>
                            </div>
                            {/* <!-- Form Group (location)--> */}
                            <div class="col-md-6 mt-3 mb-3">
                                <label class="small mb-1" for="inputInstitution">Institution *</label>
                                <input class="form-control" id="inputInstitution" type="text" placeholder="Enter the Institution name"  name="institution" value={student.institution} onChange={handleInputChange} required/>
                            </div>
                            <div class="col-md-6 mb-3">
                          <label class="small mb-1" placeholder='Select' for="inputEduQuali">Educational Qualification *</label>
                           <select class="form-control" id="inputEduQuali" name="eduQualification" value={student.eduQualification} onChange={handleInputChange} required>
                                <option selected>Choose</option>
                                <option value="B.Sc">B.Sc</option>
                                <option value="M.Sc">M.Sc</option>
                                <option value="B.Tech">B.Tech</option>
                                <option value="M.Tech">M.Tech</option>
                                <option value="PhD">PhD</option>
                                <option value="MBBS">MBBS</option>

                                
                            </select>
                          </div>
                          <div class="col-md-6 mb-3">
                          <label class="small mb-1" for="inputYear">Year Of Study *</label>
                           <select class="form-control" id="inputYear" name="yrOfStudy" value={student.yrOfStudy} onChange={handleInputChange} required>
                                <option selected>Choose</option>
                                <option value="1">1st year</option>
                                <option value="2">2nd year</option>
                                <option value="3">3rd year</option>
                                <option value="4">4th year</option>
                                <option value="5">5th year</option>
                                <option value="Course">Course Completed</option>
                              

                                
                            </select>
                        </div>
                        <div class="row gx-3 mb-3">
                            
                            <div class="col-md-6">
                                <label class="small mb-1" for="inputten">Year Of Course Completion Std: 10 *</label>
                                <input class="form-control" id="inputten" type="text" placeholder="Enter the year completion"  name="ccYearStd10" value={student.ccYearStd10} onChange={handleInputChange} required/>
                            </div>

                            <div class="col-md-6">
                                <label class="small mb-1" for="inputMarks">Marks Obtained *</label>
                                <input class="form-control" id="inputMarks" type="text" placeholder="Enter your Marks obtained in CGPA / %"  name="markStd10" value={student.markStd10} onChange={handleInputChange} required/>
                            </div>
                           
                            
                            </div>
                            <div class="row gx-3 mb-3">
                            
                            <div class="col-md-6">
                                <label class="small mb-1" for="inputtwo">Year Of Course Completion Std:12 *</label>
                                <input class="form-control" id="inputtwo" type="text" placeholder="Enter the year completion"  name="ccYearStd12" value={student.ccYearStd12} onChange={handleInputChange} required/>
                            </div>
                           
                            <div class="col-md-6">
                                <label class="small mb-1" for="inputMarks">Marks Obtained *</label>
                                <input class="form-control" id="inputMarks" type="text" placeholder="Enter your Marks obtained in CGPA / %"  name="markStd12" value={student.markStd12} onChange={handleInputChange} required/>
                            </div>
                            </div>
                            <div class="row gx-3 mb-3">
                            
                            <div class="col-md-6">
                                <label class="small mb-1" for="inputUg">Year Of Course Completion  UG </label>
                                <input class="form-control" id="inputUg" type="text" placeholder="Enter the year completion"  name="ccYearStdUG" value={student.ccYearStdUG} onChange={handleInputChange} />
                            </div>
                           
                            <div class="col-md-6">
                                <label class="small mb-1" for="inputMarks">Marks Obtained </label>
                                <input class="form-control" id="inputMarks" type="text" placeholder="Enter your Marks obtained in CGPA / %"  name="markStdUG" value={student.markStdUG} onChange={handleInputChange} />
                            </div>
                            </div>
                            <div class="row gx-3 mb-3">
                            
                            <div class="col-md-6">
                                <label class="small mb-1" for="inputPg">Year Of Course Completion  PG </label>
                                <input class="form-control" id="inputPg" type="text" placeholder="Enter the year completion"  name="ccYearStdPG" value={student.ccYearStdPG} onChange={handleInputChange} />
                            </div>
                           
                            <div class="col-md-6">
                                <label class="small mb-1" for="inputMarks">Marks Obtained </label>
                                <input class="form-control" id="inputMarks" type="text" placeholder="Enter your Marks obtained in CGPA / %"  name="markStdPG" value={student.markStdPG} onChange={handleInputChange} />
                            </div>
                            </div>
                            <div class="col-md-6">
                          <label class="small mb-1" for="inputEduQuali">Tenure of Training and Internship *</label>
                           <select class="form-control" id="inputEduQuali" name="tenure" value={student.tenure} onChange={handleInputChange} required>
                                <option selected>Choose</option>
                                <option value="3 Months">3 Months</option>
                                <option value="5 Months">5 Months</option>
                            </select>
                          </div>
                          <div class="col-md-6">
                          <label class="small mb-1" for="inputYear">Thematic Area *</label>
                           <select class="form-control" id="inputYear" name="thematicArea" value={student.thematicArea} onChange={handleInputChange} required>
                                <option selected>Choose</option>
                                <option value="Multi-Omics">Multi-Omics</option>
                                <option value="Pharmacogenomics">Pharmacogenomics</option>
                                <option value="Clinical Genomics">Clinical Genomics</option>
                                <option value="Agri Genomics">Agri Genomics</option>
                                <option value="Microbiomics">Microbiomics</option>        
                            </select>
                            </div>
                        </div>
                        
                        {/* <!-- Save changes button--> */}
                        <button class="btn btn-primary" type="button" onClick={handleSubmit}>Register</button>
                    </form>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default G_Cell
