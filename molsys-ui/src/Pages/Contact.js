import React from 'react';
import ConatctImg from '../assets/ReadyWhenYouAre.png';
import MailGif from '../assets/mailbox.gif';
import World from '../assets/world.jpg';
import * as Icon from "react-bootstrap-icons";


function Contact() {

  return (
  
    <section id="team" class="team_member section-padding fade-in">
    <div class="box">
    <figure>
      <img src={ConatctImg} class="img-fluid mt-5 w-100" alt="profile cover"/>
    </figure>
  <div className="row text-center mt-5">
    <div className='col-12 col-md-2 mx-3 mb-3'>
      <img src={MailGif} height={100} alt="Mail Icon" />
    </div>

    <div className="col-12 col-md-3 mb-3">
      <div className="p-3 btn shadow-lg">
        <h5>&#10148; General Enquiries</h5>
        <a href="mailto:info@molsys.in" className="link-dark link-offset-2 link-underline link-underline-opacity-0">info@molsys.in</a>
      </div>
    </div>
   
    <div className="col-12 col-md-3 mb-3">
      <div className="p-3 btn shadow">
        <h5>&#10148; Admissions</h5>
        <a href="mailto:admissions@molsys.in" className="link-dark link-offset-2 link-underline link-underline-opacity-0">admissions@molsys.in</a>
      </div>
    </div>

    <div className="col-12 col-md-3 mb-3">
      <div className="p-3 btn shadow">
        <h5>&#10148; Services</h5>
        <a href="mailto:solutions@molsys.in" className="link-dark link-offset-2 link-underline link-underline-opacity-0">solutions@molsys.in</a>
      </div>
    </div>
  </div>

    <div class="container mt-5">
      <div class="row">
          
          <div class="col-md-6 ">
              
              <div class="row mt-3">
                  <div class="col m-5 p-2" >
                      <a href="https://maps.google.com/?q=Your+Address+Here" target="_blank" class="btn btn shadow">
                          <div class="card-body">
                              <h5 >Banglore</h5>
                              <h6>Molsys Private Limited - Registered Office</h6>
                              <p class="card-text"><small>1st floor, #524, 23rd cross, 13th main , Judicial Layout, Yelahanka, Bangalore, Karnataka 560 065 INDIA <br/>Tel: +91 8884229559,  +91 9620279341</small></p>
                          </div>
                      </a>
                  </div>
              </div>
              
              <div class="row">
                  <div class="col m-5 p-2">
                      <a href="https://maps.google.com/?q=Another+Address+Here" target="_blank" class="btn btn shadow">
                          <div class="card-body">
                          <h5 >Mangaluru</h5>
                              <h6>Molsys Private Limited - R&D Unit </h6>
                              <p class="card-text"><small> Yenepoya Technology Incubator ,University Road, Deralakatte, Ullal, Karnataka 575022 <br/>Tel: +91 8884229559</small></p>
                          </div>
                      </a>
                  </div>
              </div>
          </div>
          
          <div class="col-md-6 mt-5  ">
              
          <img src={World} className="img-fluid shadow rounded mt-5" />
          </div>
      </div>
  </div>

  </div>

</section>
  )
}

export default Contact;









