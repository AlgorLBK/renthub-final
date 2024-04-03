import React from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faBell, faEnvelope, faHome, faHouseChimneyUser, faHouseUser, faSearch, faUserCircle, faUsers } from '@fortawesome/free-solid-svg-icons';

const SERVER_URL = 'http://localhost:8080';

const AdminSidebar = () => {

    const location = useLocation();


  return (
    <div className="sw_panel sw_panel-styled bg-none sw_rsq-2">
      <div className="sw_panel-wrapper">
       <h4>MENU</h4>
        <hr className="sw_hr" />
        
        <ul className="dashboard-sidebar-menu sw_mt-7">
            <li  className={`sw_mb-3 ${location.pathname === '/admin' ? 'bg-coral-light sw_rsq-1' : ''}`}>
                <NavLink to="/admin" className="font_xd-2 st-black sw_ml-4">
                <button className="sw_btn sw_btn-small sw_rsq-1 font_xd-3 sw_mtb-1">
                    <FontAwesomeIcon icon={faHome} className='st-coral font_xd-3'  />
                    </button> 
                &nbsp;<span className="font_xd-3 sw_mt-2">Home</span>
                </NavLink>
                
            </li>

            <li  className={`sw_mb-3 ${location.pathname === '/admin/properties' ? 'bg-coral-light sw_rsq-1' : ''}`}>
            <NavLink to="/admin/properties"  className=" font_xd-2 st-black sw_ml-4">
            <button className="sw_btn sw_btn-small sw_rsq-1 font_xd-3 sw_mtb-1">
            <FontAwesomeIcon icon={faHouseUser} className='st-coral font_xd-3'  />
                </button>&nbsp;<span className="font_xd-3 sw_mt-2">Properties</span>
                </NavLink>
            
            </li>

            <li  className={`sw_mb-3 ${location.pathname === '/admin/accounts' ? 'bg-coral-light sw_rsq-1' : ''}`}>
            <NavLink to="/admin/accounts"  className=" font_xd-2 st-black sw_ml-4">
            <button className="sw_btn sw_btn-small sw_rsq-1 font_xd-3 sw_mtb-1">
            <FontAwesomeIcon icon={faUsers} className='st-coral font_xd-3'  />
                </button>&nbsp;<span className="font_xd-3 sw_mt-2">Accounts</span>
                </NavLink>
            
            </li>

            <li  className="sw_mb-3">
                <a href="/admin/inbox" className=" font_xd-2 st-black"> 
                <button className="sw_btn  sw_rsq-1"><i className="fa-solid fa-inbox font_xd-3 st-coral"></i></button> Inbox</a>
            </li>
        

            <li  className="sw_mb-3">
                <a href="/" className=" font_xd-2 st-black"> 
                <button className="sw_btn  sw_rsq-1"><i className="fa-solid fa-bug font_xd-3 st-coral"></i></button> Management</a>
            </li>

            <li  className="sw_mb-3">
                <a href="/" className=" font_xd-2 st-black"> 
                <button className="sw_btn  sw_rsq-1"><i className="fa-solid fa-bug font_xd-3 st-coral"></i></button> Commission</a>
            </li>

            <li  className="sw_mb-3">
                <a href="/" className=" font_xd-2 st-black"> 
                <button className="sw_btn  sw_rsq-1">
                <FontAwesomeIcon icon={faArrowRight} className='st-coral font_xd-3'  />
                    </button> Logout</a>
            </li>
        </ul>
    

                        
      </div>
    </div>
  );
};

export default AdminSidebar;
