import React from "react";
import { DashboardNavbar } from "../../components/default/DashboardNavbar";
import TenantSidebar from "../../components/tenant/TenantSidebar";
import { Welcome } from "../../components/Welcome";
import { ReportIssue } from "../../components/user/ReportIssue";
import Footer from "../../components/default/Footer";

export const TenantReportIssue = () => {
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
                       <ReportIssue></ReportIssue>

                    </div>
                </div>
            </div>
            <Footer></Footer>

            
        </>
    );
}