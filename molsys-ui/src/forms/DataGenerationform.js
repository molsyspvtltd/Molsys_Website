import React, { useState } from 'react';
import '../style/Form.css';



const DataGenerationform = () => {

    const [formData, setFormData] = useState([{
        serialNumber: '1', // Initialize with 1 for the first form
        SampleLabelledonTube: '',
        Species: '',
        Source: '',
        Concentrationngul: '',
        Volumeul: '',
        LibraryTypeSampleFor: '',
        Barcode: '',
        PCRProductSize: '',
        GBSample: '',
        Remark: ''
    }]);
  
    const addForm = () => {
        const newForm = {
          serialNumber: formData.length + 1,
          SampleLabelledonTube: '',
          Species: '',
          Source: '',
          Concentrationngul: '',
          Volumeul: '',
          LibraryTypeSampleFor: '',
          Barcode: '',
          PCRProductSize: '',
          GBSample: '',
          Remark: ''
          // Add other form fields here with initial values if needed
        };
        setFormData([...formData, newForm]);
      };
    
    return (

<div class="box mt-3 pt-5">
       {/* Data Generation Form Page */}
  <div class="container mt-5">				
        <div class="section-title text-center">
        <h1 class="display-5 mt-5"><strong>DNA/RNA Sample Submission Form</strong></h1></div>

             <div class="section-title">
             <h1 class="display-6 mt-5">Client and Project Details</h1></div>



 <form>

  <div class="row mb-4">

    <div class="col">
      <div class="form-outline">
        <input type="text" id="form6Example1" placeholder='Molsys Pvt. Ltd.' class="form-control" disabled/>
        <label class="form-label" for="form6Example1">Company Name</label>
      </div>
    </div>
    <div class="col">
      <div class="form-outline">
        <input type="text" id="form6Example2" placeholder='Molsys Pvt. Ltd.' class="form-control" disabled/>
        <label class="form-label" for="form6Example2">Client Name</label>
      </div>
    </div>

  </div>

  <div class="row mb-4">

  <div class="col">
  <div class="form-outline ">
    <input type="text" id="form6Example6" class="form-control" disabled/>
    <label class="form-label" for="form6Example6">Project Name</label>
  </div>
  </div>
  
  <div class="col">
  <div class="form-outline">
    <input type="email" id="form6Example5" placeholder='solutions@molsys.in' class="form-control" disabled/>
    <label class="form-label" for="form6Example5">Email-id</label>
  </div>
  </div>
  
  </div>
  
 <div class="row mb-4">

    <div class="col">
      <div class="form-outline">
        <input type="text" id="form6Example1" class="form-control" />
        <label class="form-label" for="form6Example1">Courier Name</label>
      </div>
    </div>
    <div class="col">
      <div class="form-outline">
        <input type="text" id="form6Example2" class="form-control" />
        <label class="form-label" for="form6Example2">Tracking Details</label>
      </div>
    </div>
    
  </div>

  <div class="section-title">
  <h1 class="display-6 mt-5">Samples/Lib Information</h1></div>


        <div class="row mb-4">
          <div class="col mt-2">
            <div class="form-outline">
            <select name="form-outline" class="form-control">
          <option selected>Select</option>
          <option value="Genomic DNA">Genomic DNA</option>
          <option value="Enriched DNA">Enriched DNA</option>
          <option value="PCR Products">PCR Products</option>
          <option value="Tissue Sample">Tissue Sample</option>
          <option value="Total RNA">Total RNA</option>
          <option value="FFPE">FFPE</option>
        </select>  
              <label class="form-label" for="form6Example2">Sample Type</label>
            </div>
          </div>
          <div class="col mt-2 mx-2">
            <div class="form-outline">
            <select name="form-outline" class="form-control">
          <option selected>Select</option>
          <option value="Dissolved in RNase-free ddH2O">Dissolved in RNase-free ddH2O</option>
          <option value="Dissolved TE Buffer">Dissolved TE Buffer</option>
          <option value="Dissolved Alcohol">Dissolved Alcohol</option>
          <option value="Lyophilized">Lyophilized</option>
        </select> 
              <label class="form-label" for="form6Example2">Sample In</label>
            </div>
          </div>  
          <div class="col mt-2">
            <div class="form-outline">
            <select name="form-outline" class="form-control">
          <option selected>Select</option>
          <option value="Illumina (Novaseq 6000)">Illumina (Novaseq 6000)</option>
          <option value="Nanopore">Nanopore</option>
          <option value="10X Chromium">10X Chromium</option>
          <option value="PacBio">PacBio</option>
          <option value="Affymetrix">Affymetrix</option>
        </select> 
              <label class="form-label" for="form6Example2">Platform</label>
            </div>
          </div>
          <div class="col mt-2 mx-2">
            <div class="form-outline">
            <select name="form-outline" class="form-control">
          <option selected>Select</option>
          <option value="PE150">PE150</option>
          <option value="SE50">SE50</option>
          <option value="PE250">PE250</option>
        </select> 
              <label class="form-label" for="form6Example2">Sequencing Read Length</label>
            </div>
          </div> 

    </div>
    <div class="row mb-4">

    <div class="col-10 mt-2">
            <div class="form-outline">
            <select name="form-outline" class="form-control">
          <option selected>Select</option>
          <option value="DNA Sequencing">A. DNA Sequencing (Whole Genome Seq, Whole Exome Seq, Denovo Seq, Genotyping-by-Seq)</option>
          <option value="RNA Sequencing">B. RNA Sequencing (Whole Transcriptome Analysis, Small RNA Seq, Long Non-Coding RNA, Isoform Seq, MeRIP Seq)</option>
          <option value="Epigenetics">C. Epigenetics (Whole Genome Bi-Sulfate Seq, MeDIP-Seq, ChIP-Seq, ATAC-Seq)</option>
          <option value="Metagenomics">D. Metagenomics (Shotgun Metgenome, 16S/18sRNA, ITS Seq)</option>
          <option value="Microarray">E. Microarray (Gene Expression, Copy Number Variation, miRNA Profiling, Custom)</option>
          <option value="10X">F. 10X (Single Cell Genome Seq, Single Cell ATAC Seq, Single Cell RNA Seq)</option>
          <option value="Pacbio">G. Pacbio (Pacbio Genome Seq, Pacbio Isoseq Seq)</option>
        </select> 
              <label class="form-label" for="form6Example2">Samples/Project For</label>
            </div>
        </div> 
        <div class="col-2 mt-2">
        <div class="form-outline">
            <select name="form-outline" class="form-control">
          <option selected>Select</option>
          <option value="With Analysis">With Analysis</option>
          <option value="Without Analysis">Without Analyis</option>
          </select>
          <label class="form-label" for="form6Example2">Bioinformatics Analysis</label>
          </div>
          </div>

    </div>
    <p class="mt-5 text-danger">1. To Avoid any Sample Identification Error, the sample name in Tube must be the same with the sample "Sample Labelled On Tube" in this Form.<br></br>
       2. Please put in the Barcode Sequence and PCR Products Size.<br></br>
       3. Please Share Sample QC Report along with Sample Submission Form.<br></br>
    </p>

</form>
  
<div>
      {formData.map((form, index) => (
        // Your existing form structure goes here
        // Make sure to set unique IDs for input fields to avoid conflicts
        // You can use index or any unique identifier for that purpose
        <div key={index} className="form-control-3 mb-4 mt-5 rounded">
                <div class="row mb-4">
          <div class="col-2 mt-2 mx-3">
            <div class="form-outline">
              <input type="text" id="serialNumber" value={form.serialNumber} class="form-control" disabled/>
              <label class="form-label" for="form6Example1">Sl. No.</label>
            </div>
          </div>
          <div class="col-3 mt-2">
            <div class="form-outline">
              <input type="text" id="form6Example2" class="form-control" />
              <label class="form-label" for="form6Example2">Sample Labelled on Tube</label>
            </div>
          </div>
          <div class="col-2 mt-2 mx-2">
            <div class="form-outline">
              <input  type="text" class="form-control" />
              <label class="form-label" for="form6Example2">Species</label>
            </div>
          </div>  
          <div class="col-2 mt-2 mx-2">
            <div class="form-outline">
              <input  type="text" class="form-control" />
              <label class="form-label" for="form6Example2">Source</label>
            </div>
          </div>  
          <div class="col-2 mt-2 mx-2">
            <div class="form-outline">
              <input  type="text" class="form-control" />
              <label class="form-label" for="form6Example2">Concentration (ng/ul)</label>
            </div>
          </div> 

        </div>

        <div class="row mb-4">
          <div class="col mt-2 mx-2">
            <div class="form-outline">
              <input type="text" id="numBases" class="form-control"/>
              <label class="form-label" for="form6Example1">Volume (ul)</label>
            </div>
          </div>
          <div class="col mt-2">
            <div class="form-outline">
              <input type="text" id="form6Example2" class="form-control" />
              <label class="form-label" for="form6Example2">Library Type/Sample For</label>
            </div>
          </div>
          <div class="col mt-2">
            <div class="form-outline">
              <input type="text" id="form6Example2" class="form-control" />
              <label class="form-label" for="form6Example2">Barcode</label>
            </div>
          </div>
          <div class="col mt-2">
            <div class="form-outline">
              <input type="text" id="form6Example2" class="form-control" />
              <label class="form-label" for="form6Example2">PCR Product Size</label>
            </div>
          </div>
          <div class="col mt-2 mx-2">
            <div class="form-outline">
              <input type="text" id="form6Example2" class="form-control" />
              <label class="form-label" for="form6Example2">GB/Sample</label>
            </div>
          </div>
    </div>

        <div class="col mt-2 mx-2">
            <div class="form-outline">
              <input type="text" id="form6Example2" class="form-control" />
              <label class="form-label" for="form6Example2">Remark</label>
            </div>
        </div>


        </div>
      ))}
      
    {/* <!-- Submit button --> */}
    <button class="btn btn-secondary btn-block mb-4 mx-2" onClick={addForm}><strong>+</strong></button>
    <button type="submit" class="btn btn-primary btn-block mb-4">Request a Quote</button>
</div>

</div>
</div>



    







    );
  }

  export default DataGenerationform