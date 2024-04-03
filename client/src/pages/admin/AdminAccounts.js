import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { DashboardNavbar } from '../../components/default/DashboardNavbar';
import AdminSidebar from '../../components/admin/AdminSidebar';
import { Welcome } from '../../components/Welcome';
import Footer from '../../components/default/Footer';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHome, faPlus, faUsers } from '@fortawesome/free-solid-svg-icons';

const SERVER_URL = 'http://localhost:8080';
const token = localStorage.getItem('token');
const role = localStorage.getItem('role');

const AdminAccounts = () => {

  const navigate = useNavigate();

    const [user, setUser] = useState({});
    const [landlords, setLandlords] = useState([]);
    const [tenants, setTenants] = useState([]);

    useEffect(() => {

      if (!token || role !== 'admin') {
        navigate('/admin/login');
        return;
      }
        fetchUser();
        fetchTenants();
    }, [navigate]);
    

      const fetchTenants = async () => {
        try {
          const response = await axios.get(`${SERVER_URL}/users/tenants`);
          setTenants(response.data.tenants);
          console.log(response);
        } catch (error) {
          console.error('Error fetching users:', error);
        }
      }

      const fetchUser = async () => {
        try {
          const response = await axios.get(`${SERVER_URL}/auth/verify-token`, {
            headers: {
              Authorization: `Bearer ${token}`,
              Role: 'admin'
            }
          });
              
        const { userId } = response.data.userId;
        const userResponse = await axios.get(`${SERVER_URL}/users/single/${userId}`);
        setUser(userResponse.data.user);
        } catch (error) {
          console.error('Error fetching users:', error);
        }
      }



      
    // useEffect(() => {

    //   const fetchTenants = async () => {
    //     try {
    //       const response = await axios.get(`${SERVER_URL}/users/tenants`);
    //       setTenants(response.data);
    //     } catch (error) {
    //       console.error('Error fetching tenants:', error);
    //     }
    //   };

    //   const fetchData = async () => {
    //     const token = localStorage.getItem('token');
    //     const role = localStorage.getItem('role');
      
    //     if (!token || role !== 'admin') {
    //       navigate('/admin/login');
    //       return;
    //     }
      
    //     try {
    //       const response = await axios.get(`${SERVER_URL}/auth/verify-token`, {
    //         headers: {
    //           Authorization: `Bearer ${token}`,
    //           Role: 'admin'
    //         }
    //       });
      
    //       const { userId } = response.data.userId;
      
    //       const userResponse = await axios.get(`${SERVER_URL}/users/${userId}`);
    //       setUser(userResponse.data.user);
      
    //       // Fetch landlords
    //       const landlordsResponse = await axios.get(`${SERVER_URL}/users/landlords`);
    //       setLandlords(landlordsResponse.data.landlords);
      
    //       // Fetch tenants
    //       fetchTenants()
          
    //     } catch (error) {
    //       console.error('Error fetching data:', error);
    //       // Handle error - e.g., show error message to the user
    //     }
    //   };
      
      
    //   fetchData();
    // }, [navigate]);
  



    return (
      <>
        <DashboardNavbar username={user.username} role={"Admin"} />
        <div className="sw_wrapper sw_mt-8">
          <div className="sw_grid-row">
            <div className="sw_grid sw_grid-20">
              <AdminSidebar />
            </div>
            <div className="sw_grid sw_grid-80">
              <Welcome user={user.username} />
    
              <div className="sw_panel sw_panel-styled bg-none sw_rsq-2">
                <div className="sw_panel-wrapper">
                 
    
                  <div className="sw_grid-row sw_mt-4">
                    <div className="sw_grid sw_grid-100">
                      <div className="sw_panel sw_panel-outline sw_rsq-1">
                        <div className="sw_panel-header bg-none">
                          <h3 className="sw_ds-inline-block">Landlords</h3>
                        </div>
                        <div className="sw_panel-wrapper">
     
    
                          <div className="sw_table-responsive">
                            <table className="sw_table sw_table-bordered st_align-center">
                              <thead>
                                <tr>
                                <th>Name</th>
                                  <th>Email</th>
                                  <th>Phone</th>
                                  <th>Date Joined</th>
                                  <th>Edit</th>
                                  <th>Delete</th>
                                </tr>
                              </thead>
                              <tbody>
                                {landlords.length === 0 ? (
                                  <tr><td colSpan={8}>No landlords yet</td></tr>
                                ) : (
                                  landlords.map(landlord => (
                                    <tr key={landlord._id}>
                                      <td>{landlord.name}</td>
                                      <td>{/* Render property image here */}</td>
                                      <td>{landlord.email}</td>
                                      <td>{landlord.phone}</td>
                                      <td>{landlord.createdAt}</td>
                                      <td>{/* Add edit button */}</td>
                                      <td>{/* Add delete button */}</td>
                                    </tr>
                                  ))
                                )}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>


                      <div className="sw_panel sw_panel-outline sw_rsq-1 sw_mt-5">
                        <div className="sw_panel-header bg-none">
                          <h3 className="sw_ds-inline-block">Tenants</h3>
                        </div>
                        <div className="sw_panel-wrapper">
     
    
                          <div className="sw_table-responsive">
                            <table className="sw_table sw_table-bordered st_align-center">
                              <thead>
                                <tr>
                                <th>Name</th>
                                  <th>Email</th>
                                  <th>Phone</th>
                                  <th>Date Joined</th>
                                  <th>Edit</th>
                                  <th>Delete</th>
                                </tr>
                              </thead>
                              <tbody>
                              {tenants?.length
                                ?
                                tenants.map((tenant) => (
                                  <tr key={tenant._id}>
                                    <td className="border px-4 py-2 text-center">{tenant.name}</td>
                                    <td className="border px-4 py-2 text-center">{tenant.email}</td>
                                    <td className="border px-4 py-2 flex flex-nowrap justify-center">
                                     

                                    </td>
                                  </tr>
                                ))
                                :
                                <td className="border px-4 py-2 text-center" rowSpan={10} colSpan={10}>No Data Found</td>

                              }
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>



                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
 }

export default AdminAccounts;