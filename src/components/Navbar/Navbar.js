import React from "react";
import "./Navbar.css";
import MenuIcon from "@material-ui/icons/Menu";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Brightness2Icon from "@material-ui/icons/Brightness2";
import ImportExportIcon from "@material-ui/icons/ImportExport";
//import IconButton from "@material-ui/core/IconButton";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="title">
        <MenuIcon />
      </div>
      <div className="options">
        <div className="reputation-container">
          <ImportExportIcon />
          12.6k
        </div>
        <NotificationsIcon />
        <Brightness2Icon />
        <MoreVertIcon />
      </div>
    </div>
  );
}
