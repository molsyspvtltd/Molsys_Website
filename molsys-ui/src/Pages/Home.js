import React, {Component, useState, useEffect } from 'react';
import '../style/Home.css'
import * as Icon from 'react-bootstrap-icons';

import Dna from "../assets/biotDna.png";
import Sequencingservice from "../assets/sequnceserive.jpg";
import Genomdata from "../assets/genomdata.jpg";
import ResearAndDevelop from "../assets/research&dev.jpg";
import EducationDevelopment from "../assets/education&emp.jpg";
import Molsys from "../assets/Removal-240.jpg";
import Img1 from "../assets/science_FILL0_wght400_GRAD0_opsz24.png";
import Img2 from "../assets/genetics.png";
import Img3 from "../assets/summarize_FILL0_wght400_GRAD0_opsz24.png";
import Img4 from "../assets/manage_history_FILL0_wght400_GRAD0_opsz24.png";
import Img5 from "../assets/reserach.png";
import Img6 from "../assets/analisys.png";
import ImageContainer from '../component/ImageContainer';
import logo from '../assets/logo.png' ;



import {Link} from 'react-router-dom'
import { ObserveOnOperator } from 'rxjs/internal/operators/observeOn';

class Home extends React.Component{
  render(){
      
  return(
      <div className="container-fluid fade-in">

              {/*Section1 - Molsys */}

              <section className='section-fluid'>
  <div className="container-fluid">
    <div className="row mt-5 text-center align-items-center">
      <div className="col-md-6 ml-5 pt-5 pl-5 mt-5 d-none d-sm-block">
        <div className='mb-4'>
          <img src={logo} className="img-fluid" alt="logo" style={{ height: '90px', width: '350px' }} />
        </div>
        <h1>FOSTERING SMART SCIENCE</h1>
        <hr className="ms-5 me-5 ps-5 pe-5 w-70" />
        <p className='mx-5 ml-5'>Providing Quality Analysis Services In The World Class Standard</p>
        <Link to="/market">
          <button type="button" className="btn btn-dark shadow mt-4 mb-4">Explore Our Science</button>
        </Link>
      </div>
      <div className="col-md-6 text-center d-none d-sm-block">
        <img
          src={Dna}
          className="img-fluid"
          alt="Responsive image"
          style={{ height: "650px" }}
        />
      </div>
      <div className="col-12 text-center d-sm-none position-relative mt-5">
      <div className='mb-4 mt-3'>
          <img src={logo} className="img-fluid" alt="logo" style={{ height: '90px', width: '350px' }} />
        </div>
          <div className="mobile-content">
            <h1>FOSTERING SMART SCIENCE</h1>
            <hr className="ms-5 me-5 ps-5 pe-5 w-70" />
            <p className="text-dark mt-4"><b>Providing Quality Analysis Services In The World Class Standard</b></p>
            <Link to="/market">
              <button type="button" className="btn btn-dark shadow mt-4 mb-4">Explore Our Science</button>
            </Link>
          </div>
      </div>
    </div>
  </div>
</section>




            {/*Section2 - Why Molsys */}

            <section className='section2 rounded shadow-lg' style={{ backgroundImage: `url(${Molsys})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="container">
            <div className="row mt-3 p-5">
             <div className="col-md-12 text-center">
            <h2>WHY MOLSYS?</h2>
                <div className='underline mx-auto'></div>
                </div>
             </div>
             <div className="row">
             <div className="col-md-6 text-center align-items-center ">
  
            </div>
            <div className="col-md-6 pb-5 mb-5 ">
            <div className="row ">
            <div className="col-md-6 mt-5 mb-4 text-center shadow ">
            <img src={Img1} alt="Image" className="img-fluid mt-2"/>
          <h6 className='mt-2'>Expert Team Of Scientists</h6>
        </div>
        <div className="col-md-6 mt-5 mb-4 text-center  shadow">
        <img src={Img2} alt="Image" className="img-fluid mt-2"/>
          <h6  className='mt-2'>Next Generation Sequencing Service</h6>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 mt-5 mb-4 text-center shadow">
        <img src={Img3} alt="Image" className="img-fluid mt-2"/>
          <h6  className='mt-2'>Comprehensive Reporting</h6>
        </div>
        <div className="col-md-6 mt-5 mb-4 text-center  shadow">
        <img src={Img4} alt="Image" className="img-fluid mt-2"/>
          <h6  className='mt-2'>Efficient Trunaround and Management</h6>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 mt-5 text-center shadow">
        <img src={Img5} alt="Image" className="img-fluid mt-2"/>
          <h6  className='mt-2'>Complete Reserach Solution</h6>
        </div>
        <div className="col-md-6 mt-5 text-center shadow">
        <img src={Img6} alt="Image" className="img-fluid mt-2"/>
          <h6  className='mt-2'>Customized BioInfomatics Analysis</h6>
        </div>
        
      </div>
      <div className="row">
        <div className="col-md-6 mt-5 text-center shadow">
        <Icon.CodeSquare alt="Image" style={{width: '20px'}} className="img-fluid mt-2 mb-1"/>
          <h6  className='mt-2'>Custom Software Solutions</h6>
        </div>
        <div className="col-md-6 mt-5 text-center shadow">
        <Icon.DatabaseFill alt="Image" style={{width: '20px'}} className="img-fluid mt-2 mb-1"/>
          <h6  className='mt-2'>Custom database Solutions</h6>
        </div>
        
      </div>
      <div className="row">
        <div className="col-md-6 mt-5 text-center shadow">
        <Icon.KanbanFill alt="Image" style={{width: '20px'}} className="img-fluid mt-2 mb-1"/>
          <h6  className='mt-2'>Project Consulting Services</h6>
        </div>
        <div className="col-md-6 mt-5 text-center shadow">
        <Icon.Diagram3Fill alt="Image" style={{width: '20px'}} className="img-fluid mt-2 mb-1"/>
          <h6  className='mt-2'>Capacity Consulting Services</h6>
        </div>
      </div>

    </div>
  </div>
</div>
            </section>




  {/* Section3 - Categories */}
  <section className='section2'>
  <div className="container-fluid mt-5 mb-5 pt-4 text-center">
    <h2>CATEGORIES</h2>
    <div className='underline mx-auto'></div>

    {/* Responsive layout for mobile view */}
    <div className="d-md-none"> {/* This class hides the content on medium and larger screens */}
      <div className="row mt-4">
        <div className="col">
          <Link to="/market">
            <button type="button" className="btn btn-dark shadow mt-2">DATA GENERATION SERVICES</button>
          </Link>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col">
          <Link to="/market">
            <button type="button" className="btn btn-dark shadow mt-2">GENOME DATA ANALYTICS</button>
          </Link>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col">
          <Link to="/market">
            <button type="button" className="btn btn-dark shadow mt-2">CONTRACT R&D</button>
          </Link>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col">
          <Link to="/g-cell">
            <button type="button" className="btn btn-dark shadow mt-2">EDUCATION AND EMPOWERMENT</button>
          </Link>
        </div>
      </div>
    </div>


     {/* Original layout for larger screens */}
     <div className="d-none d-md-block"> {/* This class hides the content on small screens */}
     <div className="row row-cols-2 mt-5 me-5 ms-5">
            <div className="col  p-5 ">
                <h3>DATA GENERATION SERVICES</h3>
                <p>Molsys Private Limited (Molsys Scientific) offers services for High-Throughput technologies including genomics, transcriptomics, epigenomics, genotyping and metagenomics with large scale primary and secondary analysis.</p>
                <Link to="/market">
                    <button type="button" class="btn btn-dark shadow mt-4 ">Read More..</button></Link>
            </div>
            <div className="col  p-5"><img className="rounded shadow" src={Sequencingservice} height={250} width={500}/></div>
            <div className="col  p-5"><img className="rounded shadow" src={Genomdata} height={250} width={500}/></div>
            <div className="col  p-5">
            <h3>GENOME DATA ANALYTICS</h3>
                <p>Dedicated to assisting clinicians and scientists to unlock the mysteries  hidden in the genome</p>
                <Link to="/market">
                    <button type="button" class="btn btn-dark shadow mt-4 ">Read More..</button></Link>
            </div>
            <div className="col  p-5">
            <h3>CONTRACT R&D</h3>
                <p>Our Research Scientists are involved in cutting edge research to develop novel, highly specific and efficacious anti-cancer molecules.</p>
                <Link to="/market">
                    <button type="button" className="btn btn-dark shadow mt-4 ">Read More..</button></Link>
            </div>
            <div className="col  p-5">
            <img className="rounded shadow" src={ResearAndDevelop} height={250} width={500}/>
            </div>
            <div className="col  p-5">
            <img className="rounded shadow" src={EducationDevelopment} height={250} width={500}/>
            </div>
            <div className="col  p-5">
            <h3>EDUCATION AND EMPOWERMENT</h3>
                <p>The most critical information is obtained from the DNA sequence and thus generating unprecedented amounts of data with regards to genetic information.</p>
                <Link to="/g-cell">
                    <button type="button" className="btn btn-dark shadow mt-4 ">Read More..</button></Link>
            </div>
            </div>
            </div>
            </div>
            </section>


            {/* section 3 publications */}

            <section class='section2 me-3 ms-3 '>
    <div class="container mt-5 mb-5 p-3 text-center shadow bg-light rounded">
        <h2 class="mb-4">PUBLICATIONS</h2>
        <div class='underline mx-auto'></div>
        <div class="row row-cols-1 mt-3 me-3 ms-3 text-start">
              <div class="col publication-item">
                <p class="col publication-item">
                    <a class="link-dark link-offset-2 link-underline link-underline-opacity-0" href="https://pubmed.ncbi.nlm.nih.gov/38663266/">Biocompatible silver nanoparticles as nanopriming mediators for improved rice germination and root growth: A transcriptomic perspective (Acknowledged) (2024)</a>
                </p>
            </div>
            <div class="col publication-item">
                <p class="col publication-item">
                    <a class="link-dark link-offset-2 link-underline link-underline-opacity-0" href="https://pubmed.ncbi.nlm.nih.gov/38700400/">A multicentre, double-blind, placebo-controlled randomized trial of Mycobacterium w in critically ill patients with COVID-19 (ARMY-2) (Co-Authored) (2024)</a>
                </p>
            </div>
            <div class="col publication-item">
                <p class="col publication-item">
                    <a class="link-dark link-offset-2 link-underline link-underline-opacity-0" href="https://pubmed.ncbi.nlm.nih.gov/35834016/">Renuka Ravinath et al. Targeted metagenome sequencing reveals the abundance of Planctomycetes and Bacteroidetes in the rhizosphere of pomegranate. Archives of Microbiology (204): 8(2022)</a>
                </p>
            </div>
            <div class="col publication-item">
                <p>
                    <a class="link-dark link-offset-2 link-underline link-underline-opacity-0" href="https://pubmed.ncbi.nlm.nih.gov/35646087/">Talambedu Usha et al, Hybrid Assembly and Annotation of the Genome of the Indian Punica granatum, a Superfood. Frontiers in Genetics(13): 786825 (2022)</a>
                </p>
            </div>
            <div class="col publication-item">
                <p>
                    <a class="link-dark link-offset-2 link-underline link-underline-opacity-0" href="https://pubmed.ncbi.nlm.nih.gov/33968588/">Prasannakumar MK et al., Comparative metagenomic analysis of rice soil samples revealed the diverse microbial population and biocontrol organisms against plant pathogenic fungus Magnaporthe oryzae. 3 Biotech (11): 245 (2021).</a>
                </p>
            </div>
            <div class="col publication-item">
                <p>
                    <a class="link-dark link-offset-2 link-underline link-underline-opacity-0" href="https://pubmed.ncbi.nlm.nih.gov/33049679/">Das AJ et al.,Microbiomics and cloud-based analytics advance sustainable soil management. Frontiers in Bioscience (Landmark Edition) 1(26):478-495 (2021).</a>
                </p>
            </div>
            <div class="col publication-item">
                <p>
                    <a class="link-dark link-offset-2 link-underline link-underline-opacity-0" href="https://pubmed.ncbi.nlm.nih.gov/33170083/">Muliyar RK et al., Assembly and Annotation of the Nuclear and Organellar Genomes of a Dwarf Coconut (Chowghat Green Dwarf) Possessing Enhanced Disease Resistance. OMICS: A Journal of Integrative Biology 24(12) (2020).</a>
                </p>
            </div>
        </div>
    </div>
</section>

            
             
            {/* section4 - Trusted Clients */}

            
            <section className='section2 me-5 ms-5 mt-5 pt-3'>
            <div className="container-fluid mt-5 mb-5 text-center">
            <h2>TRUSTED CLIENTELLE</h2>
            <div className='underline mx-auto'></div>
            <div class="container mt-5">
            <ImageContainer />
            
            </div>
            </div>
            </section>

        

      </div>
    )
  }
}
export default Home


