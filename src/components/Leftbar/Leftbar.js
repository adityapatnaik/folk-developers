import React from "react";
import "./Leftbar.css";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import WorkIcon from "@material-ui/icons/Work";
import AccountTreeIcon from "@material-ui/icons/AccountTree";
import SearchIcon from "@material-ui/icons/Search";
import { Link } from "react-router-dom";
export default function Leftbar() {
  return (
    <div className="leftbar">
      <div className="filler-topleft"></div>
      <Link className="nav-links" to="/dashboard/profile">
        <AccountCircleIcon />
      </Link>
      <Link className="nav-links" to="/dashboard/search">
        <SearchIcon />
      </Link>
      <Link className="nav-links" to="/dashboard/jobs">
        <WorkIcon />
      </Link>
      <Link className="nav-links" to="/dashboard/projects">
        <AccountTreeIcon />
      </Link>
    </div>
  );
}
