import React from 'react'
import { BsExclamationCircleFill } from 'react-icons/bs'
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const progressData = [
  { name: "Designing", progress: 54 },
  { name: "Development", progress: 68 },
  { name: "Content", progress: 74 },
  { name: "Market", progress: 55 },
];


function Navbar(){
  return (
    <div className="main-bar-content">
    <div className='nav-container'><h3>Dev Community</h3> <h5>Activity<BsExclamationCircleFill/></h5></div>
    <div className="charts-container">
      {/* Progress Section */}
      <div className="card">
        <h2>Total Progress</h2>
        <div className="progress-circle">
          <CircularProgressbar value={71}         styles={buildStyles({
          pathColor:"#333333" , // Green, Yellow, Red
          textColor: "#33333",
          trailColor: "#eee",
        })} text="71%" />
        </div>
      </div>

      {/* Category Progress Section */}
      <div className="card">
        <h2>Category Progress</h2>
        <ul className="progress-list">
          {progressData.map((item) => (
            <li key={item.name} className="progress-item">
              <span>{item.name}</span>
              <div className="small-progress">
                <CircularProgressbar value={item.progress} text={`${item.progress}%`} styles={buildStyles({
          pathColor:"#333333" , // Green, Yellow, Red
          textColor: "#33333",
          trailColor: "#eee",
        })} />
              </div>
            </li>
          ))}
        </ul>
      </div>
      
    </div>
    <div className="modern-notifications"></div>

    </div>
   
  )
}

export default Navbar