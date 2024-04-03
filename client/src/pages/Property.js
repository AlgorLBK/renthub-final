import 'swavy-ui/dist/css/swavy-ui.min.css';
import '../App.css';

import {Navbar} from '../components/default/Navbar'
import { Hero } from '../components/default/Hero';
import Image from '../components/default/Image';
import Footer from '../components/default/Footer';

const Property = () => {
  return (
    
    <>
      <Navbar navType={"hero"}></Navbar> 
      <Hero size={"mid"}></Hero>
      <div className="property-page">
      <div className="sw_wrapper sw_mtb-4">
        <div className="sw_grid-row">
            <div className="sw_grid sw_grid-60 sw_rp3_grid-100">
                <Image name={"home-1.jpg"} className="sw_img full-img sw_rsq-2" alt={"Property"} />
                <div className="sw_grid-row sw_mt-4">
                    <div className="sw_grid sw_grid-column">
                    <Image name={"property-1.jpg"} className="sw_img sw_rsq-2" alt={"map"}></Image>
                    </div>
                    <div className="sw_grid sw_grid-column">
                    <Image name={"property-2.jpg"} className="sw_img sw_rsq-2" alt={"map"}></Image>
                    </div>
                    <div className="sw_grid sw_grid-column">
                    <Image name={"property-3.jpg"} className="sw_img sw_rsq-2" alt={"map"}></Image>
                    </div>
                    <div className="sw_grid sw_grid-column">
                    <Image name={"property-4.jpg"} className="sw_img sw_rsq-2" alt={"map"}></Image>
                    
                    </div>

                </div>
                <div className="sw_grid-row">
                        <div className="sw_grid sw_grid-100">
                        <Image name={"map.jpg"} className="sw_img sw_rsq-2 property-map" alt={"map"}></Image>
                        </div>
                    </div>
            </div>
            <div className="sw_grid sw_grid-40 sw_rp3_grid-100">
                <div className="property-top">
                <div className="sw_flex">
                <h1 className="sw_mb-0 font_sw-2">2-Bedroom Apartment</h1>
                <div>
                    <i className="fa-solid fa-star font_xd-1 st-coral"></i>
                    <i className="fa-solid fa-star font_xd-1 st-coral"></i>
                    <i className="fa-solid fa-star font_xd-1 st-coral"></i>
                    <i className="fa-solid fa-star font_xd-1 st-coral"></i>
    
                </div>
                </div>
                <p className="st-mute font_xd-1">146 Kendall Avenue</p>
                <span className="sw_badge sw_rsq-1 font_xd-4">2 <i className="fa-solid fa-bed  font_xd-3 font_rp3-xd-4 st-coral"></i></span>
                <span className="sw_badge sw_rsq-1 sw_mlr-2">1 <i className="fa-solid fa-bath  font_xd-3 font_rp3-xd-4 st-coral"></i></span>
                <span className="sw_badge sw_rsq-1">0 <i className="fa-solid fa-paw  font_xd-3 font_rp3-xd-4 st-coral"></i></span>
                </div>

                <div className="sw_flex sw_mt-5">
                    <h3 className="st-coral">$3000/month</h3>
                    <a className="sw_btn sw_rsq-1 bg-coral st-white">RENT NOW</a>

                </div>

                <div className="sw_mt-4">
                    <h2 className="st_weight-bold">Overview</h2>
                    <p className="st_align-justify font_xd-1">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis molestias dolores distinctio, 
                        doloremque saepe fugiat modi culpa, est soluta laboriosam porro fuga, provident alias voluptatem animi architecto at aliquam accusantiu
                    </p>

                   


                    <p className="st_align-justify font_xd-1">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis molestias dolores distinctio, 
                        doloremque saepe fugiat modi culpa, est soluta laboriosam porro fuga, provident alias voluptatem animi architecto at aliquam accusantiu
                    </p>

                    <p className="st_align-justify font_xd-1">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis molestias dolores distinctio, 
                        doloremque saepe fugiat modi culpa, est soluta laboriosam porro fuga, provident alias voluptatem animi architecto at aliquam accusantiu
                    </p>

                    <p className="st_align-justify font_xd-1">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis molestias dolores distinctio, 
                        doloremque saepe fugiat modi culpa, est soluta laboriosam porro fuga, provident alias voluptatem animi architecto at aliquam accusantiu
                    </p>


                    <p className="st_align-justify font_xd-1">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis molestias dolores distinctio, 
                        doloremque saepe fugiat modi culpa, est soluta laboriosam porro fuga, provident alias voluptatem animi architecto at aliquam accusantiu
                    </p>

                        
                </div>

                <div className="sw_mt-4">
                    <h2 className="st_weight-bold">Property Features</h2>
                    <div className="sw_grid-row">
                        <div className="sw_grid sw_grid-half">
                            <div className="sw_grid-row">
                                <div className="sw_grid sw_grid-auto">
                                <span className="sw_badge sw_badge-large sw_rsq-1"><i className="fa-solid fa-bed   st-coral"></i></span>
                                </div>
                                <div className="sw_grid sw_grid-column">
                                    <h5 className="sw_mb-0 font_xd-2">Flooring</h5>
                                    <span className="font_xd-2">Hardwood/Tile</span>
                                </div>
                            </div>
                            <div className="sw_grid-row">
                                <div className="sw_grid sw_grid-auto">
                                <span className="sw_badge sw_badge-large sw_rsq-1"><i className="fa-solid fa-bed   st-coral"></i></span>
                                </div>
                                <div className="sw_grid sw_grid-column">
                                    <h5 className="sw_mb-0 font_xd-2">Flooring</h5>
                                    <span className="font_xd-2">Hardwood/Tile</span>
                                </div>
                            </div>
                            <div className="sw_grid-row">
                                <div className="sw_grid sw_grid-auto">
                                <span className="sw_badge sw_badge-large sw_rsq-1"><i className="fa-solid fa-bed   st-coral"></i></span>
                                </div>
                                <div className="sw_grid sw_grid-column">
                                    <h5 className="sw_mb-0 font_xd-2">Flooring</h5>
                                    <span className="font_xd-2">Hardwood/Tile</span>
                                </div>
                            </div>

                            <div className="sw_grid-row">
                                <div className="sw_grid sw_grid-auto">
                                <span className="sw_badge sw_badge-large sw_rsq-1"><i className="fa-solid fa-bed   st-coral"></i></span>
                                </div>
                                <div className="sw_grid sw_grid-column">
                                    <h5 className="sw_mb-0 font_xd-2">Flooring</h5>
                                    <span className="font_xd-2">Hardwood/Tile</span>
                                </div>
                            </div>
                            <div className="sw_grid-row">
                                <div className="sw_grid sw_grid-auto">
                                <span className="sw_badge sw_badge-large sw_rsq-1"><i className="fa-solid fa-bed   st-coral"></i></span>
                                </div>
                                <div className="sw_grid sw_grid-column">
                                    <h5 className="sw_mb-0 font_xd-2">Flooring</h5>
                                    <span className="font_xd-2">Hardwood/Tile</span>
                                </div>
                            </div>
                            <div className="sw_grid-row">
                                <div className="sw_grid sw_grid-auto">
                                <span className="sw_badge sw_badge-large sw_rsq-1"><i className="fa-solid fa-bed   st-coral"></i></span>
                                </div>
                                <div className="sw_grid sw_grid-column">
                                    <h5 className="sw_mb-0 font_xd-2">Flooring</h5>
                                    <span className="font_xd-2">Hardwood/Tile</span>
                                </div>
                            </div>

                        </div>
                        <div className="sw_grid sw_grid-half">
                        <div className="sw_grid-row">
                                <div className="sw_grid sw_grid-auto">
                                <span className="sw_badge sw_badge-large sw_rsq-1"><i className="fa-solid fa-bed   st-coral"></i></span>
                                </div>
                                <div className="sw_grid sw_grid-column">
                                    <h5 className="sw_mb-0 font_xd-2">Flooring</h5>
                                    <span className="font_xd-2">Hardwood/Tile</span>
                                </div>
                            </div>
                            <div className="sw_grid-row">
                                <div className="sw_grid sw_grid-auto">
                                <span className="sw_badge sw_badge-large sw_rsq-1"><i className="fa-solid fa-bed   st-coral"></i></span>
                                </div>
                                <div className="sw_grid sw_grid-column">
                                    <h5 className="sw_mb-0 font_xd-2">Flooring</h5>
                                    <span className="font_xd-2">Hardwood/Tile</span>
                                </div>
                            </div>
                            <div className="sw_grid-row">
                                <div className="sw_grid sw_grid-auto">
                                <span className="sw_badge sw_badge-large sw_rsq-1"><i className="fa-solid fa-bed   st-coral"></i></span>
                                </div>
                                <div className="sw_grid sw_grid-column">
                                    <h5 className="sw_mb-0 font_xd-2">Flooring</h5>
                                    <span className="font_xd-2">Hardwood/Tile</span>
                                </div>
                            </div>

                            <div className="sw_grid-row">
                                <div className="sw_grid sw_grid-auto">
                                <span className="sw_badge sw_badge-large sw_rsq-1"><i className="fa-solid fa-bed   st-coral"></i></span>
                                </div>
                                <div className="sw_grid sw_grid-column">
                                    <h5 className="sw_mb-0 font_xd-2">Flooring</h5>
                                    <span className="font_xd-2">Hardwood/Tile</span>
                                </div>
                            </div>
                            <div className="sw_grid-row">
                                <div className="sw_grid sw_grid-auto">
                                <span className="sw_badge sw_badge-large sw_rsq-1"><i className="fa-solid fa-bed   st-coral"></i></span>
                                </div>
                                <div className="sw_grid sw_grid-column">
                                    <h5 className="sw_mb-0 font_xd-2">Flooring</h5>
                                    <span className="font_xd-2">Hardwood/Tile</span>
                                </div>
                            </div>
                            <div className="sw_grid-row">
                                <div className="sw_grid sw_grid-auto">
                                <span className="sw_badge sw_badge-large sw_rsq-1"><i className="fa-solid fa-bed   st-coral"></i></span>
                                </div>
                                <div className="sw_grid sw_grid-column">
                                    <h5 className="sw_mb-0 font_xd-2">Flooring</h5>
                                    <span className="font_xd-2">Hardwood/Tile</span>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div>
                
                <div className="sw_flex sw_mt-4">
                <a className="sw_btn sw_rsq-1 bg-coral st-white"><i className="fa-regular fa-envelope"></i> CONTACT OWNER</a>
               
                <a className="sw_btn sw_rsq-1 bg-coral st-white"><i className="fa-regular fa-edit"></i> WRITE REVIEW</a>
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

export default Property;