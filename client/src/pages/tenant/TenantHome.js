import React, { useState, useEffect } from "react";
import axios from "axios";
import {  useNavigate } from "react-router-dom";


import { DashboardNavbar } from "../../components/default/DashboardNavbar";
import TenantSidebar from "../../components/tenant/TenantSidebar";
import { Welcome } from "../../components/Welcome";
import Footer from "../../components/default/Footer";

const SERVER_URL = 'http://localhost:8080';


export const TenantHome = () => {

  const navigate = useNavigate();

 const [user, setUser] = useState({});
 const [isLoading, setIsLoading] = useState(true);



  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/tenant/login');
    } else {
      axios.get(`${SERVER_URL}/users/verify-token`, {
        headers: {
          Authorization: `Bearer ${token}`,
          Role: 'tenant'
        }
      })
      .then(response => {
        
        const { userId } = response.data.userId;
        console.log(userId);
 ;

        axios.get(SERVER_URL + '/users/' + userId)
        .then((res) => {
          setUser(res.data.user)
        })
        .catch((err) => console.log(err))
        .finally(() => setIsLoading(false));

      })
      .catch(error => {
        console.error(error);
        navigate('/tenant/login');
      });
    }

  }, [navigate]);

  return (
        <>
          <DashboardNavbar username={user.username} role={"Tenant"} />
          <div className="sw_wrapper sw_mt-8">
            <div className="sw_grid-row">
              <div className="sw_grid sw_grid-20 sw_rp3_grid-100">
                <TenantSidebar />
              </div>
              <div className="sw_grid sw_grid-80 sw_rp3_grid-100">
                <Welcome user={user.username} />
                <div className="sw_panel sw_panel-styled bg-none sw_rsq-2">
                  <div className="sw_panel-wrapper">
                    <div className="sw_grid-row">
                      <div className="sw_grid sw_grid-third sw_rp3_grid-100">
                        <div className="sw_panel sw_panel-styled sw_rsq-2">
                          <div className="sw_panel-wrapper">
                            <i className="fa-solid fa-screwdriver-wrench st-coral font_sw-2"></i>
                            <h1 className="sw_mtb-3">Maintenance</h1>
                            <a className="sw_btn bg-coral st-white sw_plr-6 sw_rsq-1" href="/maintenance">View</a>
                          </div>
                        </div>
                      </div>
                      <div className="sw_grid sw_grid-third sw_rp3_grid-100">
                        <div className="sw_panel sw_panel-styled sw_rsq-2">
                          <div className="sw_panel-wrapper">
                            <i className="fa-solid fa-tent st-coral font_sw-2"></i>
                            <h1 className="sw_mtb-3">Lease</h1>
                            <a className="sw_btn bg-coral st-white sw_plr-6 sw_rsq-1" href="/maintenance">View</a>
                          </div>
                        </div>
                      </div>
                      <div className="sw_grid sw_grid-third sw_rp3_grid-100">
                        <div className="sw_panel sw_panel-styled sw_rsq-2">
                          <div className="sw_panel-wrapper">
                            <i className="fa-regular fa-credit-card st-coral font_sw-2"></i>
                            <h1 className="sw_mtb-3">Payment</h1>
                            <a className="sw_btn bg-coral st-white sw_plr-6 sw_rsq-1" href="/maintenance">View</a>
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
                              repudiandae non?
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </>
  );
  
};
