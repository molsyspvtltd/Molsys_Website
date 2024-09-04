import {AppBar, Button, Link, React, Toolbar, Typography, useDispatch, useHistory, useSelector,} from "./index"
import {Tabs,Tab} from '@material-ui/core';
import {Menu,MenuItem,IconButton,Avatar} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles';
import logo from '../assets/logo.png' 
import {useLocation} from 'react-router-dom';
import {doLogout} from "../auth/authDispatcher";
import {useState} from "react";
import DrawerComp from './DrawerComp';
import Sidebar from "./Sidebar";
import Badge from '@material-ui/core/Badge';
import NotificationsIcon from '@material-ui/icons/Notifications';
import SearchIcon from '@material-ui/icons/Search';
import SearchBar from "./SearchBar";
import BookData from "./Data.json";


const useStyles = makeStyles((theme) => ({

    '@global': {
        body: {
            backgroundColor: '#e6e6e6'
        },
        ul: {
            margin: 0,
            padding: 0,
            listStyle: 'none',
        },
    },
    appBar: {
        borderBottom: `2px solid ${theme.palette.divider}`,
    },
    toolbar: {
        flexWrap: 'wrap',
    },
    toolbarTitle: {
        flexGrow: 1,
    },
    link: {
        margin: theme.spacing(1, 1),
    },
    activeLink: {
        margin: theme.spacing(1, 1.5),
        backgroundColor: "#46c780",
        color: "#ffffff",
        '&:hover': {
            color: "#252626",
            backgroundColor: "#ffffff",
            border:'1px solid #252626'
        },
    },


}));


function Navbar(props) {

    const dispatch = useDispatch()
    const history = useHistory();
const location =useLocation();

    function logout() {

        doLogout(dispatch, history)


    }

    const classes = useStyles();
    const {user, token, isLoggedIn, roles} = useSelector(state => state.auth);

    const userName = user ? user.name : 'uhh'; 


    let {isUser, isLab,isAnalysis,isOperator, isAdmin, isSales,isApproved} = roles

    const isNotAdmin = (isLoggedIn == true) && (isAdmin == false);
    const isNotLoggedIn = !isLoggedIn




    const allMenus = [
        {url: "/dashboard", label: "Dashboard", rule: isAdmin},
        {url: "/market", label: "MarketPlace", rule: isUser},
        {url: "/cart", label: "Cart", rule: isUser},
        {url: "/user-history", label: "Projects", rule: isUser},
        {url: "/lab-history", label: "Projects", rule: isSales},
        {url: "/labConsultation-history", label: "Projects", rule: isLab},
        {url: "/analysisConsultation-history", label: "Projects", rule: isAnalysis},
        {url: "/pending-lab-tests", label: "Orders", rule: isSales},
        {url: "/pending-labConsultations", label: "Lab Consultations Requested", rule: isLab},
        {url: "/pending-AnalysisConsultations", label: "Analysis Consultations Requested", rule: isAnalysis},
        {url: "/update-thresholds", label: "Settings", rule: isAdmin},
        {url: "/pending-user-approvals", label: "Approve Users", rule: isAdmin},
        {url: "/view-all-requests", label: "All Requests", rule: isAdmin},
        {url: "/addProduct", label: "Add New Product", rule: isAdmin},
        {url: "/productPage", label: "Products", rule: isAdmin},
  
  
    ];

    const currentPath =location.pathname


    const menusToBeDisplayed = allMenus.filter(value => value.rule).map(item=>{

        const menuClassName = (item.url == currentPath)? classes.activeLink:classes.link;
        return {...item, menuClassName}

    })
    

    const [value, setValue] =useState();

    const renderNavigationItems = () => {
      if (!isLoggedIn) {
          return (
            
            
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 navbar-light bg-light" style={{ marginLeft: "-50px" }}>
                  {/* navigation items for not logged-in */}   
                  <li className="nav-item  ">
                      <a className="nav-link" aria-current="page" href="/aboutUs">About Us</a>
                  </li>
                  <li className="nav-item mx-2 ">
                      <a className="nav-link" aria-current="page" href="/market">Services</a>
                  </li>
                  <li className="nav-item mx-2">
                      <a className="nav-link " href="/contactUs">Contact Us</a>
                  </li>
                  <li className="nav-item mx-2" >
                      <a className="nav-link" href="/login"  >MolsysT</a>
                  </li>
                  <li className="nav-item mx-2" >
                      <a className="nav-link" href="/pms"  >PMS</a>
                  </li>
                  <li className="nav-item mx-2" >
                      <a className="nav-link" href="/g-cell"  >G-Cell</a>
                  </li>
              </ul>
              
          );
      }
      return null; // Return null if user is logged in (no navigation items)
  };
    
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenuClick = (event) => {
      setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
      setAnchorEl(null);
  };

  const handleNotificationClick = () => {
    // Add your notification functionality here
    // For example, you can redirect to a notifications page or display a notification popup
};


  const renderProfileMenu = () => {
      return (
          <Menu
              anchorEl={anchorEl}
              anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
              id="profile-menu"
              keepMounted
              transformOrigin={{ vertical: 'top', horizontal: 'right' }}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
          >
              {isLoggedIn && (
                  <>
                      <MenuItem onClick={handleMenuClose} component={Link} to="/profile">
                          Profile
                      </MenuItem>
                      <MenuItem onClick={logout} component={Link} to="/logout">
                          Logout
                      </MenuItem>
                  </>
              )}
          </Menu>
      );
  };


    return (

      <div>
   <div>
        
        <nav className="navbar shadow navbar-expand-lg navbar-light bg-light fixed-top">
    <div className="container-fluid">
      <a className="navbar-brand mx-5" href="/"> <img src={logo} height={35} width={130}/>
      </a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse mx-5 px-5 " id="navbarSupportedContent">
        
         {renderNavigationItems()}
        
         {isLoggedIn && (
                                <Tabs value={value} onChange={(event, newValue) => setValue(newValue)} aria-label="nav tabs example">
                                    {menusToBeDisplayed.map((menu, index) => (
                                        <Tab
                                            key={index}
                                            label={menu.label}
                                            component={Link}
                                            to={menu.url}
                                            className={menu.menuClassName}
                                        />
                                    ))}
                                </Tabs>
                            )}
                            
                           
         

                      <div className="me-auto">
                        <SearchBar placeholder="Enter your Search..." data={BookData} />
                        </div>
                        {isLoggedIn && (
                                <div >
                                     <IconButton color="inherit" onClick={handleNotificationClick} className="mx-3">
                                        <Badge badgeContent={5} color="secondary">
                                            <NotificationsIcon />
                                        </Badge>
                                    </IconButton>
                                    <IconButton color="inherit" onClick={handleMenuClick}>
                                        <Avatar alt="Profile" >
                                        {userName ? userName.split(' ')[0].charAt(0).toUpperCase() : null}
                                            
                                        </Avatar>
                                    </IconButton>
                                    {renderProfileMenu()}
                                    
                                </div>
                            )}


      </div>
    </div>
  </nav>
  
  </div> 
  <div>
    {/* {isLoggedIn && <DrawerComp />} Render DrawerComp only when logged in */}
    </div>
  </div>

    )
}


export default Navbar
