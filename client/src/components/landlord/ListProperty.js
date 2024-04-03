import React from  'react';


export const ListProperty = () => {
    return (
        <div className="sw_panel sw_panel-styled bg-none sw_rsq-2">
      <div className="sw_panel-wrapper">
      <form action="" className="sw_form">
      <p className="st-mute font_xd-2">Please fill the form to list a property on RentHub</p>
      <div className="sw_grid-row">
        
      <div className="sw_grid sw_grid-half">
      <label htmlFor="propertyType">Property Type*</label>
        <select
            id="propertyType"
            name="propertyType"
            className="sw_form-select sw_mb-2 sw_rsq-1 br-coral"
        >
            <option value="">Select Option</option>
              <option value="apartment">Apartment</option>
              <option value="studio">Studio</option>
              <option value="bachelor">Bachelor</option>
              <option value="basement">Basement</option>
              <option value="duplex">Duplex</option>
              <option value="loft">Loft</option>
              <option value="condo">Condo</option>
              <option value="house">House</option>
              <option value="townhouse">Townhouse</option>
              <option value="multi-unit">Multi-Unit</option>
              <option value="cabin">Cabin</option>
              <option value="cottage">Cottage</option>
              <option value="private room">Private Room</option>
              <option value="shared room">Shared Room</option>
        </select>

            <label htmlFor="city">Property Name*</label>
            <input 
            className="sw_form-input sw_mb-2 sw_rsq-1 br-coral"
            type="text"
            name="propertyName"
            />

        <label htmlFor="bedroom">Number of Bedrooms*</label>
            <input
                id="bedroom"
                name="bedroom"
                type="number"
                min="1"
                className="sw_form-input sw_mb-2 sw_rsq-1 br-coral"
            />

            <label htmlFor="bathroom">Number of Bathrooms*</label>
            <input
                id="bathroom"
                name="bathroom"
                type="number"
                min="1"
                className="sw_form-input sw_mb-2 sw_rsq-1 br-coral"
            />


            <label htmlFor="pets">Pets*</label>
            <select name="pets" id="pets" className="sw_form-select sw_mb-2 sw_rsq-1 br-coral">
                <option value="">Select Option</option>
                <option value="montreal">Allowed</option>
                <option value="nunavut">Not Allowed</option>
            </select>

            <label htmlFor="description">Property Description*</label>
                            <textarea
                                id="description"
                                name="description"
                                cols="30"
                                rows="5"
                                className="sw_form-input sw_mb-2 sw_rsq-1 br-coral sw_no-resize"
                            ></textarea>

            </div>
            <div className="sw_grid sw_grid-half ">

            <label htmlFor="price">Price*</label>
              <div className="sw_form-addon sw_form-addon-prepend sw_rsq-1 sw_mb-2">
                  <span className="addon-icon st-coral br-coral">C$</span>
                  <input
                      id="price"
                      name="price"
                      type="text"
                      className="sw_form-input br-coral"
                  />
              </div>

              <label htmlFor="address">Address*</label>
                  <input
                      id="addressLine1"
                      name="addressLine1"
                      type="text"
                      className="sw_form-input sw_mb-2 sw_rsq-1"
                      placeholder="Address Line 1"
                  />
                
                  <input
                      id="city"
                      name="city"
                      type="text"
                      className="sw_form-input sw_mb-2 sw_rsq-1"
                      placeholder="City"
                  />
                  <select
                      id="province"
                      name="province"
                      className="sw_form-select sw_mb-2 sw_rsq-1 br-coral"
                  >
                      <option value="">Select Province</option>
                      <option value="AB">Alberta</option>
                      <option value="BC">British Columbia</option>
                      <option value="MB">Manitoba</option>
                      <option value="NB">New Brunswick</option>
                      <option value="NL">Newfoundland</option>
                      <option value="NS">Nova Scotia</option>
                      <option value="NU">Nunavut</option>
                      <option value="NT">NT</option>
                      <option value="ON">Ontario</option>
                      <option value="PE">Prince Edward Island</option>
                      <option value="QC">Quebec</option>
                      <option value="SK">Saskatchewan</option>
                      <option value="YT">Yukon</option>
                     
                      
                  </select>
                  <input
                      id="postalCode"
                      name="postalCode"
                      type="text"
                      className="sw_form-input sw_mb-2 sw_rsq-1"
                      placeholder="Postal Code (e.g., A1A 1A1)"
                  />

           

            <label htmlFor="propertyType">Utilities/Featured</label>
          

            <label htmlFor="amenities">Amenities</label>
                    <textarea
                        id="amenities"
                        name="amenities"
                        cols="30"
                        rows="5"
                        className="sw_form-input sw_mb-2 sw_rsq-1 sw_no-resize"
                        placeholder="List amenities separated by commas"
                    ></textarea>


            <label htmlFor="images">Images</label>
              <input
                  id="images"
                  name="images"
                  type="file"
                  accept="image/*"
                  multiple
                  className="sw_form-input sw_mb-2 sw_rsq-1"
              />

            </div>
        </div>

        <div className="st_align-center">
        <input type="submit" className="sw_btn  sw_rsq-1 bg-coral st-white" value={"ADD PROPERTY"} />
        </div>
            
        </form>
                        
      </div>
    </div>
    );
}

