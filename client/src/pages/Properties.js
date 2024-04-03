import 'swavy-ui/dist/css/swavy-ui.min.css';
import '../App.css';

import {Navbar} from '../components/default/Navbar'
import FilterPanel from '../components/properties/FilterPanel';
import { List } from '../components/properties/List';
import Footer from '../components/default/Footer'; 

const Properties = () => {
  return (
    
    <>
      <Navbar navType={"normal"}></Navbar> 
      <div className="sw_wrapper sw_mt-8"> 
        <div className="sw_grid-row">
            <div className="sw_grid sw_grid-20 sw_rp3_grid-100">
                <FilterPanel></FilterPanel>
            </div>
            <div className="sw_grid sw_grid-80 sw_rp3_grid-100">
              <List></List>
            </div>
        </div>
    </div>
      <Footer></Footer>
    </>
    
  );
}

export default Properties;