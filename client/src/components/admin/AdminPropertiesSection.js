
import React, { useEffect, useState } from  'react';
import axios from 'axios';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const SERVER_URL = 'http://localhost:8000';


export const AdminPropertiesSection = () => {

  const [errorMessage, setErrorMessage] = useState('');
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    axios.get(SERVER_URL + '/properties/all')
      .then((res) => {
        const { propertiesData } = res.data;
        if (res.data.status) {
          setProperties(propertiesData);
        } else {
          setErrorMessage("Failed to load properties");
        }
      })
      .catch((err) => {
        console.log('Error getting properties data', err);
        setErrorMessage("No properties listed yet"); 
      });
  }, []);

    return (
        <div className="sw_panel sw_panel-styled bg-none sw_rsq-2">
        <div className="sw_panel-wrapper">
        <div className="sw_mb-3">
            <a href="/admin/properties/add" className="sw_btn sw_rsq-1 bg-coral st-white">
            <FontAwesomeIcon icon={faPlus} className='st-white font_xd-3'  /> Add Property</a>
          </div>
        
        <div className="sw_grid-row sw_mt-4">
          <div className="sw_grid sw_grid-100">
            <div className="sw_panel sw_panel-outline sw_rsq-1">
              <div className="sw_panel-header bg-none">
                <h3 className="sw_ds-inline-block">Properties</h3>
               
              </div>
              <div className="sw_panel-wrapper">
                  
                  <div class="sw_table-responsive">
                      <table class="sw_table  sw_table-bordered st_align-center">
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
                            <tr><td colSpan={7}>{errorMessage}</td></tr>

                          {properties.map((property, index) => (
                            
                            <tr key={index}>
                                 
                            <td>{property.type}</td>
                            <td>{property.imgSrc}</td>
                            <td>{property.type}</td>
                            <td>{property.price}</td>
                            <td>{property.address}</td>
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