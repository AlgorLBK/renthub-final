import React from "react";

const Footer = () => {
    return (
        <footer className="footer bg-whitesmoke sw_plr-5 sw_pt-5">
            <div className="sw_wrapper">
                <div className="sw_grid-row">
                    <div className="sw_grid sw_grid-quarter sw_rp3_grid-half">
                        <img src="assets/images/logo-transparent.png" className="sw_img sw_wd-40" alt="logo" />
                        <p className="font_xd-2 st_align-justify">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores quod quibusdam perferendis ex debitis est 
                            provident cum, 
                        exercitationem eos reiciendis! Laborum quo sequi maiores atque.</p>
                    </div>
                    <div className="sw_grid sw_grid-quarter sw_rp3_grid-half">
                        <h2>Quick Links</h2>
                        <ul>
                            <li><a href="/" className="font_xd-2 st-black">Be A Renter</a></li>
                            <li><a href="/" className="font_xd-2 st-black">List Property</a></li>
                            <li><a href="/" className="font_xd-2 st-black">About Us</a></li>
                            <li><a href="/" className="font_xd-2 st-black">Contact Us</a></li>
                            <li><a href="/" className="font_xd-2 st-black">Live Chat</a></li>
                        </ul>
                    </div>
                    <div className="sw_grid sw_grid-quarter sw_rp3_grid-half">
                    <h2>Connect With Us</h2>
                        <ul>
                            <li><a href="/" className="font_xd-2 st-black"><i className="fa-brands fa-facebook st-coral"></i> @renthubca</a></li>
                            <li className="sw_mtb-1"><a href="/" className="font_xd-2 st-black"><i className="fa-brands fa-instagram st-coral"></i> @renthubca</a></li>
                            <li><a href="/" className="font_xd-2 st-black"><i className="fa-brands fa-twitter st-coral"></i> @renthubca</a></li>
                            <li className="sw_mt-1"><a href="/" className="font_xd-2 st-black"><i className="fa-regular fa-envelope st-coral"></i> @renthubca</a></li>
                        </ul>
                    </div>
                    <div className="sw_grid sw_grid-quarter sw_rp3_grid-half">
                    <h2>Newsletter Subscription</h2>
                    <p className="font_xd-2">Subscribe to our newsletter for more offers</p>
                    <form action="#" method="post" className="sw_flex">
                        <input className="sw_form-input sw_no-br sw_rsq-2 bg-white sw_bxsh" />
                        <button type="submit" className="sw_btn bg-coral sw_rsq-2 sw_ml-2 st-white sw_bxsh">Submit</button>
                    </form>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer