import React from "react";
import { DashboardNavbar } from "../../components/default/DashboardNavbar";
import TenantSidebar from "../../components/tenant/TenantSidebar";
import { Welcome } from "../../components/Welcome";
import Footer from "../../components/default/Footer";

export const MaintenanceAndUtility = () => {
    return (
        <>  
            <DashboardNavbar user={"Tenant"}></DashboardNavbar>

            <div className="sw_wrapper sw_mt-8">
                <div className="sw_grid-row">
                    <div className="sw_grid sw_grid-20">
                        <TenantSidebar></TenantSidebar>
                    </div>
                    <div className="sw_grid sw_grid-80 ">
                        <Welcome user={'Divine'}></Welcome>

                        <div className="sw_grid-row">
            <div className="sw_grid sw_grid-half">
                <div className="sw_panel sw_panel-styled bg-none sw_rsq-1">
                    <div className="sw_panel-wrapper">
                        
                        
                        <p className="font_xd-1 sw_mb-3">Quickly submit maintenance requests that go directly to our maintenance queue</p>

                            <form action="" className="sw_form">
                                <label for="name">Maintenance Required*</label>
                                <input type="text" className="sw_form-input sw_rsq-1" placeholder="Enter name" />

                                <label for="name">Part of building*</label>
                                <input type="text" className="sw_form-input sw_rsq-1" placeholder="e.g. basement" />


                                <input type="submit" className="sw_btn sw_btn-block bg-coral st-white sw_rsq-1" value="SEND REQUEST" />
                            
                            </form>
                    </div>
                </div>
            </div>
            <div className="sw_grid sw_grid-half">
                <div className="sw_grid-row">
                    <div className="sw_grid sw_grid-half">
                        <div className="sw_panel sw_rsq-2">
                            <div className="sw_panel-wrapper st_align-center">
                                <h2>Requests Sent</h2>
                                <h3>5</h3>
                                <a href="" className="sw_btn sw_rsq-1 sw_plr-7 bg-coral st-white sw_mt-3">View</a>
                            </div>
                        </div>
                    </div>
                    <div className="sw_grid sw_grid-half">
                    <div className="sw_panel sw_rsq-2">
                            <div className="sw_panel-wrapper st_align-center">
                                <h2>Maintenance Done</h2>
                                <h3>15</h3>
                                <a href="" className="sw_btn sw_rsq-1 sw_plr-7 bg-coral st-white sw_mt-3">View</a>
                            </div>
                        </div>
                    </div>

                    <div className="sw_grid sw_grid-100">
                        <a href="" className="sw_btn sw_rsq-1 sw_btn-block bg-coral st-white sw_mt-3">
                            <i className="fa-regular fa-credit-card"></i>
                        Pay Maintenance Fee
                    </a>

                    <a href="" className="sw_btn sw_rsq-1 sw_btn-block bg-coral st-white sw_mt-3">
                            <i className="fa-solid fa-message"></i>
                        Chat With Us
                    </a>
                    </div>
                
            </div>
        </div>
    </div>
    
                    </div>
                </div>
            </div>
            <Footer></Footer>

            
        </>
    );
}