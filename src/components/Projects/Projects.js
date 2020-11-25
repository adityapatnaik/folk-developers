import React,{useContext} from "react";
import "./Projects.css";
import ProjectCard from '../ProjectCard/ProjectCard'
import { projects } from '../data'
import {GlobalState} from '../../App'

export default function Projects() {
  const {  state  } = useContext(GlobalState)
  console.log("Entering projects")

  return <div className="projects">
     {
        state.projects.map((job,index)=>{
            return(<ProjectCard key={index} title={job.title} />)
        })
      }
  </div>;
}
