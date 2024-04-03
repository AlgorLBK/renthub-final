import 'swavy-ui/dist/css/swavy-ui.min.css';
import '../../App.css';

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { DashboardNavbar } from '../../components/default/DashboardNavbar';
import AdminSidebar from '../../components/admin/AdminSidebar';
import { Welcome } from '../../components/Welcome';
import { ListProperty } from '../../components/landlord/ListProperty';
import Footer from '../../components/default/Footer';

const SERVER_URL = 'http://localhost:8080';


const AdminPropertiesAdd = () => {

    const navigate = useNavigate();

  //const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState({});
  const [countTenants, setCountTenants] = useState(0);
  const [countLandlords, setCountLandlords] = useState(0);
  
  const [countAllProperties, setCountAllProperties] = useState(0);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const role = localStorage.getItem('role');
  if (!token && role !== 'admin') {
    navigate('/admin/login');
  } else {
    axios.get(`${SERVER_URL}/auth/verify-token`, {
      headers: {
        Authorization: `Bearer ${token}`,
        Role: 'admin'
      }
    })
    .then((response) => {
      const { userId } = response.data.userId;
      console.log(userId);

      axios.get(SERVER_URL + '/users/' + userId)
      .then((res) => {
        setUser(res.data.user)
      })

      axios.get(SERVER_URL + '/admin')
      .then((res) => {
        setCountAllProperties(res.data.propertyCount);
        setCountTenants(res.data.tenantCount);
        setCountLandlords(res.data.landlordCount);
      })
      
    })

  }
}, [navigate]);
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
              <ListProperty></ListProperty>
            </div>
        </div>
    </div>
      <Footer></Footer>
    </>
    
  );
}

export default AdminPropertiesAdd;