import React from "react";
import "./Dashboard.css";
import { Switch, Route } from "react-router-dom";
import Profile from "../Profile/Profile";
import Navbar from "../Navbar/Navbar";
import Leftbar from "../Leftbar/Leftbar";
import Projects from "../Projects/Projects";
import Jobs from "../Jobs/Jobs";

export default function Dashboard() {
  return (
    <div className="dashboard">
      <Navbar />
      <Leftbar />
      <div></div>
      <div className="content">
        <Switch>
          <Route exact path="/" component={Profile} />
          <Route exact path="/dashboard/profile" component={Profile} />
          <Route exact path="/dashboard/projects" component={Projects} />
          <Route exact path="/dashboard/jobs" component={Jobs} />
        </Switch>
      </div>
      <div></div>
    </div>
  );
}
