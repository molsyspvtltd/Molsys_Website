import React, { useState, useRef, useEffect } from 'react';

import axios from 'axios';
import '../style/Form.css';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
function OligosForm() {
  const [forms, setForms] = useState([
    {
      serialNumber: '1',
      oligoName: '',
      oligoSequence: '',
      numBases: '',
      nmolRequired: '',
      modification5: '',
      modification3: '',
      purity: '',
    },
  ]);

  const addForm = () => {
    const newSerialNumber = (parseInt(forms[forms.length - 1].serialNumber, 10) + 1).toString();
    setForms((prevForms) => [
      ...prevForms,
      {
        serialNumber: newSerialNumber,
        oligoName: '',
        oligoSequence: '',
        numBases: '',
        nmolRequired: '',
        modification5: '',
        modification3: '',
        purity: '',
      },
    ]);
  };
  const pdfContainerRef = useRef(null);

  const handleInputChange = (index, event) => {
    const { name, value } = event.target;
    let updatedForms = [...forms];

    if (name === 'oligoSequence') {
      updatedForms[index]['numBases'] = value.length;
    }

    updatedForms[index][name] = value;
    setForms(updatedForms);
  };

  const generateAndSendPDF = async () => {
    try {
      // Get the content of the PDF container
      const pdfContainer = pdfContainerRef.current;

      // Use html2canvas to capture the content as an image
      const canvas = await html2canvas(pdfContainer);

      // Create a new jsPDF instance
      const pdf = new jsPDF('p', 'mm', 'a4');

      // Add the captured image to the PDF
      pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, pdf.internal.pageSize.getWidth(), pdf.internal.pageSize.getHeight());

      // Output the PDF as Blob
      const blob = pdf.output('blob');

      // Convert PDF blob to FormData
      const formData = new FormData();
      formData.append('pdf', blob, 'filename.pdf');

      // Make a POST request to your server to send the email with the PDF attachment
      await axios.post('http://localhost:8080/api/send-email', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      // Handle success, show a success message, or redirect the user
      console.log('PDF sent successfully');
    } catch (error) {
      // Handle errors
      console.error('Error sending PDF:', error);
    }
  };

  useEffect(() => {
    // Call generateAndSendPDF here or in response to a user action
    generateAndSendPDF();
  }, []);
  

  return (
    <div className='mt-3 pt-5' id="pdf-container" ref={pdfContainerRef}>
      <div class="box">
  <div class="container mt-5">				
        <div class="section-title text-center">
        <h1 class="display-5 mt-5"><strong>Oligos Synthesis Services</strong></h1></div>
        <p>Welcome to our premier Custom Oligo Synthesis Service, your one-stop destination for tailor-made DNA and RNA sequences. 
            Our cutting-edge technology and expert scientists ensure precise, high-quality oligos and primers for your research needs. 
            We specialize in designing and synthesizing sequences of varying lengths and complexities, meeting the unique demands 
            of your projects, be it PCR, qPCR, sequencing, or gene cloning. With a lightning-fast turnaround, competitive pricing, 
            and stringent quality control, we guarantee the utmost accuracy and consistency.<br></br><br></br> 
            Harness the power of customization and elevate your molecular biology experiments with our dependable, cost-effective, and efficient custom oligo synthesis 
            solutions. Explore boundless possibilities with us today.</p>

             <div class="section-title">
             <h1 class="display-5 mt-5">Form</h1></div>



 <form>
  {/* <!-- 2 column grid layout with text inputs for the first and last names --> */}
  <div class="row mb-4">
    <div class="col">
      <div class="form-outline">
        <input type="text" id="form6Example1" class="form-control" />
        <label class="form-label" for="form6Example1">Institute Name</label>
      </div>
    </div>
    <div class="col">
      <div class="form-outline">
        <input type="text" id="form6Example2" class="form-control" />
        <label class="form-label" for="form6Example2">Contact Person</label>
      </div>
    </div>
  </div>

  {/* <!-- Email input --> */}
  <div class="row mb-4">
  <div class="col">
  <div class="form-outline">
    <input type="email" id="form6Example5" class="form-control" />
    <label class="form-label" for="form6Example5">Email-id</label>
  </div>
  </div>

  {/* <!-- Number input --> */}
  <div class="col">
  <div class="form-outline ">
    <input type="number" id="form6Example6" class="form-control" />
    <label class="form-label" for="form6Example6">Phone Number</label>
  </div>
  </div>
  </div>
  

  {/* <!-- Text input --> */}
  <div class="form-outline mb-4">
    <input type="text" id="form6Example4" class="form-control" />
    <label class="form-label" for="form6Example4">Address</label>
  </div>

   {/* <!-- Date input --> */}
   <div class="form-outline mb-4">
    <input type="date" id="form6Example6" class="form-control" />
    <label class="form-label" for="form6Example6">Date</label>
  </div>

  {/* <!-- Text input --> */}
  <div class="form-outline mb-4">
    <input type="text" id="form6Example3" class="form-control" />
    <label class="form-label" for="form6Example3">Order ID</label>
  </div> 


</form>



<div className="App">
      {forms.map((form, index) => (
        <div class="form-control-2 mb-4 rounded">
        <div class="row mb-4">
          <div class="col-2 mt-2 mx-2">
            <div class="form-outline">
              <input type="text" id="serialNumber" placeholder={form.serialNumber} class="form-control" disabled/>
              <label class="form-label" for="form6Example1">Sl. No.</label>
            </div>
          </div>
          <div class="col mt-2">
            <div class="form-outline">
              <input type="text" id="form6Example2" class="form-control" />
              <label class="form-label" for="form6Example2">Oligo Name</label>
            </div>
          </div>
          <div class="col mt-2 mx-2">
            <div class="form-outline">
              <input  type="text" name="oligoSequence" value={form.oligoSequence}
               onChange={(e) => handleInputChange(index, e)} class="form-control" />
              <label class="form-label" for="form6Example2">Oligo Sequence</label>
            </div>
          </div>  
        </div>
        <div class="row mb-4">
          <div class="col mt-2 mx-2">
            <div class="form-outline">
              <input type="text" id="numBases" placeholder={form.numBases} class="form-control" disabled/>
              <label class="form-label" for="form6Example1">No. of Bases</label>
            </div>
          </div>
          <div class="col mt-2">
            <div class="form-outline">
            <select name="form-outline" class="form-control">
          <option selected>Select</option>
          <option value="20">20</option>
          <option value="50">50</option>
          <option value="100">100</option>
          <option value="200">200</option>
          <option value="500">500</option>
          <option value="1000">1000</option>
          <option value="5000">5000</option>
          <option value="10000">10000</option>
        </select>  
              <label class="form-label" for="form6Example2">nmol Required</label>
            </div>
          </div>
          <div class="col mt-2 mx-2">
            <div class="form-outline">
            <select name="form-outline" class="form-control">
          <option selected>Select</option>
          <option value="FAM">FAM</option>
          <option value="Cy5">Cy5</option>
          <option value="TAMRA">TAMRA</option>
          <option value="HEX">HEX</option>
          <option value="Cy3">Cy3</option>
        </select> 
              <label class="form-label" for="form6Example2">5" Modification</label>
            </div>
          </div>  
          <div class="col mt-2">
            <div class="form-outline">
            <select name="form-outline" class="form-control">
          <option selected>Select</option>
          <option value="BHQ1">BHQ1</option>
          <option value="BHQ2">BHQ2</option>
          <option value="BHQ3">BHQ3</option>
          <option value="TAMRA">TAMRA</option>
        </select> 
              <label class="form-label" for="form6Example2">3" Modification</label>
            </div>
          </div>
          <div class="col mt-2 mx-2">
            <div class="form-outline">
            <select name="form-outline" class="form-control">
          <option selected>Select</option>
          <option value="Desalted">Desalted</option>
          <option value="HPLC">HPLC</option>
        </select> 
              <label class="form-label" for="form6Example2">Purity (Desalted/HPLC)</label>
            </div>
          </div> 

    </div>
  </div>
      ))}
      {/* <!-- Submit button --> */}
      <button class="btn btn-secondary btn-block mb-4 mx-2" onClick={addForm}><strong>+</strong></button>
      <button
        type="button"
        className="btn btn-primary btn-block mb-4"
        onClick={generateAndSendPDF}
      >
        Request a Quote
      </button>

</div>


</div>
</div>
    </div>
  )
}

export default OligosForm
