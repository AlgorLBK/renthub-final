// import 'swavy-ui/dist/css/swavy-ui.min.css';
// import '../../App.css';

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { DashboardNavbar } from '../../components/default/DashboardNavbar';
import AdminSidebar from '../../components/admin/AdminSidebar';
import { Welcome } from '../../components/Welcome';
import Footer from '../../components/default/Footer';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUsers } from '@fortawesome/free-solid-svg-icons';

const SERVER_URL = 'http://localhost:8080';

const AdminHome = () => {

    const navigate = useNavigate();

    const [user, setUser] = useState({});
    const [countTenants, setCountTenants] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const [countAllProperties, setCountAllProperties] = useState(0);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const role = localStorage.getItem('role');
    if (!token && role !== 'admin') {
      navigate('/admin/login');
    } else {
      axios.get(`${SERVER_URL}/users/verify-token`, {
        headers: {
          Authorization: `Bearer ${token}`,
          Role: 'admin'
        }
      })
      .then(response => {
        
        const { userId } = response.data.userId;
        console.log(userId);
 ;

        axios.get(SERVER_URL + '/users/' + userId)
        .then((res) => {
          setUser(res.data.user)
          
    
        })
        .catch((err) => console.log(err))
        .finally(() => setIsLoading(false));



      })
      .catch(error => {
        console.error(error);
        navigate('/admin/login');
      });

    }

  }, [navigate]);

//   useEffect(() => {
//     // Define a function to fetch the count from the backend
//     const fetchCount = async () => {
//         try {
//             const response = await axios.get(SERVER_URL + '/users/tenants'); 
//             setCountTenants(response.data.count);
//         } catch (error) {
//             console.error('Error fetching count:', error);
//         }
//     };

//     // Call the fetchCount function
//     fetchCount();
// }, []); 

//   useEffect(() => {
//     axios.get(`${SERVER_URL}/properties/count`)
//     .then((res) => {
//         setCountAllProperties(res.data.count);
//     })
//     .catch((err) => console.log(err));
// }, []); 

// useEffect(() => {

//   axios.get(`${SERVER_URL}/users/tenants`)
//   .then((res) => {
//       setCountTenants(res.data.countTenants);
//   })
//   .catch((err) => console.log(err));
// }, []); 

  return (
    
    <>
      <DashboardNavbar username={user.username} role={"Admin"}></DashboardNavbar> 
      <div className="sw_wrapper sw_mt-8">
        <div className="sw_grid-row">
            <div className="sw_grid sw_grid-20">
                <AdminSidebar></AdminSidebar>
            </div>
            <div className="sw_grid sw_grid-80">
                <Welcome user={user.username}></Welcome>

                <div className="sw_grid-row">
                    <div className="sw_grid sw_grid-third">
                        <div className="sw_panel sw_panel-styled sw_rsq-2">
                            <div className="sw_panel-wrapper">
                            <FontAwesomeIcon icon={faHome} className='st-coral font_sw-1'  />
                                <h1 className="sw_mtb-3">Total Properties</h1>
                                <h3>{countAllProperties}</h3>
                            </div>
                        </div>
                    </div>
                    <div className="sw_grid sw_grid-third">
                    <div className="sw_panel sw_panel-styled sw_rsq-2">
                            <div className="sw_panel-wrapper">
                                <FontAwesomeIcon icon={faUsers} className='st-coral font_sw-1'  />
                                <h1 className="sw_mtb-3">Total Tenants</h1>
                                <h3>{countTenants}</h3>
                            </div>
                        </div>
                    </div>
                    <div className="sw_grid sw_grid-third">
                    <div className="sw_panel sw_panel-styled sw_rsq-2">
                            <div className="sw_panel-wrapper">
                                <i className="fa-regular fa-user st-coral font_sw-1"></i>
                                <h1 className="sw_mtb-3">Total Landlords</h1>
                                <h3>5</h3>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="sw_grid-row">
                    <div className="sw_grid sw_grid-third">
                        <div className="sw_panel sw_panel-styled sw_rsq-2">
                            <div className="sw_panel-wrapper">
                                <i className="fa-solid fa-home st-coral font_sw-1"></i>
                                <h1 className="sw_mtb-3">Royalties</h1>
                                <h3>5</h3>
                            </div>
                        </div>
                    </div>
                    <div className="sw_grid sw_grid-third">
                    <div className="sw_panel sw_panel-styled sw_rsq-2">
                            <div className="sw_panel-wrapper">
                                <i className="fa-solid fa-users st-coral font_sw-1"></i>
                                <h1 className="sw_mtb-3">Notifications</h1>
                                <h3>200</h3>
                            </div>
                        </div>
                    </div>
                    <div className="sw_grid sw_grid-third">
                    <div className="sw_panel sw_panel-styled sw_rsq-2">
                            <div className="sw_panel-wrapper">
                                <i className="fa-regular fa-user st-coral font_sw-1"></i>
                                <h1 className="sw_mtb-3">Analytics</h1>
                                <h3>5</h3>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="sw_grid-row sw_mt-5">
                    <div className="sw_grid sw_grid-100">
                        <div className="sw_panel sw_panel-styled sw_rsq-2">
                            <div className="sw_panel-wrapper sw_pd-8">
                                <p className="font_xd-2 st_align-center sw_pd-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            adipisicing elit. Labore animi, veniam tenetur
            similique totam odit beatae, ratione, quam nostrum
              culpa dolores? Ducimus ratione architecto aut
              blanditiis aperiam, nisi autem inventore!
              Quo, corporis, ipsum suscipit harum id, repellat odit eos
            blanditiis et quibusdam tempore placeat similique!
            Quod, molestiae? Rem voluptates placeat, beatae
            quidem doloremque veniam magni dolores quibusdam 
            repudiandae non?</p>
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

export default AdminHome;