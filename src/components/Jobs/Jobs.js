import React,{useContext} from "react";
import "./Jobs.css";
import JobCard from '../JobCard/JobCard'
import { jobs } from '../data'
import {GlobalState} from '../../App'

export default function Jobs() {
  const {  state  } = useContext(GlobalState)
  
  return <div className="jobs">
      {
        state.jobs.map((job,index)=>{
            return(<JobCard key={index} title={job.title} />)
        })
      }
     
    </div>;
}
