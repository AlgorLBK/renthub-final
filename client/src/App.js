import React from "react";
import { BrowserRouter as Router, Route,  Routes } from 'react-router-dom';

import Home from "./pages/Home";
import Properties from "./pages/Properties";
import Property from './pages/Property'
import Service from "./pages/Service";
import Register from "./pages/account/Register";

import Contact from "./pages/Contact";

import TenantRegister from "./pages/account/TenantRegister";
import TenantLogin from "./pages/account/TenantLogin";
import { TenantHome } from "./pages/tenant/TenantHome";
import { TenantLease } from "./pages/tenant/Lease";
import { TenantReportIssue } from "./pages/tenant/TenantReportIssue";
import { MaintenanceAndUtility } from "./pages/tenant/MaintenanceAndUtilities";
import { TenantInbox } from "./pages/tenant/TenantInbox";

import LandlordHome from "./pages/landlord/LandlordHome";
import LandlordProperties from "./pages/landlord/LandlordProperties";
import LandlordTenants from "./pages/landlord/LandlordTenants";
import LandlordInbox from "./pages/landlord/LandlordInbox";
import LandlordReportIssue from "./pages/landlord/LandlordReportIssue";
import AddProperty from "./pages/landlord/AddProperty";

import AdminRegister from "./pages/account/AdminRegister";
import AdminLogin from "./pages/account/AdminLogin";
import AdminHome from "./pages/admin/AdminHome";
import AdminProperties from "./pages/admin/AdminProperties";
import AdminPropertiesAdd from "./pages/admin/AdminPropertiesAdd";
import AdminAccounts from "./pages/admin/AdminAccounts";
import AdminInbox from "./pages/admin/AdminInbox";



const App = () => {
  return (
    <Router>
      <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/properties' element={<Properties/>} />
      <Route path='/property/:slug' element={<Property/>} />
      <Route path='/services' element={<Service/>} />
      <Route path='/register' element={<Register/>} />

      <Route path='/contact' element={<Contact/>} />
      <Route path='/landlord' element={<LandlordHome/>} />
      <Route path='/landlord/properties' element={<LandlordProperties/>} />
      <Route path='/landlord/tenants' element={<LandlordTenants/>} />
      <Route path='/landlord/inbox' element={<LandlordInbox/>} />
      <Route path='/landlord/inbox' element={<LandlordReportIssue/>} />
      <Route path='/landlord/properties/add' element={<AddProperty/>} />


      <Route path='/tenant/register' element={<TenantRegister/>} />
      <Route path='/tenant/login' element={<TenantLogin/>} />
      <Route path='/tenant' element={<TenantHome/>} />
      <Route path='/tenant/lease' element={<TenantLease/>} />
      <Route path='/tenant/report-issue' element={<TenantReportIssue/>} />
      <Route path='/tenant/maintenance-and-utilities' element={<MaintenanceAndUtility/>} />
      <Route path='/tenant/inbox' element={<TenantInbox/>} />

      <Route path='/admin/register' element={<AdminRegister/>} />
      <Route path='/admin/login' element={<AdminLogin/>} />
      <Route path='/admin' element={<AdminHome/>} />
      <Route path='/admin/properties' element={<AdminProperties/>} />
      {/* <Route path='/admin/properties/add' element={<AdminPropertiesAdd/>} /> */}
      <Route path='/admin/accounts' element={<AdminAccounts/>} />
      <Route path='/admin/inbox' element={<AdminInbox/>} />
      
    

      </Routes>
    </Router>
  );
}

export default App;
