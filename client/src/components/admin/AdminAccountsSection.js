
import React, { useEffect, useState } from  'react';
import axios from 'axios';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const SERVER_URL = 'http://localhost:8080';


export const AdminLandlordsSection = () => {

  const [errorMessage, setErrorMessage] = useState('');
  const [landlords, setLandlords] = useState([]);

  useEffect(() => {
    axios.get(SERVER_URL + '/users/landlords')
      .then((res) => {
        const { landlordData } = res.data;
        setLandlords(landlordData);
      })
      .catch((err) => {
        console.log('Error getting properties data', err);
        setErrorMessage("No landlord yet"); 
      });
  }, []);

    return (
        <div className="sw_panel sw_panel-styled bg-none sw_rsq-2">
        <div className="sw_panel-wrapper">
        
        
        <div className="sw_grid-row sw_mt-4">
          <div className="sw_grid sw_grid-100">
            <div className="sw_panel sw_panel-outline sw_rsq-1">
              <div className="sw_panel-header bg-none">
                <h3 className="sw_ds-inline-block">Landlords</h3>
               
              </div>
              <div className="sw_panel-wrapper">
                  
                  <div class="sw_table-responsive">
                      <table class="sw_table  sw_table-bordered st_align-center">
                          <thead>
                              <tr>
                                 
                                  <th>Name</th>
                                  <th>Email</th>
                                  <th>Phone</th>
                                  <th>Date Joined</th>
                                  <th>Edit</th>
                                  <th>Delete</th>
                              </tr>
                          </thead>
                          <tbody>
                            <tr><td colSpan={7}>{errorMessage}</td></tr>

                          {landlords.map((landlord, index) => (
                            
                            <tr key={index}>
                                 
                            <td>{landlord.name}</td>
                            <td>{landlord.email}</td>
                            <td>{landlord.phone}</td>
                            <td>{landlord.createdAt}</td>
                            <td>Date1</td>
                            <td>Date2</td>
                        </tr>


                            
                          ))}

                             
                             
                          </tbody>
                     
                          
                      </table>
                  </div>
  
              </div>
            </div>
          </div>
        </div>
                          
        </div>
      </div>
    )
}

export const AdminTenantsSection = () => {

  const [errorMessage, setErrorMessage] = useState('');
  const [tenants, setTenants] = useState([]);

  useEffect(() => {
    axios.get(SERVER_URL + '/users/tenants')
      .then((res) => {
        const { tenantData } = res.data;
        setTenants(tenantData);
      })
      .catch((err) => {
        console.log('Error getting properties data', err);
        setErrorMessage("No tenant yet"); 
      });
  }, []);

    return (
        <div className="sw_panel sw_panel-styled bg-none sw_rsq-2 sw_mt-5">
        <div className="sw_panel-wrapper">
        
        
        <div className="sw_grid-row sw_mt-4">
          <div className="sw_grid sw_grid-100">
            <div className="sw_panel sw_panel-outline sw_rsq-1">
              <div className="sw_panel-header bg-none">
                <h3 className="sw_ds-inline-block">Tenants</h3>
               
              </div>
              <div className="sw_panel-wrapper">
                  
                  <div class="sw_table-responsive">
                      <table class="sw_table  sw_table-bordered st_align-center">
                          <thead>
                              <tr>
                                 
                              <th>Name</th>
                                  <th>Email</th>
                                  <th>Phone</th>
                                  <th>Date Joined</th>
                                  <th>Edit</th>
                                  <th>Delete</th>
                              </tr>
                          </thead>
                          <tbody>
                            <tr><td colSpan={7}>{errorMessage}</td></tr>

                          {tenants.map((tenant, index) => (
                            
                            <tr key={index}>
                                 
                            <td>{tenant.name}</td>
                            <td>{tenant.email}</td>
                            <td>{tenant.phone}</td>
                            <td>{tenant.createdAt}</td>
                            <td>Date1</td>
                            <td>Date2</td>
                        </tr>


                            
                          ))}

                             
                             
                          </tbody>
                     
                          
                      </table>
                  </div>
  
              </div>
            </div>
          </div>
        </div>
                          
        </div>
      </div>
    )
}