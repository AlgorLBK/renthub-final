import 'swavy-ui/dist/css/swavy-ui.min.css';
import '../App.css';

import {Navbar} from '../components/default/Navbar'
import { Hero } from '../components/default/Hero';
import { HomeService } from '../components/HomeService';
import Footer from '../components/default/Footer';

const Service = () => {
  return (
    
    <>
      <Navbar navType={"hero"}></Navbar> 
      <Hero size={"mid"}></Hero>
      <HomeService></HomeService>
      <Footer></Footer>
    </>
    
  );
}

export default Service;