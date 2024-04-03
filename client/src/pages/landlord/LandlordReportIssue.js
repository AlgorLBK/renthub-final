import 'swavy-ui/dist/css/swavy-ui.min.css';
import '../../App.css';

import { DashboardNavbar } from '../../components/default/DashboardNavbar';
import LandlordSidebar from '../../components/landlord/LandlordSidebar';
import { Welcome } from '../../components/Welcome';
import { ReportIssue } from '../../components/user/ReportIssue';
import Footer from '../../components/default/Footer';

const LandlordReportIssue = () => {
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
                <ReportIssue></ReportIssue>
            </div>
        </div>
    </div>
      <Footer></Footer>
    </>
    
  );
}

export default LandlordReportIssue;