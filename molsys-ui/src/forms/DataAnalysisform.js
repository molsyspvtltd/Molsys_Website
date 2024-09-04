import React from 'react';
import '../style/Form.css';

function DataAnalysisform() {
  return (
    <div className='mt-3 pt-5'>
      <div class="box">
  <div class="container mt-5">				
        <div class="section-title text-center">
        <h1 class="display-5 mt-5"><strong>Data Analysis Requisition Form</strong></h1></div>
            <p>This Form is Required to collect the information regarding the Experimental 
                plan and Data Analysis. We Request you to provide the details and answer the questions mentioned below.</p>
             <div class="section-title">
             <h1 class="display-5 mt-5">Form</h1></div>

             <div class="col-4 mb-5">
              <div class="form-outline">
                <input type="email" id="form6Example5" class="form-control" />
                <h6 class="mt-1">Email-ID</h6>
              </div>
             </div>

             <div>
              <p class="text-muted mb-1">Please Mention the Project ID assigned by Molsys Scientific, In case your data has been generated elsewhere, kindly contact Molsys team for ID, Kindly mention all samples Details in the Ongoiong Projects.</p>
              <input type="text" id="inputHelpBlock" class="form-control" aria-describedby="helpBlock"/>
              <h6 class="mt-1">Project ID with Sample Details</h6>
             </div>

            <div>
              <p class=" text-muted mt-5 mb-1">Please provide a concept note of the experimental design. Please make sure to include information
              regarding the source of the sample, subjected conditions and expected outcomes. We request you to also
              send word files and spreadsheet if possible via e-mail.<br></br><br></br>
              
              There is only one sample for RNA-sequencing so I am not filling in the grouping form. I will need basic dat
              analysis for both insect and bacterial transcripts. The data should have information on its taxonomic
              classification, functional annotation, NCBI accession number, EC number if applicable.
              </p>
              <input type="text" id="inputHelpBlock" class="form-control" aria-describedby="helpBlock"/>
              <h6 class="mt-1 mb-5">Experimental Designs</h6>
            </div>

            <div>
              {/* <p class=" text-muted mt-5 mb-1">Please Mention the Project ID assigned by Molsys Scientific, In case your data has been generated elsewhere, kindly contact Molsys team for ID, Kindly mention all samples Details in the Ongoiong Projects.</p> */}
              <input type="text" id="inputHelpBlock" class="form-control" aria-describedby="helpBlock"/>
              <h6 class="mt-1 mb-5">Data Requirement in Million Reads or GB per Sample</h6>
            </div>

          <div class="row">
            <div class="col-4">
              <div class="form-outline">
               <select name="form-outline" class="form-control">
                 <option selected>Select</option>
                 <option value="Yes">Yes</option>
                 <option value="No">No</option>
                 <option value="Maybe">Maybe</option>
                 <option value="Data Generation at Molsys">Data Generation at Molsys</option>
                </select> 
               <h6 class="mt-1 mb-5">Do you have a QC Report?</h6>
              </div>
            </div>

            <div class="col-4">
              <input class="form-control" type="file" id="formFile"/>
              <h6 class="mt-1">Please Upload QC Report if Available</h6>
            </div>

            <div class="col-4">
              <input class="form-control" type="file" id="formFile"/>
              <h6 class="mt-1">Please mention Info. on Previous Studies and Findings if Available</h6>
            </div>
          </div>   

          <div>
              <p class=" text-muted mb-1">Please Mention links for Literature if Available related to your Experimental Study.</p>
              <input type="text" id="inputHelpBlock" class="form-control" aria-describedby="helpBlock"/>
              <h6 class="mt-1 mb-5">Available Information</h6>
          </div>
            

          <div>
              <p class=" text-muted mb-1">Please Mention if there is any specific requirement regarding Software Tools usage.</p>
              <input type="text" id="inputHelpBlock" class="form-control" aria-describedby="helpBlock"/>
              <h6 class="mt-1 mb-5">Overview of the Analysis</h6>
            </div>

          <div class="row">
            <div class="col-6">
              <div class="form-outline">
               <select name="form-outline" class="form-control">
                 <option selected>Select</option>
                 <option value="Sanger Sequencing">Sanger Sequencing</option>
                 <option value="Whole Genome Sequencing">Whole Genome Sequencing</option>
                 <option value="Microbiome Sequencing (16S/18S/ITS)">Microbiome Sequencing (16S/18S/ITS)</option>
                 <option value="Whole Genome Metagenome Sequencing">Whole Genome Metagenome Sequencing</option>
                 <option value="Whole Exome Sequencing">Whole Exome Sequencing</option>
                 <option value="Transcriptome Sequencing">Transcriptome Sequencing</option>
                 <option value="Small RNA Sequencing">Small RNA Sequencing</option>
                 <option value="Whole Genome Bisulfite Sequencing">Whole Genome Bisulfite Sequencing</option>
                 <option value="Human Genome Sequencing">Human Genome Sequencing</option>
                 <option value="ChIP-Sequencing">ChIP-Sequencing</option>
                 <option value="ATAC-Sequencing">ATAC-Sequencing</option>
                 <option value="Single Cell Sequencing - 10X Chromium">Single Cell Sequencing - 10X Chromium</option>
                 <option value="Long read sequencing">Long read sequencing</option>
                 <option value="Hybrid Sequencing">Hybrid Sequencing</option>
                 <option value="Hi-C Sequencing">Hi-C Sequencing</option>
                 <option value="Long read sequencing">Long read sequencing</option>
                 <option value="Genotyping by Sequencing (GBS)">Genotyping by Sequencing (GBS)</option>
                </select> 
               <h6 class="mt-1 mb-5">Experimental Plan</h6>
              </div>
            </div>

            <div class="col-6">
              <div class="form-outline">
               <select name="form-outline" class="form-control">
                 <option selected>Select</option>
                 <option value="Illumina">Illumina</option>
                 <option value="PacBio">PacBio</option>
                 <option value="Oxford Nanopore">Oxford Nanopore</option>
                 <option value="lonTorrent">lonTorrent</option>
                 <option value="Chromium Controller - 10X Genomics">Chromium Controller - 10X Genomics</option>
                </select> 
               <h6 class="mt-1 mb-5">Sequencing Platform</h6>
              </div>
            </div>
          </div>

          <div class="row">
          <div class="col-4">
              <div class="form-outline">
               <select name="form-outline" class="form-control">
                 <option selected>Select</option>
                 <option value="Phred 33">Phred 33</option>
                 <option value="Phred 64">Phred 64</option>
                </select> 
               <h6 class="mt-1 mb-5">Phred Format</h6>
              </div>
            </div>

            <div class="col-4">
              <div class="form-outline">
               <select name="form-outline" class="form-control">
                 <option selected>Select</option>
                 <option value="Paired End">Paired End</option>
                 <option value="Single End">Single End</option>
                </select> 
               <h6 class="mt-1 mb-5">Type of Library?</h6>
              </div>
            </div>

            <div class="col-4">
              <div class="form-outline">
               <select name="form-outline" class="form-control">
                 <option selected>Select</option>
                 <option value="R1-Forward & R2- Reverse">R1-Forward & R2- Reverse</option>
                 <option value="R2 - Forward & R1 - Reverse">R2 - Forward & R1 - Reverse</option>
                 <option value="Both Forward">Both Forward</option>
                 <option value="Both Reverse">Both Reverse</option>
                </select> 
               <h6 class="mt-1 mb-5">Library Orientation?</h6>
              </div>
            </div>
          </div>

          <div>
              <p class=" text-muted mb-1">Applicable for Projects where data has not been Generated by Molsys Scientific. Please specify the adapter sequences used, Otherwise Auto-Detected ones will be considered.</p>
              <input type="text" id="inputHelpBlock" class="form-control" aria-describedby="helpBlock"/>
              <h6 class="mt-1 mb-5">Adapter Sequences (Optional)</h6>
          </div>

            
          <div class="col mb-5">
          <p class=" text-muted mb-1">Please provide a spreadsheet (preferably) or any document describing the map between samples
              (grouping information) and their related information.
              </p>
              <input class="form-control" type="file" id="formFile"/>
              <h6 class="mt-1">Summary File</h6>
          </div>

          <div>
              <p class=" text-muted mb-1">Provide with any Miscellaneous information if you feel is important for 
              the analysis and is not been covered in the above sections.
              </p>
              <input type="text" id="inputHelpBlock" class="form-control" aria-describedby="helpBlock"/>
              <h6 class="mt-1 mb-5">Miscellaneous Information (Optional)</h6>
          </div>

          <button type="submit" class="btn btn-primary btn-block mb-4">Request a
Quote</button>

    </div>
</div>
    </div>
  )
}

export default DataAnalysisform
