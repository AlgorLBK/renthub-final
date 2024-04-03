import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { DashboardNavbar } from '../../components/default/DashboardNavbar';
import AdminSidebar from '../../components/admin/AdminSidebar';
import { Welcome } from '../../components/Welcome';
import Footer from '../../components/default/Footer';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, } from '@fortawesome/free-solid-svg-icons';

const SERVER_URL = 'http://localhost:8080';

const AdminProperties = () => {

    const navigate = useNavigate();

    const [user, setUser] = useState({});
    const [properties, setProperties] = useState([]);
    const [errorMessage, setErrorMessage] = useState({});


    useEffect(() => {
      const fetchData = async () => {
        const token = localStorage.getItem('token');
        const role = localStorage.getItem('role');
    
        if (!token || role !== 'admin') {
          navigate('/admin/login');
          return;
        }
    
        try {
          const response = await axios.get(`${SERVER_URL}/auth/verify-token`, {
            headers: {
              Authorization: `Bearer ${token}`,
              Role: 'admin'
            }
          });
    
          const { userId } = response.data.userId;
    
          const userResponse = await axios.get(`${SERVER_URL}/users/${userId}`);
          setUser(userResponse.data.user);

          const propertiesResponse = await axios.get(`${SERVER_URL}/properties/all`)
          const { propertiesData } = propertiesResponse.data.properties
          setProperties(propertiesData);
    
          
        } catch (error) {
          console.error(error);
        }
      };
    
      fetchData();
    }, [navigate]);
  



    return (
      <>
        <DashboardNavbar username={user.username} role={"Admin"} />
        <div className="sw_wrapper sw_mt-8">
          <div className="sw_grid-row">
            <div className="sw_grid sw_grid-20">
              <AdminSidebar />
            </div>
            <div className="sw_grid sw_grid-80">
              <Welcome user={user.username} />
    
              <div className="sw_panel sw_panel-styled bg-none sw_rsq-2">
                <div className="sw_panel-wrapper">
                  <div className="sw_mb-3">
                    <a href="/admin/properties/add" className="sw_btn sw_rsq-1 bg-coral st-white">
                      <FontAwesomeIcon icon={faPlus} className='st-white font_xd-3' /> Add Property
                    </a>
                  </div>
    
                  <div className="sw_grid-row sw_mt-4">
                    <div className="sw_grid sw_grid-100">
                      <div className="sw_panel sw_panel-outline sw_rsq-1">
                        <div className="sw_panel-header bg-none">
                          <h3 className="sw_ds-inline-block">Properties</h3>
                        </div>
                        <div className="sw_panel-wrapper">
     
    
                          <div className="sw_table-responsive">
                            <table className="sw_table sw_table-bordered st_align-center">
                              <thead>
                                <tr>
                                  <th>Property</th>
                                  <th>Image</th>
                                  <th>Type</th>
                                  <th>Price</th>
                                  <th>Address</th>
                                  <th>Edit</th>
                                  <th>Delete</th>
                                </tr>
                              </thead>
                              <tbody>
                                {properties.length === 0 ? (
                                  <tr><td colSpan={8}>No properties listed yet</td></tr>
                                ) : (
                                  properties.map(property => (
                                    <tr key={property._id}>
                                      <td>{property.name}</td>
                                      <td>{/* Render property image here */}</td>
                                      <td>{property.type}</td>
                                      <td>{property.price}</td>
                                      <td>{property.address}</td>
                                      <td>{/* Add edit button */}</td>
                                      <td>{/* Add delete button */}</td>
                                    </tr>
                                  ))
                                )}
                              </tbody>
                            </table>
                          </div>
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
 }

export default AdminProperties;