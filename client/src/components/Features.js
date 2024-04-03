import React from "react";

const propertiesData = [
    {
      slug: "2-bedroom-apartment",
      imgSrc: "/assets/images/property-1.jpg",
      price: "$3000/month",
      type: "2-Bedroom Apartment",
      address: "146 Kendal Avenue, Toronto",
      beds: "2",
      baths: "1",
      pet: "No pet"
    },
    {
      slug: "private-room",
      imgSrc: "/assets/images/property-2.jpg",
      price: "$800/month",
      type: "Private Room",
      address: "500 MacPerson Avenue, Toronto",
      beds: "1",
      baths: "1",
      pet: "Pet"
    },
    {
        slug: "private-room",
        imgSrc: "/assets/images/property-3.jpg",
        price: "$800/month",
        type: "Private Room",
        address: "500 MacPerson Avenue, Toronto",
        beds: "3",
        baths: "1",
        pet: "No Pet"
      },
      {
        slug: "luxury-apartment",
        imgSrc: "/assets/images/property-4.jpg",
        price: "$5000/month",
        type: "Luxury Apartment",
        address: "146 Kendal Avenue, Toronto",
        beds: "2",
        baths: "1",
        pet: "No pet"
      },
      {
        slug: "private-room",
        imgSrc: "/assets/images/property-5.jpg",
        price: "$800/month",
        type: "Private Room",
        address: "500 MacPerson Avenue, Toronto",
        beds: "3",
        baths: "1",
        pet: "No Pet" 
      }
  ];

export const HomeFeatures = () => {

    return (
        <div className="sw_wrapper">
        <div className="home-features sw_mt-4">
          <div className="title-heading sw_mb-3">
            <h1 className="font_sw-1 sw_ds-inline-block">FEATURED PROPERTIES</h1>
            <a href="/properties" className="sw_ds-inline-block sw_align-right st_weight-bold st-coral">View All</a>
          </div>
          <div className="sw_grid-row">
            {propertiesData.map((property, index) => (
              <div className="sw_grid sw_grid-20 sw_rp3_grid-half" key={index}>
                <div className="sw_panel sw_panel-styled sw_rsq-2 sw_no-br bg-white">
                  <a href={`/property/${property.slug}`}><img src={property.imgSrc} className="sw_img sw_img-top" alt="" /></a>
                  <div className="sw_panel-wrapper">
                    <h4 className="sw_mb-2 st-coral font_rp3-xd-1">{property.price}</h4>
                    <p className="sw_panel-title font_xd-2 font_rp3-xd-3">{property.type}</p>
                    <p className="sw_panel-subtitle font_xd-3 font_rp3-xd-4">{property.address}</p>
                    <div className="sw_flex">
                      <div>
                        <i className="fa-solid fa-bed font_xd-3 font_rp3-xd-4 st-coral"></i> <span className="font_xd-3 font_rp3-xd-4">{property.beds} beds</span>
                      </div>
                      <div>
                        <i className="fa-solid fa-bath font_xd-3 font_rp3-xd-4 st-coral"></i> <span className="font_xd-3 font_rp3-xd-4">{property.baths} bath</span>
                      </div>
                      <div>
                        <i className="fa-solid fa-paw font_xd-3 font_rp3-xd-4 st-coral"></i> <span className="font_xd-3 font_rp3-xd-4">{property.pet}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
}

