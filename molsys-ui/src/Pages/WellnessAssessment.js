import React from 'react';
import gcellbg from '../assets/g_cellbg.jpg';
import Select from 'react-select';
import { useState } from 'react';


function WellnessAssessment() {

  const [step, setStep] = useState(1);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSelectChange = (selectedOptions, name) => {
    setFormData((prevState) => ({ ...prevState, [name]: selectedOptions }));
  };

  const handleNext = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setStep((prevStep) => prevStep - 1);
  };
  
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };
    const options = [
        { value: 'Blood Sugar Levels', label: 'Blood Sugar Levels' },
        { value: 'LDL', label: 'LDL' },
        { value: 'Triglycerides', label: 'Triglycerides' },
        { value: 'VLDL', label: 'VLDL' },
        { value: 'HDL', label: 'HDL' },
        { value: 'HBA1C', label: 'HBA1C' },
        { value: 'SGPT/SGOT', label: 'SGPT/SGOT' },
        { value: 'Blood Urea', label: 'Blood Urea' },
        { value: 'Serum Uric Acid', label: 'Serum Uric Acid' },
        { value: 'Homocysteine', label: 'Homocysteine' },
        { value: 'CRP', label: 'CRP' },
        { value: 'T3', label: 'T3' },
        { value: 'T4', label: 'T4' },
        { value: 'TSH', label: 'TSH' },
        { value: 'None of the above', label: 'None of the above' },
        { value: 'Attaching', label: 'Attaching reports hence not responding here' }
      ];
    
      const options2 = [
        { value: 'Vitamin D', label: 'Vitamin D' },
        { value: 'Vitamin B12', label: 'Vitamin B12' },
        { value: 'Potassium', label: 'Potassium' },
        { value: 'Chlorides', label: 'Chlorides' },
        { value: 'None of the above', label: 'None of the above' },
        { value: 'Attaching', label: 'Attaching reports hence not responding here' }
      ];

      const options3 = [
        { value: 'Diabetes', label: 'Diabetes' },
        { value: 'Heart Diseases', label: 'Heart Diseases' },
        { value: 'Blood Pressure', label: 'Blood Pressure' },
        { value: 'Hyper-Thyroidism', label: 'Hyper-Thyroidism' },
        { value: 'Hypo-Thyroidism', label: 'Hypo-Thyroidism' },
        { value: 'Thyroid', label: 'Thyroid' },
        { value: 'Bone and Joint diseases', label: 'Bone and Joint diseases' },
        { value: 'Skin Diseases', label: 'Skin Diseases' },
        { value: 'Cancer', label: 'Cancer' },
        { value: 'Liver Diseases', label: 'Liver Diseases' },
        { value: 'Kidney Diseases', label: 'Kidney Diseases' },
        { value: 'Digestive diseases', label: 'Digestive diseases' },
        { value: 'PCOS (In case of women)', label: 'PCOS (In case of women)' },
        { value: 'Infertility', label: 'Infertility' },
        { value: 'Repeated spontaneous abortions / pregnancy losses (In case of women)', label: 'Repeated spontaneous abortions / pregnancy losses (In case of women)' },
        { value: 'Any other conditions not listed here, would like to discuss during personal interaction', label: 'Any other conditions not listed here, would like to discuss during personal interaction' },
        { value: 'None of the above', label: 'None of the above' }
    ];

    const options4 = [
        { value: 'Acidity', label: 'Acidity' },
        { value: 'Bloating', label: 'Bloating' },
        { value: 'Frequent passing of stools', label: 'Frequent passing of stools' },
        { value: 'Abdominal cramps / pain', label: 'Abdominal cramps / pain' },
        { value: 'Constipation', label: 'Constipation' },
        { value: 'Joint Pains', label: 'Joint Pains' },
        { value: 'Frozen Shoulder', label: 'Frozen Shoulder' },
        { value: 'Tennis Elbow', label: 'Tennis Elbow' },
        { value: 'Hazy Vision', label: 'Hazy Vision' },
        { value: 'Watery Eyes', label: 'Watery Eyes' },
        { value: 'Skin Rashes', label: 'Skin Rashes' },
        { value: 'Pimples / Acne', label: 'Pimples / Acne' },
        { value: 'Dry / Scaly skin', label: 'Dry / Scaly skin' },
        { value: 'Hairfall', label: 'Hairfall' },
        { value: 'Migraine', label: 'Migraine' },
        { value: 'Headaches', label: 'Headaches' },
        { value: 'Jaw Clenching', label: 'Jaw Clenching' },
        { value: 'Any Teeth and Gum Issues', label: 'Any Teeth and Gum Issues' },
        { value: 'Mouth Ulcers', label: 'Mouth Ulcers' },
        { value: 'Vertigo', label: 'Vertigo' },
        { value: 'Allergies to any Drugs', label: 'Allergies to any Drugs' },
        { value: 'Any other conditions not listed here, would like to discuss during personal interaction', label: 'Any other conditions not listed here, would like to discuss during personal interaction' },
        { value: 'None of the above', label: 'None of the above' }
    ];

    const options5 = [
      { value: 'Vegetarian', label: 'Vegetarian' },
      { value: 'Non Vegetarian', label: 'Non Vegetarian' },
      { value: 'Vegan', label: 'Vegan' }
    ];
  
    const options6 = [
      { value: 'Wheat', label: 'Wheat (suji, bakery items, chapati, bread, roti , paratha etc)' },
      { value: 'Milk or Milk Products', label: 'Milk or Milk Products ( drinking milk, sweets, confectioneries, chocolates, tea, coffee , milkshakes etc)' },
      { value: 'Home made Curds', label: 'Home made Curds' },
      { value: 'Packaged Curds', label: 'Packaged Curds' },
      { value: 'Probiotic packaged Curds', label: 'Probiotic packaged Curds' },
      { value: 'None of the above', label: 'None of the above' }
    ];

    const options7 = [
      { value: 'Tea', label: 'Tea' },
      { value: 'Coffee', label: 'Coffee' },
      { value: 'Kefir', label: 'Kefir' },
      { value: 'Kombucha', label: 'Kombucha' },
      { value: 'GreenTea', label: 'Green Tea' },
      { value: 'Caffeinated drinks / Energy drinks', label: 'Caffeinated drinks / Energy drinks' },
      { value: 'None', label: 'None of the above' }
    ];

    const options8 = [
      { value: 'Mildoccasionally', label: 'Mild Alcoholic beverages ( Beer, Wine , Champegne) occasionally (once in 2-3 months)' },
      { value: 'MildRegularly', label: 'Mild Alcoholic beverages ( Beer, Wine , Champegne) Regularly ( Atleast once a week)' },
      { value: 'StrongOccasionally', label: 'Strong Alcoholic beverages (Whisky, Rum, Vodka ..) occasionally (once in 2-3months)' },
      { value: 'StrongFrequently', label: 'Strong Alcoholic beverages (Whisky, Rum, Vodka ..) Frequently (once in a month)' },
      { value: 'StrongRegularly', label: 'Strong Alcoholic beverages (Whisky, Rum, Vodka ..) Regularly ( Atleast once a week)' },
      { value: 'SmokingOccasional', label: 'Smoking (Occasional)' },
      { value: 'SmokingDaily', label: 'Smoking (Daily)' },
      { value: 'TobaccoOccassional', label: 'Chewing tobacco or related products in any form (Occassional)' },
      { value: 'TobaccoDaily', label: 'Chewing tobacco or related products in any form (Daily)' },
      { value: 'None', label: 'None of the above' }
    ];
    


