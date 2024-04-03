import React from 'react';

const servicesData = [
  {
    icon: "fa-solid fa-house-circle-check",
    title: "Property Leasing",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto beatae ipsa amet veritatis deserunt",
    link: "/property-leasing"
  },
  {
    icon: "fa-regular fa-credit-card",
    title: "Pay Your Rent",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto beatae ipsa amet veritatis deserunt",
    link: "/pay-your-rent"
  },
  {
    icon: "fa-solid fa-tower-broadcast",
    title: "Tenant-Landlord Connection",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto beatae ipsa amet veritatis deserunt",
    link: "/tenant-landlord-connection"
  },
  {
    icon: "fa-solid fa-screwdriver-wrench",
    title: "Maintenance Accessibility",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto beatae ipsa amet veritatis deserunt",
    link: "/maintenance-accessibility"
  }
];

const HomeServices = () => {
  return (
    <div className="sw_wrapper">
      <div className="home-services sw_mt-4">
        <div className="title-heading sw_mb-3">
          <h2>OUR SERVICES</h2>
        </div>
        <div className="sw_grid-row">
          {servicesData.map((service, index) => (
            <div className="sw_grid sw_grid-quarter sw_rp3_grid-half" key={index}>
              <div className="sw_panel sw_panel-styled sw_rsq-2 sw_no-br bg-white">
                <div className="sw_panel-wrapper st_align-center">
                  <div className="services-icon st-coral">
                    <i className={"fa-solid " + service.icon + " font_sw-2"}></i>
                  </div>
                  <div className="services-heading sw_mt-4">
                    <h5>{service.title}</h5>
                  </div>
                  <div className="services-content">
                    <p className="font_xd-2">{service.description}</p>
                  </div>
                  <div className="services-link">
                    <a href={service.link} className="font_xd-1 st-coral">Learn More</a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeServices;
