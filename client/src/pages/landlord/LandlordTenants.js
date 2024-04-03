import 'swavy-ui/dist/css/swavy-ui.min.css';
import '../../App.css';

import { DashboardNavbar } from '../../components/default/DashboardNavbar';
import LandlordSidebar from '../../components/landlord/LandlordSidebar';
import { Welcome } from '../../components/Welcome';
import { LandlordTenantsSection } from '../../components/landlord/LandlordTenantsSection';
import Footer from '../../components/default/Footer';

const LandlordTenants = () => {
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
                <LandlordTenantsSection></LandlordTenantsSection>
            </div>
        </div>
    </div>
      <Footer></Footer>
    </>
    
  );
}

export default LandlordTenants;