const [formData, setFormData] = useState({
  name: '',
  contact: '',
  email: '',
  age: '',
  height: '',
  weight: '',
  gender: '',
  waist: '',
  neck: '',
  weightstatus: '',
  abovenormal: [],
  belownormal: [],
  diagnosed: [],
  family_history: [],
  ysymptoms: [],
  sleep: '',
  doctorprescribed: '',
  doctor_not_prescribed: '',
  medical_information: '',
  diet: [],
  preBreakfasttime: '',
  breakfasttime: '',
  midMorningtime: '',
  lunchtime: '',
  evening_Tea: '',
  eveningSnackstime: '',
  dinnertime: '',
  postDinnertime: '',
  consumption: [],
  beverages: [],
  lifestyle: [],
  outside_food: '',
  freqExercise: '',
  most_followed_exercise: '',
  sport: '',
  existing_disease: '',
  preferredDate_time: ''
});



const handleSubmit = async (e) => {
  e.preventDefault();
  //console.log('Submitting form data:', formData);

  try {
      const response = await fetch('https://molsys.in/api/wellness-form/submit', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
      });

      if (response.ok) {
          setFormData({
              name: '',
              contact: '',
              email: '',
              age: '',
              height: '',
              weight: '',
              gender: '',
              waist: '',
              neck: '',
              weightstatus: '',
              abovenormal: [],
              belownormal: [],
              diagnosed: [],
              family_history: [],
              ysymptoms: [],
              sleep: '',
              doctorprescribed: '',
              doctor_not_prescribed: '',
              medical_information: '',
              diet: [],
              preBreakfasttime: '',
              breakfasttime: '',
              midMorningtime: '',
              lunchtime: '',
              evening_Tea: '',
              eveningSnackstime: '',
              dinnertime: '',
              postDinnertime: '',
              consumption: [],
              beverages: [],
              lifestyle: [],
              outside_food: '',
              freqExercise: '',
              most_followed_exercise: '',
              sport: '',
              existing_disease: '',
              preferredDate_time: ''
          });
          alert('Form submitted successfully!');
      } else {
          const errorData = await response.json();
          console.error('Error response:', errorData);
          alert('Failed to submit form');
      }
  } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to submit form');
  }
};




  const [selectedConsumptionOptions, setSelectedConsumptionOptions] = useState([]);
  const [selectedDietOptions, setSelectedDietOptions] = useState([]);
  const [selectedBeverageOptions, setSelectedBeverageOptions] = useState([]);
  const [selectedLifestyleOptions, setSelectedLifestyleOptions] = useState([]);

  const handleConsumptionSelectChange = (selectedOptions) => {
    setSelectedConsumptionOptions(selectedOptions);
  };

  const handleDietSelectChange = (selectedOptions) => {
    setSelectedDietOptions(selectedOptions);
  };

  const handleBeverageSelectChange = (selectedOptions) => {
    setSelectedBeverageOptions(selectedOptions);
  };

  const handleLifestyleSelectChange = (selectedOptions) => {
    setSelectedLifestyleOptions(selectedOptions);
  };


  return (
    <div>
      <header class="masthead shadow-lg fade-in" style={{backgroundImage: `url(${gcellbg})`, backgroundSize: "cover"} }>
        <div class="container">
          <div class="row align-items-center">
            <div class="col-12 py-5 mt-5 pt-5">
              <h1 class="mb-4">Wellness Assessment</h1>
              <p class="m-0" style={{ textAlign: 'justify' }}>
                <b>Dear Sir/Madam,</b><br></br> Thanks for connecting with us. We understand your keen interest in your health and wellness, which is one of the primary reasons, that you have chosen to take a Nutrigenomics approach towards Health and Wellness.
                We would like to assure you that Nutrigenomics is the most personalised approach towards managing existing lifestyle health issues and preventing those, which one can be predisposed to due to genetic make up and lifestyle.
                We present you a detailed questionnaire which helps us understand more about your current health status, family health issues, your own health objectives and other important health parameters. These details along with the nutrigenomics
                test enable us to provide you a detailed personalised road map towards a healthy life. We request you to fill the need full details and connect with us in case you have any queries while filling the details.
                Thank you !
              </p>
            </div>
          </div>
        </div>
      </header>
      <div class="container-xl px-4 mt-4">
        <div class="card mb-4 lead">
        <div className="card-header">
            {step === 1 && "Patient Details"}
            {step === 2 && "Clinical History / Details C"}
            {step === 3 && "Diet and Food Habits D"}
            {step === 4 && "Lifestyle"}
            {step === 5 && "Health Objectives"}
          </div>
          <div class="card-body">
          {step === 1 && (  
             <form onSubmit={handleSubmit}><div class="row gx-3 mb-3">
             <div class="col-md-6">
               <label class="small mb-1" for="inputName"> Your Name *</label>
               <input class="form-control" id="inputName" type="text" placeholder="Enter your name" name="name" value={formData.name} onChange={handleChange} required/>
             </div>
             <div class="col-md-6">
               <label class="small mb-1" for="inputContactNumber"> Contact Number *</label>
               <input class="form-control" id="inputContactNumber" type="tel" placeholder="Enter your Contact No" name="contact" value={formData.contact} onChange={handleChange} required/>
             </div>
           </div>
           <div class="row gx-3 mb-3">
             <div class="col-md-6">
               <label class="small mb-1" for="inputEmail">Your Email ID *</label>
               <input class="form-control" id="inputEmail" type="text" placeholder="Enter your email" name="email" value={formData.email} onChange={handleChange} required/>
             </div>
             </div>


             <div class="card-header mt-4 mb-3">Anthropometry A</div>
             <p style={{ fontSize: 'smaller' }}><b>*Please provide details about your physical features</b></p>
           <div class="row gx-3 mb-3">
             <div class="col-md-6">
               <label class="small mb-1" for="inputAge">Your Current Age (Years) *</label>
               <input class="form-control" id="inputAge" type="number" placeholder="Enter Your Current Age" name="age" value={formData.age} onChange={handleChange} required/>
             </div>
             <div class="col-md-6">
               <label class="small mb-1" for="inputHeight">Your Current Height (cms) *</label>
               <input class="form-control" id="inputHeight" type="number" placeholder="Your Current Height" name="height" value={formData.height} onChange={handleChange} required/>
             </div>
           </div>
           <div class="row gx-3 mb-3">
             <div class="col-md-6">
               <label class="small mb-1" for="inputWeight">Your Current Weight (kgs) *</label>
               <input class="form-control" id="inputWeight" type="number" placeholder="Enter your weight" name="weight" value={formData.weight} onChange={handleChange} required />
             </div>
             <div class="col-md-6 mb-3">
               <label class="small mb-1" for="inputGender">You are a .... *</label>
               <select class="form-control" id="inputGender" name="gender" value={formData.gender} onChange={handleChange} required>
                 <option value="" disabled selected>Select</option>
                 <option value="Male">Male</option>
                 <option value="Female">Female</option>
                 <option value="Other">Other</option>    
               </select>
             </div>
             <div class="col-md-6 mb-3">
               <label class="small mb-1" for="inputWaist">Waist Circumference at Naval point (cm) *</label>
               <input class="form-control" id="inputWaist" type="text" name="waist" placeholder="Enter your Waist Circumference at Naval point" value={formData.waist} onChange={handleChange}/>
             </div>
             <div class="col-md-6 mb-3">
               <label class="small mb-1" for="inputNeck">Neck Circumference at narrowest point (cm) *</label>
               <input class="form-control" id="inputNeck" type="text" placeholder="Enter Neck Circumference at narrowest point (cm) " name="neck" value={formData.neck} onChange={handleChange}/>
             </div>
             <div class="col-md-6 mb-3">
               <label class="small mb-1" for="inputWeightstatus">Have you in last six months .... *</label>
               <select class="form-control" id="inputWeightstatus" name="weightstatus" value={formData.weightstatus} onChange={handleChange}required>
               <option value="" disabled selected>Select</option>
                 <option value="Lost Weight (above 5 kg)">Lost Weight (above 5 kg)</option>
                 <option value="Gained Weight (Above 5 kg)">Gained Weight (Above 5 kg)</option>
                 <option value="Lost Weight (But between 2-5 Kg)">Lost Weight (But between 2-5 Kg)</option>
                 <option value="Gained Weight (But between 2-5 Kg)">Gained Weight (But between 2-5 Kg)</option>
                 <option value="Dont know">Dont know</option>
                 <option value="Neither gained nor lost weight">Neither gained nor lost weight</option>
               </select>
             </div>
           </div>


           <div class="card-header mt-4 mb-3">Biochemical Analysis B</div>
           <p style={{ fontSize: 'smaller' }}><b>*Please provide details of the recent pathology tests, that you have undergone in last three months. You may also send the reports via email.</b></p>
           <div class="row gx-3 mb-3">
           <div className="col-md-12 mb-3">
           <label className="small mb-1" htmlFor="inputAboveNormal">Have you been diagnosed with any of the following above normal (select all that apply)?</label>
             <Select
               id="inputAboveNormal"
               name="abovenormal"
               options={options}
               isMulti
               onChange={(selectedOptions) => setFormData(prevState => ({
                 ...prevState,
                 abovenormal: selectedOptions.map(option => option.value)
               }))}
             />
           </div>
           <div className="col-md-12 mb-3">
           <label className="small mb-1" htmlFor="inputBelowNormal">Have you been diagnosed with any of the following below normal (select all that apply)?</label>
             <Select
               id="inputBelowNormal"
               name="belownormal"
               options={options2}
               isMulti
               onChange={(selectedOptions) => setFormData(prevState => ({
                 ...prevState,
                 belownormal: selectedOptions.map(option => option.value)
               }))}
             />
            </div>
             </div>
             <div className="row">
             <div className="col-md-3">
                    <button type="button" className="btn btn-primary" onClick={handleNext}>Next</button>
                  </div>
                  </div>
            </form>
          )}


          {step === 2 && (
            <>
            {/* <div class="card-header mt-4 mb-3">Clinical History / Details "C"</div> */}
              <p style={{ fontSize: 'smaller' }}><b>*Please provide health details regarding your self and family history</b></p>
             <form onSubmit={handleSubmit}><div class="row gx-3 mb-3">
              <div className="col-md-12 mb-3">
              <label className="small mb-1" htmlFor="inputDiagnosed">Have you been diagnosed with any of the following (select all that apply)?</label>
                <Select
                  id="inputDiagnosed"
                  name="diagnosed"
                  options={options3}
                  isMulti
                  onChange={(selectedOptions) => setFormData(prevState => ({
                    ...prevState,
                    diagnosed: selectedOptions.map(option => option.value)
                  }))}
                />
               </div>
               <div className="col-md-12 mb-3">
               <label className="small mb-1" htmlFor="inputFamilyHistory">Family History of Medical Conditions (select all that apply)</label>
                <Select
                  id="inputFamilyHistory"
                  name="family_history"
                  options={options3}
                  isMulti
                  onChange={(selectedOptions) => setFormData(prevState => ({
                    ...prevState,
                    family_history: selectedOptions.map(option => option.value)
                  }))}
                />
               </div>
               <div className="col-md-12 mb-3">
               <label className="small mb-1" htmlFor="inputSymptoms">Are you currently experiencing any of the following symptoms (select all that apply)?</label>
                <Select
                  id="inputSymptoms"
                  name="ysymptoms"
                  options={options4}
                  isMulti
                  onChange={(selectedOptions) => setFormData(prevState => ({
                    ...prevState,
                    ysymptoms: selectedOptions.map(option => option.value)
                  }))}
                />
               </div>
                <div class="col-md-6 mb-3">
                <label className="small mb-1" htmlFor="inputSleep">How is your sleep routine *</label>
                <select className="form-control" id="inputSleep" name="sleep" value={formData.sleep} onChange={handleChange} required>
                  <option disabled selected>Select</option>
                  <option value="6-8 hours">I can have sound sleep 6-8 hours without any issues</option>
                  <option value="undisturbed">Difficulty in falling asleep, but sleep is undisturbed</option>
                  <option value="disturbed">Sleep is disturbed, falling asleep is not difficult</option>
                  <option value="challenges">Falling asleep and getting sound sleep, both are challenges</option>
                  <option value="Insomnia">Diagnosed clinically with Insomnia</option>
                  <option value="In person">My problem not listed here, will discuss in person</option>
                </select>
                </div>
              </div>
              <div class="row gx-3 mb-3">
                <div class="col-md-12 mb-4">
                  <label class="small mb-1" for="inputDoctorrescribed">Please provide a list of your medicines or supplements prescribed by your doctor ( if any ). I you aren't on any such medicines or supplements , please state "None" as a answer. *</label>
                  <input class="form-control" id="inputDoctorrescribed" type="text" placeholder="Enter" name="doctorprescribed" value={formData.doctorprescribed} onChange={handleChange} required/>
                </div>
                <div class="col-md-12 mb-4">
                  <label class="small mb-1" for="inputDoctor_not_prescribed">Are you consuming any nutrients, supplements, herbal products that are not a part of your doctors prescription, but you have been consuming them . If yes please provide list of the products with their brand names. *</label>
                  <input class="form-control" id="inputDoctor_not_prescribed" type="text" placeholder="Enter" name="doctor_not_prescribed" value={formData.doctor_not_prescribed} onChange={handleChange} required/>
                </div>
                <div class="col-md-12 mb-4">
                  <label class="small mb-1" for="inputMedical_information">Any other Medical related information that you wish to state , which you feel is important but has not been captured so far. If none, please write "None". *</label>
                  <input class="form-control" id="inputMedical_information" type="text" placeholder="Enter " name="medical_information" value={formData.medical_information} onChange={handleChange} required/>
                </div>
              </div>
              <div className="row">
              <div className="col-md-1">
                    <button type="button" className="btn btn-secondary" onClick={handleBack}>Previous</button>
                  </div>
              <div className="col-md-1">
                    <button type="button" className="btn btn-primary" onClick={handleNext}>Next</button>
                  </div>
                  </div>
            </form>
            </>
          )}


          {step === 3 && (
            <>
            {/* <div class="card-header mt-4 mb-3">Diet and Food Habits "D"</div> */}
            <p style={{ fontSize: 'smaller' }}><b>*Please provide details of the food and eating habits , that you have been
               following on a average since last six months. Please try to avoid incorporating food details , or patterns or habits that you have started recently , that is a diet/meal pattern that you have started following since less than a month. </b></p>
             <form onSubmit={handleSubmit}><div class="row gx-3 mb-3">
              <div className="col-md-6 mb-3">
        <label className="small mb-1" htmlFor="inputDiet">Are you a (select all that apply) *</label>
        <Select
          id="inputDiet"
          name="diet"
          options={options5}
          isMulti
          onChange={(selectedOptions) => setFormData(prevState => ({
            ...prevState,
            diet: selectedOptions.map(option => option.value)
          }))}
        />
      </div>
                <div class="col-md-12 mb-3">
                <label class="small mb-1" for="inputPreBreakfasttime">Please describe your Pre Breakfast Food with typical time ( between 5 am - 8am) if any. If none, state "None" *</label>
                <input class="form-control" id="inputPreBreakfasttime" type="text" placeholder="Enter" name="preBreakfasttime" value={formData.preBreakfasttime} onChange={handleChange}/>
              </div>
              <div class="col-md-12 mb-3">
                <label class="small mb-1" for="inputBreakfasttime">Please describe your Breakfast Food with typical time ( between 7 am - 11 am) if any. If none, state "None" *</label>
                <input class="form-control" id="inputBreakfasttime" type="text" placeholder="Enter" name="breakfasttime" value={formData.breakfasttime} onChange={handleChange} />
              </div>
            <div class="row gx-3 mb-3">
              <div class="col-md-12 mb-3">
                <label class="small mb-1" for="inputMidMorningtime">Please describe your Mid Morning meal with typical time ( between 10 am - 12pm) if any. If none, state "None" *</label>
                <input class="form-control" id="inputMidMorningtime" type="text" placeholder="Enter" name="midMorningtime" value={formData.midMorningtime} onChange={handleChange}/>
              </div>
              <div class="col-md-12 mb-3">
                <label class="small mb-1" for="inputLunchtime">Please describe your Lunch with typical time ( between 12 Pm - 3 pm) if any. If none, state "None" *</label>
                <input class="form-control" id="inputLunchtime" type="text" placeholder="Enter" name="lunchtime" value={formData.lunchtime} onChange={handleChange}/>
              </div>
              <div class="col-md-12 mb-3">
                <label class="small mb-1" for="inputEveningTeatime">Please describe your Evening Tea Time Food  with typical time ( between 3 pm- 7 pm) if any. If none, state "None" *</label>
                <input class="form-control" id="inputEveningTeatime" type="text" placeholder="Enter" name="evening_Tea" value={formData.evening_Tea} onChange={handleChange} />
              </div>
              <div class="col-md-12 mb-3">
                <label class="small mb-1" for="inputEveningSnackstime">Please describe your Evening snacks with typical time ( between 6 pm - 8 pm) if any. If none, state "None" *</label>
                <input class="form-control" id="inputEveningSnackstime" type="text" placeholder="Enter" name="eveningSnackstime" value={formData.eveningSnackstime} onChange={handleChange}/>
              </div>
              <div class="col-md-12 mb-3">
                <label class="small mb-1" for="inputDinnertime">Please describe your Dinner meals with typical time ( between 7 pm - 11 pm) if any. If none, state "None" *</label>
                <input class="form-control" id="inputDinnertime" type="text" placeholder="Enter" name="dinnertime" value={formData.dinnertime} onChange={handleChange} />
              </div>
              <div class="col-md-12 mb-3">
                <label class="small mb-1" for="inputPostDinnertime">Please describe your Post-Dinner food with typical time ( between 10 pm or onwards) if any. If none, state "None" *</label>
                <input class="form-control" id="inputPostDinnertime" type="text" placeholder="Enter" name="postDinnertime" value={formData.postDinnertime} onChange={handleChange} />
              </div>
            
            <div className="col-md-12 mb-3">
        <label className="small mb-1" htmlFor="inputConsumption">Do you consume the following routinely in one or other form? (select all that apply) *</label>
        <Select
          id="inputConsumption"
          name="consumption"
          options={options6}
          isMulti
          onChange={(selectedOptions) => setFormData(prevState => ({
            ...prevState,
            consumption: selectedOptions.map(option => option.value)
          }))}
          required
        />
      </div>

      <div className="col-md-12 mb-3">
        <label className="small mb-1" htmlFor="inputBeverages">Do you consume the following beverages routinely in one or other form? (select all that apply) *</label>
        <Select
          id="inputBeverages"
          name="beverages"
          options={options7}
          isMulti
          onChange={(selectedOptions) => setFormData(prevState => ({
            ...prevState,
            beverages: selectedOptions.map(option => option.value)
          }))}
          required
        />
      </div>
      </div>
            </div>
            <div className="row">
            <div className="col-md-1">
                    <button type="button" className="btn btn-secondary" onClick={handleBack}>Previous</button>
                  </div>
            <div className="col-md-1">
                    <button type="button" className="btn btn-primary" onClick={handleNext}>Next</button>
                  </div>
                  </div>
            </form>
            </>
          )}


          {step === 4 && (
            <>
             {/* <div class="card-header mt-4 mb-3">Lifestyle</div> */}
            <p style={{ fontSize: 'smaller' }}><b>*Please provide us details about your lifestyle factors, apart from diet and exercise </b></p>
             <form onSubmit={handleSubmit}>
              <div class="row gx-3 mb-3">
            <div className="col-md-6">
        <label className="small mb-1" htmlFor="inputLifestyle">Are you used to indulging in the following : (select all that apply) *</label>
        <Select
          id="inputLifestyle"
          name="lifestyle"
          options={options8}
          isMulti
          onChange={(selectedOptions) => setFormData(prevState => ({
            ...prevState,
            lifestyle: selectedOptions.map(option => option.value)
          }))}
          required
        />
      </div>
              <div class="col-md-6 mb-3">
                <label class="small mb-1" for="inputOutside_food">How often do you have food, that is not home cooked or outside food?  *</label>
                <select class="form-control" id="inputOutside_food" name="outside_food" value={formData.outside_food} onChange={handleChange} required>
                  <option disabled selected>Select</option>
                  <option value="Occassionally">Occassionally</option>
                  <option value="Week">Once a week / on weekends</option>
                  <option value="Once">Atleast one meal a day</option>
                  <option value="Daily">Consume outside food daily, on subscription basis (Tiffins, Canteens)</option>
                  <option value="Diet">Consume Designer diet/ Planed meal on subscription basis daily</option>
                  <option value="None of the above">None of the above</option>
                  <option value="NotListed">My pattern not listed here, will discuss in person</option>
                </select>
              </div>
            </div>  

            <div class="card-header mt-4 mb-3">Exercise</div>
            <p style={{ fontSize: 'smaller' }}><b>*Please provide details of the workout that you have been involved in since last six months</b></p>
            <div class="row gx-3 mb-3">
              <div class="col-md-6 mb-3">
                <label class="small mb-1" for="inputFreqExercise">How frequently do you exercise? *</label>
                <select class="form-control" id="inputFreqExercise" name="freqExercise" value={formData.freqExercise} onChange={handleChange} required>
                  <option disabled selected>Select</option>
                  <option value="Daily">Daily</option>
                  <option value="5-6">5-6 days a week</option>
                  <option value="1-2">1-2 days a week</option>
                  <option value="Irregular">Irregular / No exercise</option>
                  <option value="advised">Have been advised not to pursue exercise by a doctor for some medical reasosn</option>
                </select>
              </div>
              <div class="col-md-6 mb-3">
              <label class="small mb-1" for="inputMost_followed_exercise">Which type of exercise do you follow the most? *</label>
              <select class="form-control" id="inputMost_followed_exercise" name="most_followed_exercise" value={formData.most_followed_exercise} onChange={handleChange} required>
                  <option disabled value="">Select</option>
                  <option value="Walking">Walking</option>
                  <option value="Cycling / Jogging">Cycling / Jogging</option>
                  <option value="Swimming">Swimming</option>
                  <option value="GymWeight">Gym exercise (Majorly Weight training)</option>
                  <option value="GymStrength">Gym exercise (Mix of all , aerobic and strength training)</option>
                  <option value="Yoga">Yoga</option>
                  <option value="trainer">Mixed exercises advised by trainer</option>
                   <option value="App">Mixed exercises advised by an App</option>
                   <option value="own">Mixed exercise on my own</option>
                   <option value="None of the above">None of the above</option>
                   <option value="option">My option not listed here, will discuss in person</option>
                </select>

              </div>
              <div class="col-md-12 mb-3">
                  <label class="small mb-1" for="inputsport">Do you play any sport on regular or occasional basis . If yes , please provide details . *</label>
                  <input class="form-control" id="inputsport" type="text" placeholder="Enter" name="sport" value={formData.sport} onChange={handleChange} required/>
                </div>
            </div>
            <div className="row">
            <div className="col-md-1">
                    <button type="button" className="btn btn-secondary" onClick={handleBack}>Previous</button>
                  </div>
                <div className="col-md-1">
                    <button type="button" className="btn btn-primary" onClick={handleNext}>Next</button>
                  </div>
                  </div>
            </form>
            </>
          )}


          {step === 5 && (
            <>
            <form onSubmit={handleSubmit}>
            {/* <div class="card-header mt-4 mb-3">Health Objectives</div> */}
            <p style={{ fontSize: 'smaller' }}><b>*Everyone would like to live a fit and a healthy , disease free life. However, please suggest if you have any of the following health objectives that you wish to achieve :</b></p>
            <div class="col-md-12 mb-3">
                  <label class="small mb-1" for="inputExisting_disease">Please list your existing disease (s) / health issues that you wish to manage on priority, with number 1 having highest priority *</label>
                  <input class="form-control" id="inputExisting_disease" type="text" placeholder="Enter" name="existing_disease" value={formData.existing_disease} onChange={handleChange} required/>
                </div>

            <div class="card-header mt-4 mb-3">Pre Test Consultation Schedule</div>
            <p style={{ fontSize: 'smaller' }}><b>*We hope we have captured all your health  information. Our experts will be happy to further discuss with you if and how a nutrigenomics test will benefit you. Please provide any three convenient time slots for having a 20-25 minutes of consultation online . Our experts shall chose one of the slots and connect with you for further confirmation . Please provide your convenient slots as 1. Preferred Date, Preferred time, </b></p>
            <div class="col-md-12 mb-3">
                  <label class="small mb-1" for="inputPreferredDate_time">Please provide your preferred date and time ( Monday - Saturday, 10 am to 7 pm.) *</label>
                  <input class="form-control" id="inputPreferredDate_time" type="date" placeholder="Enter" name="preferredDate_time" value={formData.preferredDate_time} onChange={handleChange}required/>
            </div>
            <div className="mb-3 form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="termsCheckbox"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                    style={{ borderColor: "black" }}
                  />
                  <label className="form-check-label" style={{ color: "red" }} htmlFor="termsCheckbox">
                  <b>I, the undersigned, hereby consent to my sample for genetic testing to laboratory accept the terms as outlined above. *</b>
                  </label>
            </div>
            <div className="d-flex justify-content-between mt-5">
                  <button
                    className="btn btn-secondary" type="button" onClick={handleBack}>Previous</button>
                  <button className="btn btn-success large-button" type="submit">Submit</button>
                </div>
    
            </form>
             </>
          )}


        </div>
      </div>
    </div>

  </div>

);
}

export default WellnessAssessment;
