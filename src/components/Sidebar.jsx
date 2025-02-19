import React from 'react'
import {  BsPencil, BsPersonFillCheck, BsPlusCircle, BsThreeDotsVertical} from 'react-icons/bs';

const Sidebar = () => {
  return (
    <div className="side-container">
        <div className="menu"><BsThreeDotsVertical/></div>
      <div className="title-session"><BsPersonFillCheck/></div>
      <div className="recents">
        <div className='Profile'>
        <h3>Jhonny Smith</h3><p><BsPencil/></p>
        </div>
        <p className='sub-title'>Creative Frontend Developer</p>
        </div>

        <div className="status">
            <h3>STATUS</h3>
            <p>Available</p>
        </div>

        <div className="projects">
            <h3>PROJECTS</h3>
            <p><BsPlusCircle/></p>
            
        </div>
        <div className="project-list">
                <p>Project 1</p>
                <p>Project 2</p>
                <p>Project 3</p>
            </div>
        
        <div className="other-content">
            <h3>Other Content</h3>
            <p>WorkFlows <div className="count">5</div></p>
        </div>
        
    </div>
  )
}

export default Sidebar