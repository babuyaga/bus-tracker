import React from 'react';
import './navcontrol.css';
import UserLocationIcon from './icons/UserLocationIcon';


function NavControl() {
  return ( <div className="footer-control">
            <div className="navcontrol-button bus-location--button"></div>
            <div className="navcontrol-button user-location--button"><UserLocationIcon/></div>

  </div>
  );
}


export default NavControl;
