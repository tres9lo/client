import React from 'react';

const Navbar = () => {
  return (
    <div className="nav-container"> {/* Use className instead of class */}
      <div className="nav-header">
        <p>Dev Community</p>
<div className="links">
    <p>Home</p>
    <p>History</p>
    <p>Notifications</p>
    <p>Profile</p>
    <p className="session-button">New Session</p>

</div>
      </div>
    </div>
  );
};

export default Navbar;
