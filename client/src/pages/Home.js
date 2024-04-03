import 'swavy-ui/dist/css/swavy-ui.min.css';
import '../App.css';

import {Navbar} from '../components/default/Navbar'
import { Hero } from '../components/default/Hero'
import { HomeFeatures } from '../components/Features';
import HomeServices from '../pages/Services';
import HomeSection from '../components/Section';
import Footer from '../components/default/Footer';



const Home = () => {
  return (
    
    <>
      <Navbar navType={"hero"}></Navbar> 
      <Hero></Hero>
      <HomeFeatures></HomeFeatures>
      <HomeServices></HomeServices>
      <HomeSection></HomeSection>
      <Footer></Footer>
    </>
    
  );
}

export default Home;