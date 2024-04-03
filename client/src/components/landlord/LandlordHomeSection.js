import React from  'react';


export const LandlordHomeSection = () => {
    return (
        <div className="sw_panel sw_panel-styled bg-none sw_rsq-2">
        <div className="sw_panel-wrapper">
        <div className="sw_mb-3">
            <a href="/landlord/properties/add" className="sw_btn sw_rsq-1 bg-coral st-white"><i className="fa-solid fa-plus"></i> Add Property</a>
          </div>
        <div className="sw_grid-row">
          <div className="sw_grid sw_grid-third">
            <div className="sw_panel sw_panel-styled sw_rsq-2">
              <div className="sw_panel-wrapper">
                <i className="fa-solid fa-home st-coral font_sw-2"></i>
                <h1 className="sw_mtb-3">Total Properties</h1>
                <h3>5</h3>
              </div>
            </div>
          </div>
          <div className="sw_grid sw_grid-third">
          <div className="sw_panel sw_panel-styled sw_rsq-2">
              <div className="sw_panel-wrapper">
                <i className="fa-solid fa-users st-coral font_sw-2"></i>
                <h1 className="sw_mtb-3">Tenants</h1>
                <h3>20</h3>
              </div>
            </div>
          </div>
          <div className="sw_grid sw_grid-third">
          <div className="sw_panel sw_panel-styled sw_rsq-2">
              <div className="sw_panel-wrapper">
                <i className="fa-regular fa-credit-card st-coral font_sw-2"></i>
                <h1 className="sw_mtb-3">C$20,000</h1>
                <h3>5</h3>
              </div>
            </div>
          </div>
        </div>
  
        <div className="sw_grid-row sw_mt-4">
          <div className="sw_grid sw_grid-100">
            <div className="sw_panel sw_panel-outline sw_rsq-1">
              <div className="sw_panel-header bg-none">
                <h3 className="sw_ds-inline-block">Tenants</h3>
                <a href="/account/landlord/tenants" className="sw_br-1 brb-coral sw_ds-inline-block sw_align-right font_xd-1 st-black">See All</a>
              </div>
              <div className="sw_panel-wrapper">
                  
                  <div class="sw_table-responsive">
                      <table class="sw_table  sw_table-bordered st_align-center">
                          <thead>
                              <tr>
                                  <th>
                                    <div className="sw_form-check-wrapper">
                                      <input type="checkbox" className="sw_form-check" id="apartment" />
                                      <label className="sw_form-check-label" htmlFor="apartment"></label>
                                      </div>
                                  </th>
                                  <th>Tenants</th>
                                  <th>Apartments</th>
                                  <th>Move-in Date</th>
                                  <th>Move-out Date</th>
                              </tr>
                          </thead>
                          <tbody>
                              <tr>
                                  <td>
                                  <div className="sw_form-check-wrapper">
                                      <input type="checkbox" className="sw_form-check" id="apartment" />
                                      <label className="sw_form-check-label" htmlFor="apartment"></label>
                                      </div>
                                  </td>
                                  <td>Tenant1</td>
                                  <td>Apartment1</td>
                                  <td>Date1</td>
                                  <td>Date2</td>
                              </tr>
                              <tr>
                                  <td>
  
                                  <div className="sw_form-check-wrapper">
                                      <input type="checkbox" className="sw_form-check" id="apartment" />
                                      <label className="sw_form-check-label" htmlFor="apartment"></label>
                                      </div>
                                  </td>
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