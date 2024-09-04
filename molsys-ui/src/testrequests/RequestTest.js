// import {
//     Button,
//     Container,
//     FormControl,
//     Grid,
//     makeStyles,
//     React,
//     TextField,
//     Typography,
//     useHistory,
//     useSelector,
//     useState
// } from "../component"
// import {appNotification} from "../shared/notification/app-notification";
// import InputLabel from "@material-ui/core/InputLabel";
// import Select from "@material-ui/core/Select";
// import {doCreateTestRequest} from "./testRequestDispatcher";
// import {errorHandler} from "../shared/common-helpers";


// const useStyles = makeStyles((theme) => ({
//     paper: {
//         marginTop: theme.spacing(4),
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//     },
//     select100:{
//         width: '100%',
//     },
//     select100Form:{
//         width: '100%',
//     },
//     formControl: {
//         margin: theme.spacing(1),
//         minWidth: 120,
//     },
//     selectEmpty: {
//         marginTop: theme.spacing(2),
//     },

//     form: {
//         width: '100%', // Fix IE 11 issue.
//         marginTop: theme.spacing(3),
//     },
//     submit: {
//         margin: theme.spacing(3, 0, 2),
//     },
// }));

// function RequestTest() {

//     const classes = useStyles();
//     const history = useHistory();
//     const [forMe,setForMe] = useState(false);

//     const [service, setService] = useState('');
//     const [address, setAddress] = useState('');
//     const [quantity, setQuantity] = useState('')
//     const [email, setEmail] = useState('');
//     const [amountOfData, setAmountOfData] = useState('');
//     const [shrink, setShrink] = useState(false);
//     const [phoneNumber,setPhoneNumber] = useState("");
//     const [pinCode, setPinCode] = useState('');
//     const [isolation, setIsolation] = useState('');
//     const [analysis, setAnalysis] = useState('');
//     // const [name, setName] = useState('user');
//     // const [address, setAddress] = useState('some address ,some day');
//     // const [age, setAge] = useState('25')
//     // const [email, setEmail] = useState('user@upgrad.com');
//     // const [gender, setGender] = useState("MALE");
//     // const [phoneNumber,setPhoneNumber] = useState("45454545");
//     // const [pinCode, setPinCode] = useState('45787878');
//     const [isAgreed, setIsAgreed] = useState(false);

//     const {user} = useSelector(state => state.auth);

//     function toggleTestForMe(){
//         const toggledState = !forMe
//         setForMe(toggledState)
//         if(toggledState){


//             console.log(user)
//             setService(user.service )
//            setAddress(user.address)
//             setQuantity(user.quantity)
//             setEmail(user.email)
//             setAmountOfData(user.amountOfData)
//             setIsolation(user.isolation)
//             setAnalysis(user.analysis)

//             setPhoneNumber(user.phoneNumber)
//             setPinCode(user.pinCode)
//             setShrink(true)

//         }
//     }


//     function handleSubmit(event) {
//         event.preventDefault();

//         const payload = {

//             service,
//             quantity,
//             address,
//             amountOfData,
//             email,
//             phoneNumber,
//             pinCode,
//             isolation,
//             analysis


//         }
//         console.log(payload)

//         doCreateTestRequest(payload)
//             .subscribe((response) => {

//                 console.log("doCreateTestRequest",response)
//                 appNotification.showSuccess("Test Request Created")
//                 history.push("/user-history")
//             }, errorHandler)

//     }

//     return (
//         <React.Fragment>
//             <Container component="main" maxWidth="xs">

//                 <div className={classes.paper}>

//                     <Typography component="h1" variant="h5">
//                         Cart
//                         <hr />
//                     </Typography>


//                     <form className={classes.form} onSubmit={handleSubmit} noValidate>

//                         <Grid container spacing={2}>
//                             <Grid item xs={12} >


