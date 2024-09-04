
import React, { useState, useRef } from 'react';
import pms from '../assets/pms.jpg';
import '../style/Pms.css';
import { v4 as uuidv4 } from 'uuid';

function Pms() {
  const formRef = useRef(null);

  const [patient, setPatient] = useState({
    firstName: '',
    lastName: '',
    gender: '',
    age: '',
    email: '',
    phone: '',
    clinicId: '',
    patientAddress: '',
    shipAddress: '',
    tubeId: '',
    doctor: '',
    test: '',
    consultantDetails: '',
    dob: ''
  });

  const [page, setPage] = useState(1);
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    // Add your login logic here. If successful, set isLoggedIn to true
    setIsLoggedIn(true);
    setShowLoginForm(false);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPatient({ ...patient, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://molsys.in/api/patients/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(patient),
      });

      const responseBody = await response.text();

      if (response.ok) {
        try {
          const responseData = JSON.parse(responseBody);
          alert('Registration successful! Patient ID: ' + responseData.patientId);
        } catch (jsonError) {
          alert('Registration successful! An email has been sent to your mail with the Patient ID');
        }
      } else {
        console.error('Registration failed');
        alert('Registration failed. Please try again.');
      }
    } catch (error) {
      console.error('Error during registration:', error);
      alert('Error during registration. Please try again.');
    }

    setPatient({
      firstName: '',
      lastName: '',
      gender: '',
      age: '',
      email: '',
      phone: '',
      clinicId: '',
      patientAddress: '',
      shipAddress: '',
      tubeId: '',
      doctor: '',
      test: '',
      consultantDetails: '',
      dob: ''
    });
  };

  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };

  return (
    <div>
      {!isLoggedIn && !showLoginForm && (
        <div className="login-page">
          <section
            className="section home-5-bg fade-in"
            id="home"
            style={{
              backgroundImage: `url(${pms})`,
              backgroundSize: 'cover',
            }}
          >
            <div id="particles-js"></div>
            <div className="bg-overlay"></div>
            <div className="home-center">
              <div className="home-desc-center">
                <div className="container">
                  <div className="justify-content-center row">
                    <div className="col-lg-7">
                      <div className="mt-40 text-center home-5-content">
                        <div className="home-icon mb-4">
                          <i className="mdi mdi-pinwheel mdi-spin text-white h1"></i>
                        </div>
                        <h1 className="text-white font-weight-normal home-5-title mb-0">
                          Molsys Patient Management System (PMS)
                        </h1>
                        <p className="text-white-70 mt-4 f-15 mb-0">
                          Our Efficient patient management system streamlines healthcare processes, ensuring seamless appointments, accurate records, and improved overall medical care delivery.
                        </p>
                        <div className="mt-5">
                          <input
                            className="btn btn-success"
                            type="button"
                            value="Get started"
                            onClick={() => setShowLoginForm(true)}
                            style={{ padding: '15px 30px', fontSize: '18px' }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}

      {showLoginForm && (
      <div className="login-page "style={{ backgroundImage: `url(${pms})`, backgroundSize: 'cover' }}>
        <div className="container-xl px-4 mt-4 section-container-1">
          <div className="card mb-4 lead">
            <div className="card-header">Login</div>
            <div className="card-body">
              <form onSubmit={handleLogin}>
                <div className="mb-3">
                  <label className="small mb-1" htmlFor="loginEmail">Email address *</label>
                  <input
                    className="form-control"
                    id="loginEmail"
                    type="email"
                    placeholder="Enter your email address"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="small mb-1" htmlFor="loginPassword">Password *</label>
                  <input
                    className="form-control"
                    id="loginPassword"
                    type="password"
                    placeholder="Enter your password"
                    required
                  />
                </div>
                <button className="btn btn-primary" type="submit">Login</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      )}

      {isLoggedIn && (
        <>
      <div className="container-xl px-4 mt-4 section-container" ref={formRef}>
        <div className="card mb-4 lead">
          <div className="card-header">
            {page === 1 && "Patient Details"}
            {page === 2 && "SALIVA SAMPLE COLLECTION GUIDE"}
            {page === 3 && "INFORMED CONSENT"}
            {page === 4 && "CRITERIA FOR THE REJECTION OF CLINICAL SPECIMENS"}
          </div>
          <div className="card-body">
            {page === 1 && (
              <form>
                <div className="row gx-3 mb-3">
                  <div className="col-md-6">
                    <label className="small mb-1" htmlFor="inputFirstName">
                      Patient First name *
                    </label>
                    <input
                      className="form-control"
                      id="inputFirstName"
                      type="text"
                      placeholder="Enter your first name"
                      name="firstName"
                      value={patient.firstName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="small mb-1" htmlFor="inputLastName">
                      Patient Last name *
                    </label>
                    <input
                      className="form-control"
                      id="inputLastName"
                      type="text"
                      placeholder="Enter your last name"
                      name="lastName"
                      value={patient.lastName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="row gx-3 mb-3">
                  <div className="col-md-6">
                    <label className="small mb-1" htmlFor="inputAge">
                      Age *
                    </label>
                    <input
                      className="form-control"
                      id="inputAge"
                      type="text"
                      placeholder="Enter your age"
                      name="age"
                      value={patient.age}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="small mb-1" htmlFor="inputGender">
                      Gender *
                    </label>
                    <select
                      className="form-control"
                      id="inputGender"
                      name="gender"
                      value={patient.gender}
                      onChange={handleChange}
                      required
                    >
                      <option disabled selected value="">Select Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="mb-3">
                  <label className="small mb-1" htmlFor="inputEmailAddress">
                    Email address *
                  </label>
                  <input
                    className="form-control"
                    id="inputEmailAddress"
                    type="email"
                    placeholder="Enter your email address"
                    name="email"
                    value={patient.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="small mb-1" htmlFor="inputPatientAddress">
                    Patient Address *
                  </label>
                  <input
                    className="form-control"
                    id="inputPatientAddress"
                    type="text"
                    placeholder="Enter the patient address"
                    name="patientAddress"
                    value={patient.patientAddress}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="row gx-3 mb-3">
                  <div className="col-md-6">
                    <label className="small mb-1" htmlFor="inputPhone">
                      Phone number *
                    </label>
                    <input
                      className="form-control"
                      id="inputPhone"
                      type="tel"
                      placeholder="Enter your phone number"
                      name="phone"
                      value={patient.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="small mb-1" htmlFor="inputBirthday">
                      Date of Birth
                    </label>
                    <input
                      className="form-control"
                      id="inputBirthday"
                      type="date"
                      name="dob"
                      placeholder="Enter your birthday"
                      value={patient.dob}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-md-12">
                    <label className="small mb-1" htmlFor="inputShippingAddress">
                      Shipping Address *
                    </label>
                    <input
                      className="form-control"
                      id="inputShippingAddress"
                      type="address"
                      placeholder="Enter the shipping address"
                      name="shipAddress"
                      value={patient.shipAddress}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="row gx-3 mb-3">
                  <div className="col-md-6">
                    <label className="small mb-1" htmlFor="inputtubeid">
                      Tube ID
                    </label>
                    <input
                      className="form-control"
                      id="inputtubeid"
                      type="text"
                      placeholder="Enter your tube ID"
                      name="tubeId"
                      value={patient.tubeId}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="col-md-6 mb-3">
                  <label className="small mb-1" htmlFor="inputTest">
                    Test *
                  </label>
                  <select
                    className="form-control"
                    id="inputTest"
                    name="test"
                    value={patient.test}
                    onChange={handleChange}
                    required
                  >
                    <option value="Select" selected disabled>Select</option>
                    <option value="GSA">GSA</option>
                    <option value="EXOME">EXOME</option>
                    <option value="WGS-10X">Human WGS-10X</option>
                    <option value="WGS-30X">Human WGS-30X</option>
                    <option value="Gut-bacteria">Gut-Bacteria</option>
                    <option value="Microbiome">Microbiome Profile</option>
                  </select>
                </div>

                <div className="col-md-6 mb-3">
                  <label className="small mb-1" htmlFor="inputclinicid">
                  Clinic ID
                  </label>
                  <select
                    className="form-control"
                    id="inputclinicid"
                    name="clinicId"
                    value={patient.clinicId}
                    onChange={handleChange}
                    required
                  >
                    <option value="Select" selected disabled>Select</option>
                    <option value="YENSPECHOS">YENSPECHOS</option>
                  </select>
                </div>

                <div className="col-md-6 mb-3">
                  <label className="small mb-1" htmlFor="inputDoctor">
                  Doctor/Hospital/Clinic Name
                  </label>
                  <select
                    className="form-control"
                    id="inputDoctor"
                    name="consultantDetails"
                    value={patient.consultantDetails}
                    onChange={handleChange}
                    required
                  >
                    <option value="Select" selected disabled>Select</option>
                    <option value="Yenepoya Multi-Speciality Hospital">Yenepoya Multi-Speciality Hospital</option>
                  </select>
                </div>
                  
                </div>

                <div className="d-flex justify-content-end">
                  <button
                    className="btn btn-primary"
                    type="button"
                    onClick={() => setPage(2)}
                  >
                    Next
                  </button>
                </div>
              </form>
            )}

            {page === 2 && (
              <form>
                {/* <h2 className="mb-4">SALIVA SAMPLE COLLECTION GUIDE</h2> */}
                <div className="mb-3">
                {/* <div className="card-header mb-4">SALIVA SAMPLE COLLECTION GUIDE</div> */}
              <p class="m-0 mb-4" style={{ textAlign: 'justify' }}><b>(a)</b> Do not drink alcohol, smoke, chew gum, brush your teeth, or use mouthwash for at least 2 hours prior to providing your sample.<br></br><br></br>
                  <b>(b)</b> Rinse your mouth thoroughly with water thrice, just before providing the sample.<br></br><br></br>
                  <b>(c)</b> Rub the cheek by palm from the outside and pool the saliva in the mouth.<br></br><br></br>
                  <b>(d)</b> Collect the recommended volume of saliva 2 ml, in the container (upto a level, slightly below the black arrow mark present on the sticker). Open the small vial/tube provided and empty the liquid contents in this container
                     containing saliva. Swirl gently 5-10 limes to mix the saliva and the liquid.
                     You may discard the small tube or place it with lid closed back in the saliva box and we will discard it for you.<br></br><br></br>
                  <b>(e)</b> Cap securely and place the container in the plastic specimen bag, and then place the bag directly into the box.<br></br><br></br>
                  <b>(f)</b> Your saliva sample is stable at a wide range of temperatures once it is mixed with the DNA stabilization buffer liquid, which could be blue in colour.
                     HJ We recommend that you ship your collected sample and completely filled TRF form to the laboratory at you earliest convenience. Till then the box can
                     be kept at room temperature. store in dark place.</p>

                     </div>


                <div className="mb-3 form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="termsCheckbox"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                  />
                  <label className="form-check-label" htmlFor="termsCheckbox">
                    I agree to the terms and conditions *
                  </label>
                </div>

                <div className="d-flex justify-content-between">
                  <button
                    className="btn btn-secondary"
                    type="button"
                    onClick={() => setPage(1)}
                  >
                    Previous
                  </button>
                  <button
                    className="btn btn-primary"
                    type="button"
                    onClick={() => setPage(3)}
                    disabled={!isChecked}
                  >
                    Next
                  </button>
                </div>
              </form>
            )}


            {page === 3 && (
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  {/* <h2>INFORMED CONSENT</h2> */}
                {/* <div className="card-header mb-4">INFORMED CONSENT</div> */}
              <p class="m-0" style={{ textAlign: 'justify' }}><b>(a)</b> In these terms of contract, "sample" will mean the specimen accepted by lab for the purpose of genetic testing. "Requestor" refers to the
                  physician or Laboratory requesting the test, as specified in the Test Request Form.<br></br><br></br>
                  <b>(b)</b> The purpose of the DNA analysis is to assess the probability of having an inherited genetic predisposition for the test prescribed. The non-
                      detection of specific mutations does not rule out the possibility of increased risk for the genetic predisposition to a particular health condition.<br></br><br></br>
                  <b>(c)</b> The standard fee will cover: i) The genetic test ii) Analysis of the test result iii) The test report counselling<br></br><br></br>
                  <b>(d)</b> Testing will only be carried out when: i) The submission form is received, filled out as requested ii) All the samples required are received in good condition<br></br><br></br>
                  <b>(e)</b> The "Requestor" is responsible for getting informed consent from the Individual whose sample is analysed.<br></br><br></br>
                  <b>(f)</b> Once registration forms and samples are received, these will be deemed to constitute anorder to carry out testing.<br></br><br></br>
                  <b>(g)</b> Laboratory reserves the right to request more samples, especially, but not exclusively, in cases where the sample taken does not comply with the volume
                      specified in the instructions issued, or where the integrity of the sample is in doubt.<br></br><br></br> 
                  <b>(h)</b> Laboratory will take all reasonable steps to produce a report within the stipulated time, but cannot accept responsibility for any delays especially, due to
                      reasons, beyond control of Laboratory.<br></br><br></br>
                  <b>(i)</b> Laboratory will send a copy of the test report to the Requestor. In all other respects lab will keep the results confidential, and will not submit them to any
                      other party. Laboratory will carry out the test only on the understanding that the Requestorwill make the report available to all persons who consented for a DNA sample to be analysed.<br></br><br></br>
                  <b>(j)</b> Laboratory is not responsible for the authenticity of the samples provided for testing.<br></br><br></br>
                  <b>(k)</b> Laboratory is not responsible for any psychological, legal or practical consequences of the test.<br></br><br></br>
                  <b>(l)</b> Laboratory assures that the sample will only be used for the test indicated by the requestor, who can ask to destroy the sample at any time.</p>
                  </div>

                <div className="mb-3 form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="consentCheckbox"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                  />
                  <label className="form-check-label" htmlFor="consentCheckbox">
                    I provide my informed consent *
                  </label>
                </div>

                <div className="d-flex justify-content-between">
                  <button
                    className="btn btn-secondary"
                    type="button"
                    onClick={() => setPage(2)}
                  >
                    Previous
                  </button>
                  <button
                    className="btn btn-primary"
                    type="button"
                    onClick={() => setPage(4)}
                    disabled={!isChecked}
                  >
                    Next
                  </button>
                </div>
              </form>
            )}

            {page === 4 && (
              <form>
                <div className="mb-3">
                {/* <div className="card-header mb-4">CRITERIA FOR THE REJECTION OF CLINICAL SPECIMENS</div> */}
              <p class="m-0 mb-4" style={{ textAlign: 'justify' }}>The following is a general listing of common situations in which a specimen may be rejected for processing.<br></br><br></br>
                  <b>I. REJECTION IN PREANALYTICAL STAGE</b><br></br><br></br>
                  <b>A. Improperly labeled specimens••</b><br></br>
                  1. Specimens not labeled
                  2. Specimens labeled with the incorrect patient identification.
                  3.Specimens, that do not match the patient information on the test requisition form.**These specimens may be accepted after responsible individual
                    Referring Center doctor/Dietician Patient communicates in written about the correct identification of the specimen.
                  4. Mismatch barcodes on TRF as well as specimen.<br></br><br></br>
                  <b>B. Improper Collection</b><br></br>
                  1. Specimens collected in non-recommended collection kit.
                  2. Quantity of specimen insufficient to perform testing.
                  3. Specimens which are obviously or subsequently prove to be contaminated.
                  4. Uncapped or unsterile collection container.<br></br><br></br>
                  <b>C. Non recommended specimen</b><br></br>
                  1. Specimen that is not recommended for a particular test will be rejected.<br></br><br></br>
                  <b>D. Specimens inappropriately transported to the laboratory</b><br></br>
                  1. Specimens not in compliance with Universal Precautions, (e.g. Not Bagged, not packed in a collection kit, not sealed appropriately)
                  2. Specimens leaking or grossly contaminated on the exterior portion of container.
                  3. Damaged sample vials, damaged container, mixed samples will be rejected.<br></br><br></br>
                  <b>E. Specimens received without appropriate paperwork</b><br></br>
                  1. Specimen received without Test requisition form and essential information like Patient name, Age, gender, test requested, sample type and container.
                    NOTE: Notification will be made to the responsible and the specimens will be held till the required information is made available.<br></br><br></br>
                  <b>II. REJECTION IN ANALYTICAL STAGE</b><br></br><br></br>
                  If the DNA obtained from sample is (i) Having insufficient concentration to proceed for genotyping or (ii) Contains inhibitory substances that
                  subsequently affect data quality, in such cases sample may get rejected/or put on processing hold in analytical stage until fresh additional sample is received.<br></br>
                    NOTE: Notification will be made to the responsible requester and the specimens will be held till the fresh sample is received.</p>

                </div>

                <div className="mb-3 form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="termsCheckbox"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                  />
                  <label className="form-check-label" style={{ color: "red" }} htmlFor="termsCheckbox">
                  <b>I, the undersigned, hereby consent to my sample for genetic testing to laboratory accept the terms as outlined above. *</b>
                  </label>
                </div>

                <div className="d-flex justify-content-between">
                  <button
                    className="btn btn-secondary"
                    type="button"
                    onClick={() => setPage(3)}
                  >
                    Previous
                  </button>
                  <button
                    className="btn btn-primary large-button"
                    type="submit"
                    disabled={!isChecked}
                  >
                    Submit
                  </button>
                  <button className="btn btn-danger" onClick={handleLogout}>
                    Logout
                  </button>
                </div>
              </form>
            )}


          </div>
        </div>
      </div>
        </>
      )}
    </div>
  );
}

export default Pms;
