import React from 'react';
import InputRadio from '../default/InputRadio';

const FilterPanel = () => {
  return (
    <div className="sw_panel sw_panel-styled bg-none sw_rsq-2">
      <div className="sw_panel-wrapper">
        <div className="sw_flex">
          <a href="#" className="sw_btn bg-coral st-white sw_rsq-1">Filter</a>
          <a href="#" className="sw_btn bg-none st-coral sw_rsq-1">Reset Filter</a>
          <a href="#" className="sw_btn bg-none st-coral sw_rsq-1">Sort</a>
        </div>
        <hr className="sw_hr" />
        <form action="" className="sw_form">
          <label htmlFor="city">City</label>
          <select name="" id="city" className="sw_form-select sw_rsq-1 br-coral">
            <option value="alberta">Alberta</option>
            <option value="montreal">Montreal</option>
            <option value="nunavut">Nunavut</option>
          </select>
        </form>

        <form action="" className="sw_form">
          <label htmlFor="propertyType">Property Type</label>
          <div className="sw_form-check-wrapper">
            <input type="checkbox" className="sw_form-check" id="apartment" />
            <label className="sw_form-check-label" htmlFor="apartment">Apartment</label>
            <br />
            <input type="checkbox" className="sw_form-check" id="condo" />
            <label className="sw_form-check-label" htmlFor="condo">Condo</label>
            <br />
            <input type="checkbox" className="sw_form-check" id="house" />
            <label className="sw_form-check-label" htmlFor="house">House</label>
            <br />
            <input type="checkbox" className="sw_form-check" id="room" />
            <label className="sw_form-check-label" htmlFor="room">Room</label>
          </div>
        </form>

        <form action="" className="sw_form">
            <label htmlFor="city">Price</label>
            <select name="" id="" className="sw_form-select sw_rsq-1 br-coral">
                <option value="alberta">$500 - $1000</option>
                <option value="alberta">$1000 - $3000</option>
                <option value="alberta">$3000 - $10000</option>
            </select>
        </form>

        <form action="" className="sw_form">
            <label htmlFor="city">Bed</label>
            <select name="" id="" className="sw_form-select sw_rsq-1 br-coral">
                <option value="alberta">Any</option>
                <option value="alberta">1</option>
                <option value="alberta">2</option>
                <option value="alberta">3</option>
            </select>
        </form>

        <form action="" className="sw_form">
            <label htmlFor="city">Bath</label>
            <select name="" id="" className="sw_form-select sw_rsq-1 br-coral">
                <option value="alberta">Any</option>
                <option value="alberta">1</option>
                <option value="alberta">2</option>
                <option value="alberta">3</option>
            </select>
        </form>

        <form className="sw_form">
            <label htmlFor="city">Property Type</label>
            <InputRadio></InputRadio>
        </form>

    

                        
      </div>
    </div>
  );
};

export default FilterPanel;
