import React from  'react';


export const LandlordTenantsSection = () => {
    return (
        <div className="sw_panel sw_panel-styled bg-none sw_rsq-2">
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
                                  <th>Apartment</th>
                                  <th>Move-in Date</th>
                                  <th>Move-out Date</th>
                              </tr>
                          </thead>
                          <tbody>
                              <tr>
                                 
                                  <td>Tenant1</td>
                                  <td>Apartment1</td>
                                  <td>Date1</td>
                                  <td>Date2</td>
                              </tr>
                              <tr>
                                 
  
                                  <td>Tenant1</td>
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