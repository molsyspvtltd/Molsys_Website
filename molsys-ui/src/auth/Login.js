import {
    Button,
    Checkbox,
    Container,
    CssBaseline,
    FormControlLabel,
    Grid,
    Link,
    makeStyles,
    TextField,
    Typography
} from "../component"
import {useHistory} from "react-router-dom";
import Loginimg from '../assets/Loginbg.jpg'
import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import BG from '../assets/LogRegbg.jpg'

import {environment} from "../environment";
import {clearAuthToken, doLogin} from "./authDispatcher";
import {LOGIN} from "./authStore";
import {appNotification} from "../shared/notification/app-notification";
import { blueGrey } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(3),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
        backgroundColor: theme.palette.success.main,
    },
}));

function Login(props) {

    const classes = useStyles();
    const history = useHistory();

    const dispatch = useDispatch()


    const [userName, set_userName] = useState("")
    const [password, set_password] = useState("")


    async function login(event) {
        event.preventDefault();
        // console.log("userName",userName)
        const payload = {
            userName,
            password
        }


        const loginUrl = environment.baseUrl +"/auth/login"

        
        doLogin( payload)
            .subscribe( (response) =>{

                const currentUser = response.user
                const token = response.token


                dispatch({type: LOGIN,"payload":response});



                    history.push("/profile")


            },(error => {
                appNotification.showError(error )


            }))
    }

    return (


<section className="text-center text-lg-start mt-5 pt-5 fade-in" style={{ backgroundImage: `url(${BG})`, backgroundSize: "cover" }}>
  <style>
    {`
      .cascading-right {
        margin-right: -50px;
      }

      @media (max-width: 767px) {
        .cascading-right {
          margin-right: 0;
        }
      }

      .card {
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

  <div className="container py-4 px-3 px-md-5">
    <div className="row g-0 align-items-center">
      <div className="col-lg-6 mb-4 mb-lg-0">
        <div className="card cascading-right mx-md-5 px-4 px-md-5 rounded">
          <div className="card-body p-4 p-md-5 shadow-5 text-center">
            <h2 className="fw-bold mb-4">Login now</h2>
            <form className={classes.form} onSubmit={login} noValidate>
              <div className="form-outline mb-3">
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="userName"
                  label="userName"
                  name="userName"
                  autoComplete="userName"
                  autoFocus
                  value={userName}
                  onInput={(e) => {
                    set_userName(e.target.value);
                  }}
                />
              </div>

              <div className="form-outline mb-3">
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  value={password}
                  onInput={(e) => set_password(e.target.value)}
                />
              </div>

              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="secondary"
                className={classes.submit}
              >
                LogIn
              </Button>
            </form>
            {/* New row for the link */}
            <div className="row mt-2">
              <div className="col-10">
                <Link href="#" to="/register" variant="body2" className="link-offset-2 link-underline link-underline-opacity-0">
                  <strong>Don't have an account? Sign Up</strong>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-lg-6 mb-4 mb-lg-0 d-sm-none d-lg-block">
        <img src={Loginimg} className="img-fluid rounded-4 shadow-4 d-none d-lg-block" alt="" style={{ height: '540px', width: '550px' }} />
      </div>
    </div>
  </div>
</section>



       

    )
}


export default Login