//                                 {/* <FormControl variant="outlined" className={classes.select100Form}>
//                                     <InputLabel htmlFor="outlined-testfor-native-simple">Cart</InputLabel>
//                                     <Select
//                                     //     native
//                                     //     value={forMe}
//                                     //     onChange={e => toggleTestForMe()}
//                                     //     label="cart"
//                                     //     className={classes.select100}
//                                     //     inputProps={{
//                                     //         name: 'testfor',
//                                     //         id: 'select-test-for-me',
//                                     //     }}
//                                     // >
//                                     //     <option value="true">Myself</option>
//                                     //     <option value="false">Other</option>
//                                     </Select>
//                                 </FormControl> */}




//                             </Grid>

//                             <Grid item xs={12} sm={6}>
//                                 <TextField
//                                     variant="outlined"
//                                     value={service}
//                                     onInput={e => setService(e.target.value)}
//                                     required
//                                     fullWidth
//                                     id="service"
//                                     label="service"
//                                     name="name"
//                                     autoComplete="name"
//                                 />
//                             </Grid>
//                             <Grid item xs={12} sm={6}>
//                                 <TextField
//                                     variant="outlined"
//                                     value={quantity}
//                                     onInput={e => setQuantity(e.target.value)}
//                                     required
//                                     fullWidth
//                                     id="quantity"
//                                     label="Quantity"
//                                     name="quantity"
//                                     autoComplete="quantity"
//                                 />
//                             </Grid>

//                             <Grid item xs={12} sm={6}>
//                                 <TextField
//                                     variant="outlined"
//                                     value={isolation}
//                                     onInput={e => setIsolation(e.target.value)}
//                                     required
//                                     fullWidth
//                                     id="isolation"
//                                     label="isolation"
//                                     name="isolation"
//                                     autoComplete="isolation"
//                                     type="text"
//                                 />
//                             </Grid>

//                             <Grid item xs={12} sm={6}>
//                                 <TextField
//                                     variant="outlined"
//                                     value={analysis}
//                                     onInput={e => setAnalysis(e.target.value)}
//                                     required
//                                     fullWidth
//                                     id="analysis"
//                                     label="analysis"
//                                     name="analysis"
//                                     autoComplete="analysis"
//                                     type="text"
//                                 />
//                             </Grid>



//                             <Grid item xs={12}>
//                                 <TextField
//                                     variant="outlined"
//                                     value={amountOfData}
//                                     onInput={e => setAmountOfData(e.target.value)}
//                                     required
//                                     fullWidth
//                                     name="amountOfData"
//                                     label="amountOfData"
//                                     type="text"
//                                     id="amountOfData"
//                                 />
//                             </Grid>



//                             <Grid item xs={12}>
//                                 <TextField
//                                     variant="outlined"
//                                     value={email}
//                                     onInput={e => setEmail(e.target.value)}
//                                     required
//                                     fullWidth
//                                     id="email"
//                                     label="Email Address"
//                                     name="email"
//                                     autoComplete="email"
//                                 />
//                             </Grid>

//                             <Grid item xs={12}>
//                                 <TextField
//                                     variant="outlined"
//                                     value={phoneNumber}
//                                     onInput={e => setPhoneNumber(e.target.value)}
//                                     required
//                                     fullWidth
//                                     name="mobile"
//                                     label="Mobile No."
//                                     type="text"
//                                     id="mobile"
//                                 />
//                             </Grid>
//                             <Grid item xs={12}>
//                                 <TextField
//                                     variant="outlined"
//                                     value={address}
//                                     onInput={e => setAddress(e.target.value)}
//                                     required
//                                     fullWidth
//                                     name="address"
//                                     label="Address"
//                                     type="text"
//                                     id="address"
//                                 />
//                             </Grid>

//                             <Grid item xs={12}>
//                                 <TextField
//                                     variant="outlined"
//                                     value={pinCode}
//                                     onInput={e => setPinCode(e.target.value)}
//                                     required
//                                     fullWidth
//                                     name="pinCode"
//                                     label="pinCode"
//                                     type="number"
//                                     id="pinCode"
//                                 />
//                             </Grid>
//                         </Grid>
//                         <Button
//                             type="submit"
//                             fullWidth
//                             variant="contained"
//                             color="primary"
//                             className={classes.submit}
//                         >
//                             Request a Quate
//                         </Button>
//                     </form>
//                 </div>

//             </Container>
//         </React.Fragment>

//     )


// }

// export default RequestTest
