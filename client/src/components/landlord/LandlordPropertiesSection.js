import React from  'react';


export const LandlordPropertiesSection = () => {
    return (
        <div className="sw_panel sw_panel-styled bg-none sw_rsq-2">
        <div className="sw_panel-wrapper">
        <div className="sw_mb-3">
            <a href="/landlord/properties/add" className="sw_btn sw_rsq-1 bg-coral st-white"><i className="fa-solid fa-plus"></i> Add Property</a>
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
                              <tr>
                                 
                                  <td>Tenant1</td>
                                  <td>Apartment1</td>
                                  <td>Date1</td>
                                  <td>Date2</td>
                                  <td>Apartment1</td>
                                  <td>Date1</td>
                                  <td>Date2</td>
                              </tr>
                              <tr>
                                 
  
                                  <td>Tenant1</td>
                                  <td>Apartment1</td>
                                  <td>Date1</td>
                                  <td>Date2</td>
                                  <td>Apartment1</td>
                                  <td>Date1</td>
                                  <td>Date2</td>
                              </tr>
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