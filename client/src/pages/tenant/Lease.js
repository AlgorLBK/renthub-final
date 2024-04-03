import React from "react";
import { DashboardNavbar } from "../../components/default/DashboardNavbar";
import TenantSidebar from "../../components/tenant/TenantSidebar";
import { Welcome } from "../../components/Welcome";
import Footer from "../../components/default/Footer";

const announcementData = [
    {
      id: 1,
     heading: "apartment flooding fixed",
      details: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid amet assumenda eius vel voluptates.'
    },
    {
        id: 2,
        heading: "Plumbing requested",
        details: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid amet assumenda eius vel voluptates. '
    },
    {
        id: 3,
        heading: "gas leak fixed",
        details: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid amet assumenda eius vel voluptates. '
      },
      
    
  ];

export const TenantLease = () => {
    return (
        <>  
            <DashboardNavbar user={"Tenant"}></DashboardNavbar>

            <div className="sw_wrapper sw_mt-8">
                <div className="sw_grid-row">
                    <div className="sw_grid sw_grid-20 sw_rp3_grid-100">
                        <TenantSidebar></TenantSidebar>
                    </div>
                    <div className="sw_grid sw_grid-80 sw_rp3_grid-100">
                        <Welcome user={'Divine'}></Welcome>

                        <div className="sw_panel sw_panel-styled bg-none sw_rsq-2">
      <div className="sw_panel-wrapper">
      
      <div className="sw_grid-row">
        <div className="sw_grid sw_grid-80 sw_rp3_grid-100">

              <div className="sw_panel sw_rsq-2">
                <div className="sw_panel-wrapper">
                
                    <div className="sw_ds-inline-block">
                        <h3>NEXT RENT DUE</h3>
                        <span>2024-05-2023</span>
                    </div>
                    <div className="sw_ds-inline-block sw_align-right">
                        <a href="/tenant/payment" className="sw_btn bg-coral sw_rsq-1 sw_plr-6 st-white">Make Payment</a>
                    </div>
                     
                </div>
              </div>

              <div className="sw_grid-row sw_mt-4">
                <div className="sw_grid sw_grid-half sw_rp3_grid-100">
                <div className="sw_panel sw_rsq-2">
                    <div className="sw_panel-wrapper">
                    <div className="sw_ds-inline-block">
                    <h3>MOVE-IN DATE</h3>
                    <span>2024-05-2023</span>
                </div>
                <div className="sw_ds-inline-block sw_align-right">
                    <i class="fa-solid fa-calendar-days st-coral"></i>
                </div>
                    </div>
                </div>

                </div>

                <div className="sw_grid sw_grid-half">
                <div className="sw_panel sw_rsq-2">
                    <div className="sw_panel-wrapper">
                    <div className="sw_ds-inline-block">
                    <h3>MOVE-OUT DATE</h3>
                    <span>2024-05-2023</span>
                </div>
                <div className="sw_ds-inline-block sw_align-right">
                    <i class="fa-solid fa-calendar-days st-coral"></i>
                </div>
                    </div>
                </div>

                </div>

              </div>


              <div className="sw_grid-row">
                <div className="sw_grid sw_grid-100">
                    <div className="sw_panel sw_rsq-2">
                        <div className="sw_panel-wrapper">
                            <p className="font_xd-1 st_align-center">Get access to your portal anytime, anywhere. <br />
                                Pay rent, submit maintenance requests, and view your current account settings
                            </p>
                           <div className="st_align-center sw_mt-3">
                           <a href="/tenant/payment" className="sw_btn bg-coral sw_rsq-1 sw_plr-6 st-white">
                            <i class="fa-solid fa-cloud-arrow-down"></i> Download  Rent Statement
                            </a>
                           </div>
                        </div>
                    </div>
                </div>
              </div>
              
              <div className="sw_grid-row sw_mt-5">
                    <div className="sw_grid sw_grid-100">
                        <div className="sw_panel sw_panel-styled sw_rsq-2">
                            <div className="sw_panel-wrapper sw_pd-8">
                                <p className="font_xd-2 st_align-center sw_pd-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            adipisicing elit. Labore animi, veniam tenetur
            similique totam odit beatae, ratione, quam nostrum
              culpa dolores? Ducimus ratione architecto aut
              blanditiis aperiam, nisi autem inventore!
              Quo, corporis, ipsum suscipit harum id, repellat odit eos
            blanditiis et quibusdam tempore placeat similique!
            Quod, molestiae? Rem voluptates placeat, beatae
            quidem doloremque veniam magni dolores quibusdam 
            repudiandae non?</p>
                            </div>
                        </div>
                    </div>
                    
                </div>
          
        </div>
        <div className="sw_grid sw_grid-20">
        <div className="sw_panel sw_panel-styled sw_rsq-2">
            <div className="sw_panel-wrapper">
                <h3>Anouncements</h3>
                <hr className="sw_hr" />
                {announcementData.map((announcements, index) => (
                    <div key={index} className="sw_pt-3">
                        <p>{announcements.heading}</p>
                        <p className="font_xd-2">{announcements.details}</p>
                        <hr className="sw_hr" />
                    </div>
                    
                ))}
                
            </div>
          </div>
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