import {
    Button,
    Checkbox,
    Container,
    FormControl,
    FormControlLabel,
    FormLabel,
    Grid,
    Link,
    makeStyles,
    MuiAlert,
    Radio,
    RadioGroup,
    React,
    Snackbar,
    TextField,
    Typography,
    useHistory,
    useState
} from "../component"
import {appNotification} from "../shared/notification/app-notification";
import {doRegisterSales, doRegisterLab,doRegisterOperator,doRegisterAnalysis, doRegisterUser} from "./authDispatcher";
import {LOGIN} from "./authStore";
import {useDispatch} from "react-redux";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import {getAsFormatted} from "../shared/date-helpers";
import Loginimg from '../assets/Registerbg.jpg';
import BG from '../assets/LogRegbg.jpg'
import axios from 'axios';
import register from '../assets/register.jpg'
import {environment} from "../environment";

const RegistrationForm = () => {
  const [user, setUser] = useState({
    userName: '',
    password: '',
    firstName: '',
    email: '',
    phoneNumber: '',
    lastName: '',
    address: '',
    pinCode: '',
    department: '',
    institution: '',
    country: '',
    state: '',
    gst_number: '',
  });
  

  const [verificationCode, setVerificationCode] = useState('');
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const [verificationSuccess, setVerificationSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleVerificationCodeChange = (e) => {
    setVerificationCode(e.target.value);
  };

  const handleRegister = async () => {
    try {
      const response = await axios.post('https://molsys.in/api/auth/register', user);
      // console.log(response.data);
      setRegistrationSuccess(true);
    } catch (error) {
      console.error(error.response.data);
    }
  };

  const history = useHistory();
 
  const handleVerifyEmail = async () => {
    try {
      const response = await axios.post('https://molsys.in/api/auth/verify', {
        verificationCode: verificationCode,
      });
      setVerificationSuccess(true);
      alert('Verification successful. You can now log in.');
      history.push('/login');
    } catch (error) {
      console.error(error.response.data);
    }
  };
  

  return (
    <section className="text-center text-lg-start mt-5 pt-5 fade-in" style={{backgroundImage: `url(${BG})`, backgroundSize: "cover"} }>
<style>
  {`
    .cascading-right {
      margin-right: -50px;
    }

    @media (max-width: 991.98px) {
      .cascading-right {
        margin-right: 0;
      }
    }

    .card{
      background: hsla(0, 0%, 100%, 0.55);
      backdrop-filter: blur(30px);
      width: 100%;
    }
  
    @media (max-width: 767px) {
      .card {
        padding: 1rem;
      }
    }

  `}
</style>
<div className="container py-4 px-3">
  <div className="row g-0 align-items-center">
    <div className="col-lg-6 mb-4">
      <div className="card cascading-right mx-3 rounded">
        <div className="card-body p-3 shadow-5 text-center">
          <h2 className="fw-bold mb-4">Registration Form</h2>
     
          <form>
            <label class="mx-2">
              <input type="text" name="userName" placeholder="Username" className="form-control mb-2" value={user.userName} onChange={handleInputChange} />
            </label>
           
            <label>
              <input type="text" name="firstName" placeholder="First Name" className="form-control mb-2" value={user.firstName} onChange={handleInputChange} />
            </label>
          
            <label class="mx-2">
              <input type="text" name="lastName" placeholder="Last Name" className="form-control mb-2" value={user.lastName} onChange={handleInputChange} />
            </label>

            <label>
              <input type="password" name="password" placeholder="Password" className="form-control mb-2" value={user.password} onChange={handleInputChange} />
            </label>
            
            <label class="mx-2">
              <input type="text" name="email" placeholder="Email" className="form-control mb-2" value={user.email} onChange={handleInputChange} />
            </label>
           
            <label>
              <input type="text" name="phoneNumber" placeholder="Phone Number" className="form-control mb-2" value={user.phoneNumber} onChange={handleInputChange} />
            </label>
           
            <label class="mx-2">
              <input type="text" name="address" placeholder="Address" className="form-control mb-2" value={user.address} onChange={handleInputChange} />
            </label>

            <label>
              <input type="text" name="state" placeholder="State" className="form-control mb-2" value={user.state} onChange={handleInputChange} />
            </label>
           
            <label class="mx-2">
              <input type="text" name="country" placeholder="Country" className="form-control mb-2" value={user.country} onChange={handleInputChange} />
            </label>

            <label>
              <input type="text" name="pinCode" placeholder="PinCode" className="form-control mb-2" value={user.pinCode} onChange={handleInputChange} />
            </label>

            <label class="mx-2">
              <input type="text" name="institution" placeholder="Institution/University" className="form-control mb-2" value={user.institution} onChange={handleInputChange} />
            </label>

            <label>
              <input type="text" name="department" placeholder="Department" className="form-control mb-2" value={user.department} onChange={handleInputChange} />
            </label>

            <label class="mx-2">
              <input type="text" name="gst_number" placeholder="GST_number" className="form-control mb-2" value={user.gst_number} onChange={handleInputChange} />
            </label>

            </form>

          <button className="btn btn-primary mt-2" onClick={handleRegister} color="primary">Register</button>
        

          
         {/* New row for the link */}
         <div className="row mt-2">
              <div className="col-9">
                <Link href="#" to="/login" variant="body2" className="link-offset-2 link-underline link-underline-opacity-0">
                  <strong>Already Have an account? Sign In</strong>
                </Link>
              </div>
            </div>

      {registrationSuccess && (
      <>
        <p class="mt-3">Registration successful! Please check your email for verification.</p>
        // <div className="form-outline mb-2">
        //   <Link to="/login" variant="body2" className="mb-5 pb-5 mr-5 link-offset-2 link-underline link-underline-opacity-0">
        //     <strong>Have an account? Sign in</strong>
        //   </Link>
        // </div>
        <hr />
        <h2 className="fw-bold mb-4">Email Verification</h2>
        <label>
          <input type="text" placeholder="Verification Code" className="form-control" value={verificationCode} onChange={handleVerificationCodeChange} />
        </label>
        <button className="btn btn-primary btn-sm mx-3" onClick={handleVerifyEmail}>Verify Email</button>
        {verificationSuccess && <p>Email verification successful! You can now log in.</p>}
      </>
    )}
        </div>
      </div>
    </div>

    <div className="col-lg-6 mb-4 d-none d-lg-block">
      <img src={register} className="rounded-4 shadow-4 img-fluid" alt=""/>
    </div>
  </div>
</div>

</section>
  );
};

export default RegistrationForm;
