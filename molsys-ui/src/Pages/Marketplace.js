import React from 'react'
import {ServiceList} from '../helpers/ServiceList';
import ServiceItems from '../component/ServiceItems';

import "../style/Service.css"


function Marketplacesub() {


  return (
    <div className='marketplace mt-5 pt-5'>
      <div class="box">
  <div class="container mt-5">				
        <div class="section-title text-center">
        <h1 class="display-5 mt-5"><strong>Whole Genome Sequencing (<em>de novo</em>)</strong></h1></div>
        <p><em>de novo</em> Whole Genome Sequencing is a groundbreaking Genetic Analysis Technique that involves mapping an organism's entire DNA Sequence without relying on a reference Genome. It's like creating a brand-new jigsaw puzzle from scratch, 
            assembling all the pieces to reveal the Complete Genetic blueprint of an Organism. This method is indispensable for studying novel Species, identifying rare Genetic variations, and unraveling complex Genomes where reference data is 
            unavailable.<br></br><br></br> 
            <em>de novo</em> Sequencing is a vital tool in genomics, supporting diverse applications in Evolutionary Biology, Disease Research, and understanding the fundamental Genetic code of life. It opens new doors to exploring uncharted
             Genetic Territory and Fostering breakthrough Discoveries.</p>

             <div class="section-title mt-5">
             <h1 class="display-5 mt-5">Services</h1></div>
    
        <div className='serviceList'>
            {ServiceList.map((serviceItem, key) => {
            return (
            <ServiceItems 
            key={key}
            image={serviceItem.image} 
            name={serviceItem.name} 
            description={serviceItem.description} 
            paragraph={serviceItem.paragraph}
            price={serviceItem.price}/>);
        })}</div>
      
    </div>
    </div>
    </div>
  );
}

export default Marketplacesub;
