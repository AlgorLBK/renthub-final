import React from 'react';
import { NavLink } from 'react-router-dom';

const TenantSidebar = () => {
  return (
    <div className="sw_panel sw_panel-styled bg-none sw_rsq-2">
      <div className="sw_panel-wrapper">
       <h4>MENU</h4>
        <hr className="sw_hr" />
        
        <ul className="dashboard-sidebar-menu sw_mt-7">
            <li className="sw_mb-3">
                <NavLink to="/tenant"  className=" font_xd-2 st-black" activeClassName="dashboard-sidebar-active">
                <button className="sw_btn sw_rsq-1"><i className="fa-solid fa-home font_xd-3 st-coral"></i></button> Home
                </NavLink>
                {/* <a href="/" className=" font_xd-2 st-black"> 
                <button className="sw_btn sw_rsq-1"><i className="fa-solid fa-home font_xd-3 st-coral"></i></button> Home</a> */}
            </li>

            <li  className="sw_mb-3">
            <NavLink to="/tenant/lease"  className=" font_xd-2 st-black" activeClassName="dashboard-sidebar-active">
            <button className="sw_btn  sw_rsq-1"><i className="fa-solid fa-house-chimney-user font_xd-3 st-coral"></i></button> Lease
                </NavLink>
                
                {/* <a href="/" className=" font_xd-2 st-black"> 
                <button className="sw_btn  sw_rsq-1"><i className="fa-solid fa-house-chimney-user font_xd-3 st-coral"></i></button> Properties</a> */}
            </li>

            <li  className="sw_mb-3">
                <NavLink to="/tenant/maintenance-and-utilities"  className=" font_xd-2 st-black" activeClassName="dashboard-sidebar-active">
                <button className="sw_btn  sw_rsq-1"><i className="fa-solid fa-house-chimney-user font_xd-3 st-coral"></i></button> Maintenance & Utilities
                    </NavLink>
                    
                    {/* <a href="/" className=" font_xd-2 st-black"> 
                    <button className="sw_btn  sw_rsq-1"><i className="fa-solid fa-house-chimney-user font_xd-3 st-coral"></i></button> Properties</a> */}
            </li>

            

            <li  className="sw_mb-3">
                <a href="/tenant/inbox" className=" font_xd-2 st-black"> 
                <button className="sw_btn  sw_rsq-1"><i className="fa-solid fa-inbox font_xd-3 st-coral"></i></button> Inbox</a>
            </li>

          
            <li  className="sw_mb-3">
                <a href="/tenant/report-issue" className=" font_xd-2 st-black"> 
                <button className="sw_btn  sw_rsq-1"><i className="fa-solid fa-bug font_xd-3 st-coral"></i></button> Report Issue</a>
            </li>

            <li  className="sw_mb-3">
                <a href="/" className=" font_xd-2 st-black"> 
                <button className="sw_btn  sw_rsq-1"><i className="fa-solid fa-arrow-right-from-bracket font_xd-3 st-coral"></i></button> Logout</a>
            </li>
        </ul>
    

                        
      </div>
    </div>
  );
};

export default TenantSidebar;
