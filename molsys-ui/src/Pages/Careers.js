import React from 'react';
import career from '../assets/career_blur.jpg';
import '../style/Careers.css';
import * as Icon from "react-bootstrap-icons";


function Careers() {
  return (

    <section id="team" class="team_member-1 section-padding fade-in">

<section class="section home-5-bg-1 fade-in" id="home" style={{backgroundImage: `url(${career})`, backgroundSize: "cover"} }>
    <div id="particles-js"></div>
    <div class="bg-overlay"></div>
    <div class="home-center">
        <div class="home-desc-center">
            <div class="container">
                <div class="justify-content-center row">
                    <div class="col-lg-7">
                        <div class="mt-40 text-center home-5-content">
                            <div class="home-icon mb-4"><i class="mdi mdi-pinwheel mdi-spin text-white h1"></i></div>
                            <h1 class="text-white font-weight-normal home-5-title mb-0">MOLSYS CAREERS</h1>
                            <p class="text-white-70 mt-4 f-15 mb-0">Explore Remote-Friendly, Flexible Oppertunities and Join our Mission to introduce Cutting Edge Omics and Data Analytics Solutions..</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
            <div class="container mt-5">
                <p class="h6">We do not have any vacant positions at present. <br></br><br></br>
                Kindly note, we no longer accept any project positions or Internship applications for Masters or Graduate Programs. 
                However, you can still write to us with your interest. We will notify you of open positions as and when a position is available.<br></br><br></br>
                <b>Send us your CV to hr@molsys.in</b></p></div>

    </section>

  )
}

export default Careers;