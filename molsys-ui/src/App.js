import {CssBaseline, makeStyles, React, Route, Router, Switch, UINavBar,} from "./component"



import './App.css';
import {useSelector} from "react-redux";
import {useEffect} from "react";
import {setAuthToken} from "./auth/authDispatcher";
import GuardedRoute from "./shared/GuardedRoute";
import UpdateLabResult from "./lab/UpdateLabResult";
import PendingLabConsultations from "./labConsultation/PendingLabConsultations";
import UpdateLabConsultation from "./labConsultation/UpdateLabConsultation";
import PendingAnalysisConsultations from "./analysisConsultation/PendingAnalysisConsultations";
import UpdateAnalysisConsultation from "./analysisConsultation/UpdateAnalysisConsultation";
import UserHistory from "./testrequests/UserHistory";

import UpdateThreshold from "./authority/UpdateThreshold";
import ViewAllRequests from "./authority/ViewAllRequests";
import AppNotificationComponent from "./shared/notification/app-notification-component";
import Register from "./auth/Register";
import {UploadDocument} from "./documents/UploadDocument";
import PendingApprovals from "./authority/PendingApprovals";
import LoadingIndicatorComponent from "./shared/loader/loading-indicator-component";
import ConfirmMessageComponent from "./shared/confirm/confirm-message-component";
import PendingLabTests from "./lab/PendingLabTests";
import LabHistory from "./lab/LabHistory";
import LabConsultationHistory from "./labConsultation/LabConsultationHistory";
import AnalysisConsultationHistory from "./analysisConsultation/AnalysisConsultationHistory";
import Profile from "./profile/Profile";
import RequestTest from "./testrequests/RequestTest";
import Login from "./auth/Login";
import AboutUS from "./Pages/AboutUS";
import ContactUs from "./Pages/Contact";
import Home  from "./Pages/Home";
import Services from "./Pages/Services";
import AuthorityDashboard from "./authority/AuthorityDashboard";
import Drawer from './component/DrawerComp';
import Marketplacesub from "./Pages/Marketplace";
import Pms from './Pages/Pms';
import G_cell from './Pages/G_Cell';
import WellnessAssessment from "./Pages/WellnessAssessment";

import Marketplace from "./Pages/Marketplace";


import {Redirect} from "react-router-dom";
import Footer from './component/Footer';
import Documents from "./Pages/Documents";
import AddProduct from './add-new-product/AddProduct';
import AddCategory from './add-new-product/AddCategory';
import AddSubcategory from './add-new-product/AddSubcategory';
import Cart from './Pages/Cart';
import Market from './Pages/Market';
import WholeGenomeSequencing from './Servicespages/WholeGenomeSequencing';
import rnaSequencing from './Servicespages/rnaSequencing';
import MetagenomeAnalysisPage from './Servicespages/MetagenomeAnalysisPage';
import SmallRNASeqPage from './Servicespages/SmallRNASeqPage';
import ChIPSeqPage from './Servicespages/ChIPSeqPage';
import WholeGenomeReSeqPage from './Servicespages/WholeGenomeRe-SeqPage';
import WholeExomeAnalysisPage from './Servicespages/WholeExomeAnalysisPage';
import BiocloudServicesPage from './Servicespages/BiocloudServicesPage';
import SampleIsolationPage from './Servicespages/SampleIsolationPage';
import WholeGenomeSeqGen from './Servicespages/WholeGenomeSeqGen';
import SMetagenomeSequencing from './Servicespages/16SMetagenomeSequencing';
import ITSMetagenomeSequencing from './Servicespages/ITSMetagenomeSequencing';
import GenotypingbySequencing from './Servicespages/GenotypingbySequencing';
import Agrigenotyping from './Servicespages/Agrigenotyping';
import LivestockGenotyping from './Servicespages/LivestockGenotyping';
import PetGenotyping from './Servicespages/PetGenotyping';
import MouseArrays from './Servicespages/MouseArrays';
import HumanArrays from './Servicespages/HumanArrays';
import MetaTranscriptomeAnalysisPage from './Servicespages/MetaTranscriptomeAnalysisPage';
import OligosForm from './forms/OligosForm';
import DataGenerationform from './forms/DataGenerationform';
import DataAnalysisform from './forms/DataAnalysisform';
import notification from './shared/notification/notificationpopup';
import Careers from "./Pages/Careers";
import Privacypolicy from "./Pages/Privacypolicy";




const useStyles = makeStyles((theme) => ({

  '@global': {
    body: {
      backgroundColor: '#e6e6e6'
    },
    footer:{
      marginTop:'calc(5% + 60px)',
      bottom: 0
    }
  },
  footer:{
    marginTop:'calc(5% + 60px)',
    bottom: 0
  }


}));


