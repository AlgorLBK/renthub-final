import React, { useState } from  'react';

const NavDropdown = () => {

    const [isOpen, setIsOpen] = useState(false);
  
    const handleToggle = () => {
      setIsOpen(!isOpen);
    };
  
    const handleClickOutside = (event) => {
      if (!event.target.closest('.sw_dropdown')) {
        setIsOpen(false);
      }
    };
  
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    return (
        <li className="sw_navbar-menu sw_dropdown sw_mr-3 font_xd-2">
            <a href="javascript:void(0)" className={`sw_navbar-link sw_dropdown-trigger st-white ${isOpen ? 'active' : ''}`} onClick={handleToggle}>Account</a>
            <ul className={`sw_dropdown-content sw_dropdown-content-small bg-white sw_rsq-1 ${isOpen ? 'sw_ds-block' : ''}`}>
                <li className="sw_dropdown-menu sw_dropdown-header">My Account</li>
                <div className="sw_dropdown-divider"></div>
                <li><a className="sw_dropdown-menu" href="/register">Register</a></li>
                <li><a className="sw_dropdown-menu" href="/login">Login</a></li>
                <div className="sw_dropdown-divider"></div>
                <li><a className="sw_dropdown-menu" href="/help">Help</a></li>
            </ul>
        </li>
    );
}

export default NavDropdown;