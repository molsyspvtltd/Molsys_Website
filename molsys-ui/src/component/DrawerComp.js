import React from "react";
import { Drawer, Hidden } from "@material-ui/core";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";

function DrawerComp(props) {
  return (
    <div className="container-fluid mt-2">
      <div className="row">
        
      </div>
      <div className="row">
        {/* Drawer */}
        <Hidden mdUp implementation="css">
          <Drawer variant="temporary" anchor="left" open={props.mobileOpen} onClose={props.handleDrawerToggle} >
            <div className="container mt-5 pt-5">
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <Sidebar />
            </div>
          </Drawer>
        </Hidden>
        <Hidden smDown implementation="css">
          <Drawer variant="permanent" open>
            <div className="container mt-5 pt-5">
              <Sidebar />
            </div>
          </Drawer>
        </Hidden>
        {/* Main content */}
        <div className="col">
          {props.children}
        </div>
      </div>
    </div>
  );
}

export default DrawerComp;
