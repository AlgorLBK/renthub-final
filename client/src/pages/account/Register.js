import 'swavy-ui/dist/css/swavy-ui.min.css';
import '../../App.css';


import {Navbar} from '../../components/default/Navbar'
import { Hero } from '../../components/default/Hero';
import Footer from '../../components/default/Footer';

const Register = () => {
  return (
    
    <>
      <Navbar navType={"hero"}></Navbar> 
      <Hero size={"mid"}></Hero>
      <div className="sw_wrapper sw_mtb-4">
        <div className="sw_wd-80 sw_mlr-auto">
        <div className="sw_panel sw_panel-styled bg-none sw_rsq-1">
                    <div className="sw_panel-wrapper">
                        <div className="sw_mb-4">
                            <a href="" className="st-black sw_br-2 brb-coral">Tenant</a>
                            <a href="" className="st-black sw_ml-3">Leaser</a>
                        </div>
                        <h1 className="font_sw-2">Let's Get Started</h1>
                        <p className="font_xd-1 sw_mb-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni nam ullam, nihil possimus 
                            voluptas corporis molestiae molestias eius, 
                            dolorum optio sit nostrum ab omnis assumenda. Adipisci a numquam eos laboriosam?</p>
                            <div className="sw_grid-row">
                                <div className="sw_grid sw_grid-60 sw_rp3_grid-100">
                                    <form action="" className="sw_form">
                                        <label for="name">Name*</label>
                                        <div className="sw_form-addon sw_form-addon-prepend sw_rsq-1">
                                            <span className="addon-icon addon-merge st-coral">
                                                <i className="fa-solid fa-user font_xd-2"></i>
                                            </span>
                                            <input type="text" className="sw_form-input" placeholder="Enter name" />
                                        </div>
        
                                        <label for="name">Email*</label>
                                        <div className="sw_form-addon sw_form-addon-prepend sw_rsq-1">
                                            <span className="addon-icon addon-merge st-coral">
                                                <i className="fa-solid fa-envelope font_xd-2"></i>
                                            </span>
                                            <input type="text" className="sw_form-input " placeholder="Enter email" />
                                        </div>
        
                                        <label for="name">Phone*</label>
                                        <div className="sw_form-addon sw_form-addon-prepend sw_rsq-1">
                                            <span className="addon-icon addon-merge st-coral">
                                                <i className="fa-solid fa-phone font_xd-2"></i>
                                            </span>
                                            <input type="text" className="sw_form-input" placeholder="Enter phone" />
                                        </div>
        
                                        <label for="name">Password*</label>
                                        <div className="sw_form-addon sw_form-addon-prepend sw_rsq-1">
                                            <span className="addon-icon addon-merge st-coral">
                                                <i className="fa-solid fa-lock font_xd-2"></i>
                                            </span>
                                            <input type="password" className="sw_form-input" placeholder="Enter password" />
                                        </div>
        
                                        <label for="name">Confirm Password*</label>
                                        <div className="sw_form-addon sw_form-addon-prepend sw_rsq-1">
                                            <span className="addon-icon addon-merge st-coral">
                                                <i className="fa-solid fa-lock font_xd-2"></i>
                                            </span>
                                            <input type="password" className="sw_form-input" placeholder="Enter password" />
                                        </div>


                                        <div className="sw_flex">
                                        <div className="sw_form-check-wrapper">
                                            <input type="checkbox" className="sw_form-check" id="terms" />
                                            <label className="sw_form-check-label" htmlFor="terms">Accept terms &amp; conditions</label>
                                        </div>
                                        <div>
                                        <i className="fa-solid fa-info-circle st-coral"></i> <span className="font_xd-2">Privacy Policy</span>
                                        </div>
                                    </div>

                                        <input type="submit" className="sw_btn sw_btn-block bg-coral st-white sw_rsq-1" value="CREATE ACCOUNT" />

                                    </form>
                                    <p className="font_xd-2">Existing user? Login <a href="/login" className="font_xd-2">here</a></p>
                                    
                                </div>
                                <div className="sw_grid sw_grid-40 st_align-center">
                                    <div className="sw_mt-8">
                                        <h1 className="font_sw-3">OR</h1>
                                    <a href="" className="sw_btn sw_rsq-1 bg-coral st-white"><i className="fa-brands fa-google"></i> SIGNUP WITH GOOGLE</a>
                                    <br />
                                    <a href="" className="sw_btn sw_rsq-1 bg-coral st-white sw_mt-3"><i className="fa-brands fa-facebook"></i> SIGNUP WITH FACEBOOK</a>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
            
        </div>
    </div>
      <Footer></Footer>
    </>
    
  );
}

export default Register;