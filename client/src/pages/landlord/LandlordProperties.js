import 'swavy-ui/dist/css/swavy-ui.min.css';
import '../../App.css';

import { DashboardNavbar } from '../../components/default/DashboardNavbar';
import LandlordSidebar from '../../components/landlord/LandlordSidebar';
import { Welcome } from '../../components/Welcome';
import { LandlordPropertiesSection } from '../../components/landlord/LandlordPropertiesSection';
import Footer from '../../components/default/Footer';

const LandlordProperties = () => {
  return (
    
    <>
      <DashboardNavbar user={"Landlord"}></DashboardNavbar> 
      <div className="sw_wrapper sw_mt-8">
        <div className="sw_grid-row">
            <div className="sw_grid sw_grid-20">
                <LandlordSidebar></LandlordSidebar>
            </div>
            <div className="sw_grid sw_grid-80">
                <Welcome user={'Divine'}></Welcome>
                <LandlordPropertiesSection></LandlordPropertiesSection>
            </div>
        </div>
    </div>
      <Footer></Footer>
    </>
    
  );
}

export default LandlordProperties;