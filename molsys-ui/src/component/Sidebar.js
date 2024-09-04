import React from "react";
import { Link } from "react-router-dom";
import { List, ListItem, ListItemText } from "@material-ui/core";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  toolbar: theme.mixins.toolbar,
}));

const Sidebar = () => {
  const classes = useStyles();
  const { isLoggedIn, roles } = useSelector((state) => state.auth);

  let { isUser, isLab, isAnalysis, isOperator, isAdmin, isSales, isApproved } = roles;

  const allMenus = [
    { url: "/dashboard", label: "Dashboard", rule: isAdmin },
    { url: "/profile", label: "Profile", rule: isLoggedIn },
    { url: "/market", label: "MarketPlace", rule: isLoggedIn },
    { url: "/request-test", label: "Cart", rule: isUser },
    { url: "/user-history", label: "Projects", rule: isUser },
    { url: "/lab-history", label: "Projects", rule: isSales },
    { url: "/labConsultation-history", label: "Projects", rule: isLab },
    { url: "/analysisConsultation-history", label: "Projects", rule: isAnalysis },
    { url: "/pending-lab-tests", label: "Orders", rule: isSales },
    { url: "/pending-labConsultations", label: "Lab Consultations Requested", rule: isLab },
    { url: "/pending-AnalysisConsultations", label: "Analysis Consultations Requested", rule: isAnalysis },
    { url: "/update-thresholds", label: "Settings", rule: isAdmin },
    { url: "/pending-user-approvals", label: "Approve Users", rule: isAdmin },
    { url: "/view-all-requests", label: "All Requests", rule: isAdmin },
    { url: "/addProduct", label: "Add New Product", rule: isAdmin },
    { url: "/productPage", label: "Products", rule: isAdmin },
  ];

  const menusToBeDisplayed = allMenus.filter((value) => value.rule);

  return (
    <div className={classes.drawer}>
      <div className={classes.toolbar} />
      <List>
        {menusToBeDisplayed.map((menu) => (
          <ListItem button key={menu.label} component={Link} to={menu.url}>
            <ListItemText primary={menu.label} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default Sidebar;
