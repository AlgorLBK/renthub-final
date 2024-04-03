import 'swavy-ui/dist/css/swavy-ui.min.css';
import '../App.css';
import Image from "../components/default/Image";

import {Navbar} from '../components/default/Navbar'
import { Hero } from '../components/default/Hero';
import Footer from '../components/default/Footer';

const Contact = () => {
  return (
    
    <>
      <Navbar navType={"hero"}></Navbar> 
      <Hero size={"mid"}></Hero>
      <div className="sw_wrapper sw_mtb-4">
        <div className="sw_grid-row">
            <div className="sw_grid sw_grid-half sw_rp3_grid-100">
            <form action="" className="sw_form">
                                        
                <label for="name">Name*</label>
                <input type="text" className="sw_form-input " placeholder="Enter name" />

                <label for="name">Email*</label>
                <input type="text" className="sw_form-input " placeholder="Enter email" />


                <label for="name">Subject*;</label>
                <input type="text" className="sw_form-input " placeholder="Enter subject" />

                <label for="name">Message*</label>
                <textarea className="sw_form-input" placeholder="Enter message"></textarea>
            

                <input type="submit" className="sw_btn sw_btn-block bg-coral st-white sw_rsq-1" value="SEND MESSAGE" />
            
            </form>
            </div>
            <div className="sw_grid sw_grid-half sw_rp3_grid-100">
                <Image name={"map.jpg"} className="sw_img" alt={"map"}></Image>
            </div>
        </div>
        
    </div>
      <Footer></Footer>
    </>
    
  );
}

export default Contact;