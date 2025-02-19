import React from 'react'
import {  BsPencil, BsPersonFillCheck, BsThreeDotsVertical} from 'react-icons/bs';

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
        
        
    </div>
  )
}

export default Sidebar