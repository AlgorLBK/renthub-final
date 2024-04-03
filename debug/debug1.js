<form action="" className="sw_form">
      <p className="st-mute font_xd-2">Please fill the form to list a property on RentHub</p>
      <div className="sw_grid-row">
        
      <div className="sw_grid sw_grid-half">
            <label htmlFor="city">Property Type*</label>
            <select name="" id="city" className="sw_form-select sw_mb-2 sw_rsq-1 br-coral">
                <option value="">Select Option</option>
                <option value="montreal">Condomium</option>
                <option value="nunavut">Apartment</option>
                <option value="nunavut">Townhouse</option>
                <option value="nunavut">Flat</option>
                <option value="nunavut">Duplex</option>
            </select>

            <label htmlFor="city">Property Name*</label>
            <input className="sw_form-input sw_mb-2 sw_rsq-1" />

            <label htmlFor="city">Rooms*</label>
            <input className="sw_form-input sw_mb-2 sw_rsq-1" />

            <label htmlFor="city">Bathrooms*</label>
            <input className="sw_form-input sw_mb-2 sw_rsq-1" />


            <label htmlFor="city">Pets*</label>
            <select name="" id="city" className="sw_form-select sw_mb-2 sw_rsq-1 br-coral">
                <option value="">Select Option</option>
                <option value="montreal">Allowed</option>
                <option value="nunavut">Not Allowed</option>
            </select>

            </div>
            <div className="sw_grid sw_grid-half">

            <label for="name">Price*</label>
              <div className="sw_form-addon sw_form-addon-prepend sw_rsq-1">
                  <span className="addon-icon  st-coral">
                      C$
                  </span>
                  <input type="text" className="sw_form-input " />
              </div>

            <label htmlFor="city">Location*</label>
            <input className="sw_form-input sw_mb-2 sw_rsq-1" />

            <label htmlFor="city">Property Description*</label>
            <textarea cols="30" rows="5" className="sw_form-input sw_mb-2 sw_rsq-1 sw_no-resize"></textarea>

            <label htmlFor="propertyType">Utilities/Featured</label>
          <div className="sw_form-check-wrapper">
            <div className="sw_grid-row">
              <div className="sw_grid sw_grid-half">
              <input type="checkbox" className="sw_form-check" id="electricity" />
            <label className="sw_form-check-label" htmlFor="electricity">Electricity</label>
            <br />
            <input type="checkbox" className="sw_form-check" id="wifi" />
            <label className="sw_form-check-label" htmlFor="wifi">Wi-Fi</label>
            <br />
            <input type="checkbox" className="sw_form-check" id="flooring" />
            <label className="sw_form-check-label" htmlFor="flooring">Flooring</label>
            <br />
        
              </div>


              <div className="sw_grid sw_grid-half">
              
            <input type="checkbox" className="sw_form-check" id="parking" />
            <label className="sw_form-check-label" htmlFor="parking">Parking Space</label>
            <br />
            <input type="checkbox" className="sw_form-check" id="furnished" />
            <label className="sw_form-check-label" htmlFor="furnished">Furnished</label>
            <br />
            <input type="checkbox" className="sw_form-check" id="water" />
            <label className="sw_form-check-label" htmlFor="water">Water</label>
              </div>
            </div>
          </div>
            </div>
        </div>

        <div className="st_align-center">
        <input className="sw_btn  sw_rsq-1 bg-coral st-white" value={"ADD PROPERTY"} />
        </div>
            
        </form>