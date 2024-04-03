import React from 'react';

const HomeSection = () => {
  return (
    <div className="home-section">
      <div className="sw_panel bg-none sw_mt-4">
        <div className="sw_panel-wrapper">
          <h2 className="st_align-center font_sw-2">Find a home that's perfect for you</h2>
          <p className="font_xd-1 sw_wd-60 sw_rp3_wd-100 sw_mlr-auto sw_mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi adipisci explicabo ex, 
            ut debitis hic commodi sed officiis asperiores quas aperiam, et quod corrupti, deleniti cumque necessitatibus dolore 
            saepe! Illum!</p>
          <div className="sw_grid-row">
            <div className="sw_grid sw_grid-half sw_rp3_grid-100">
              <div className="sw_grid-row">
                <div className="sw_grid sw_grid-auto">
                  <button className="sw_btn sw_round bg-whitesmoke">
                    <i className="fa-solid fa-shield-halved font_sw-2 st-coral"></i>
                  </button>
                </div>
                <div className="sw_grid sw_grid-column">
                  <h4>Lorem Ipsum</h4>
                  <p className="font_xd-1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, quibusdam autem dolor soluta 
                    voluptatibus voluptates
                  </p>
                </div>
              </div>

              <div className="sw_grid-row">
                <div className="sw_grid sw_grid-auto">
                <button className="sw_btn sw_round bg-whitesmoke">
                    <i className="fa-regular fa-clock font_sw-2 st-coral"></i>
                </button>
                
                </div>
                <div className="sw_grid sw_grid-column">
                  <h4>Lorem Ipsum</h4>
                  <p className="font_xd-1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, quibusdam autem dolor soluta 
                    voluptatibus voluptates
                  </p>
                </div>
              </div>

              <div className="sw_grid-row">
                <div className="sw_grid sw_grid-auto">
                <button className="sw_btn sw_round bg-whitesmoke">
                <i className="fa-solid fa-house-user font_sw-2 st-coral"></i>
                </button>
                  
                </div>
                <div className="sw_grid sw_grid-column">
                  <h4>Lorem Ipsum</h4>
                  <p className="font_xd-1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, quibusdam autem dolor soluta 
                    voluptatibus voluptates
                  </p>
                </div>
              </div>
            </div>
            <div className="sw_grid sw_grid-half">
              <img src="assets/images/home-1.jpg" className="sw_img" alt="Image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSection;