function App() {
  const classes = useStyles();
  const {user,token,isLoggedIn,roles} = useSelector(state => state.auth);

  const auth = {user,token,isLoggedIn,roles}

  let  {isUser,isLab,isAnalysis,isOperator,isAdmin,isSales,isApproved} = roles



  let homePage = '/home'

  if(isLoggedIn)
    homePage ='/profile'

  useEffect(() => {


    if(token && user){
      setAuthToken(token)

    }

  }, [token]);

  return (<React.Fragment>

        <LoadingIndicatorComponent></LoadingIndicatorComponent>
        <UINavBar />
        {/* {isLoggedIn && <Drawer />} */}
        <ConfirmMessageComponent/>
        <Switch >
          <Route path='/home' component={Home} /> 
          <Route path='/aboutUs' component={AboutUS} />
          <Route path='/contactUs' component={ContactUs} />
          {/* <Route path='/services' component={Services} /> */}
          <Route path='/documents' component={Documents} />
          <Route path='/Market' component={Market} />
          <Route path='/pms' component={Pms} />
          <Route path='/g-cell' component={G_cell} />
          <Route path='/Privacypolicy' component={Privacypolicy} />
          <Route path='/Careers' component={Careers} />
          <Route path='/wellnessAssessment' component={WellnessAssessment} />
          
      
          
          <Route path="/login">
            <Login />
            
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/upload-document/:role/:id">
            <UploadDocument />
          </Route>
          
          <GuardedRoute path='/profile' component={Profile} auth={isLoggedIn} />
          {/* <GuardedRoute path='/serviceplace' component={ServicePlace} auth={isLoggedIn} /> */}
          <GuardedRoute path='/Marketplacesub' component={Marketplacesub} auth={isLoggedIn} />
          <GuardedRoute path='/marketplace' component={Marketplace} auth={isLoggedIn} />
          <GuardedRoute path='/request-test' component={RequestTest} auth={isUser} />

          <GuardedRoute path='/user-history' component={UserHistory} auth={isUser} />

          {/* <GuardedRoute path='/test-detail/:id' component={TestDetail} auth={isLoggedIn} /> */}
          <GuardedRoute path='/lab-history' component={LabHistory} auth={isSales} />

          <GuardedRoute path='/pending-lab-tests' component={PendingLabTests} auth={isSales} />
          <GuardedRoute path='/update-lab-report/:id' component={UpdateLabResult} auth={isSales} />


          <GuardedRoute path='/labConsultation-history' component={LabConsultationHistory} auth={isLab} />
          <GuardedRoute path='/pending-labConsultations' component={PendingLabConsultations} auth={isLab} />
          <GuardedRoute path='/update-labConsultation/:id' component={UpdateLabConsultation} auth={isLab} />

          <GuardedRoute path='/analysisConsultation-history' component={AnalysisConsultationHistory} auth={isAnalysis} />
          <GuardedRoute path='/pending-analysisConsultations' component={PendingAnalysisConsultations} auth={isAnalysis} />
          <GuardedRoute path='/update-analysisConsultation/:id' component={UpdateAnalysisConsultation} auth={isAnalysis} />

          <GuardedRoute path='/update-thresholds' component={UpdateThreshold} auth={isAdmin} />
          <GuardedRoute path='/pending-user-approvals' component={PendingApprovals} auth={isAdmin} />
          <GuardedRoute path='/view-all-requests' component={ViewAllRequests} auth={isAdmin} />
          <GuardedRoute path='/dashboard' component={AuthorityDashboard} auth={isAdmin} />
          {/* <GuardedRoute path='/productPage' component={ProductPage} auth={isAdmin} /> */}
          {/* <GuardedRoute path='/addProduct' component={AddProduct} auth={isAdmin} /> */}

          <GuardedRoute path='/addCategory' component={AddCategory} auth={isAdmin}/>
          <GuardedRoute path='/addSubcategory' component={AddSubcategory} auth={isAdmin}/>
          <GuardedRoute path='/addProduct' component={AddProduct} auth={isAdmin}/>
          <GuardedRoute path='/cart' component={Cart} auth={isUser}/>
        
          <Route path='/WholeGenomeSequencing' component={WholeGenomeSequencing}/>
          <Route path='/rnaSequencing' component={rnaSequencing} />
          <Route path='/MetagenomeAnalysisPage' component={MetagenomeAnalysisPage} />
          <Route path='/SmallRNASeqPage' component={SmallRNASeqPage} />
          <Route path='/ChIPSeqPage' component={ChIPSeqPage} />
          <Route path='/WholeGenomeReSeqPage' component={WholeGenomeReSeqPage} />
          <Route path='/WholeExomeAnalysisPage' component={WholeExomeAnalysisPage} />
          <Route path='/BiocloudServicesPage' component={BiocloudServicesPage} />
          <Route path='/SampleIsolationPage' component={SampleIsolationPage}/>
          <Route path='/WholeGenomeSeqGen' component={WholeGenomeSeqGen} />
          <Route path='/SMetagenomeSequencing' component={SMetagenomeSequencing}/>
          <Route path='/ITSMetagenomeSequencing' component={ITSMetagenomeSequencing} />
          <Route path='/GenotypingbySequencing' component={GenotypingbySequencing}/>
          <Route path='/Agrigenotyping' component={Agrigenotyping} auth={isLoggedIn}/>
          <Route path='/LivestockGenotyping' component={LivestockGenotyping}/>
          <Route path='/PetGenotyping' component={PetGenotyping}/>
          <Route path='/MouseArrays' component={MouseArrays}/>
          <Route path='/HumanArrays' component={HumanArrays}/>
          <Route path='/MetaTranscriptomeAnalysisPage' component={MetaTranscriptomeAnalysisPage}/>
          <Route path='/OligosForm' component={OligosForm} />
          <Route path='/DataGenerationform' component={DataGenerationform}/>
          <Route path='/DataAnalysisform' component={DataAnalysisform}/>
          <Route path='/notification' component={notification}  />
          
          


          {/*<Route path="/tests-requested">*/}
          {/*  <TestsRequested />*/}
          {/*</Route>*/}
          {/*<Route path="/test-result">*/}
          {/*  <TestResult />*/}
          {/*</Route>*/}
          {/*<Route path="/take-sample">*/}
          {/*  <TakeSample />*/}
          {/*</Route>*/}

          <Route path="/">
            <Redirect to={homePage} />
          </Route>
        </Switch>
        <Footer />
        
        <AppNotificationComponent/>


    </React.Fragment>

  );
}

export default App;




