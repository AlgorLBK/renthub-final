import 'swavy-ui/dist/css/swavy-ui.min.css';
import '../../App.css';

import React, { useState } from 'react';
import axios from 'axios';
import { Navbar } from '../../components/default/Navbar';
import { Hero } from '../../components/default/Hero';
import Footer from '../../components/default/Footer';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faEnvelope, faLock, faWarning } from '@fortawesome/free-solid-svg-icons';

const SERVER_URL = 'http://localhost:8080';

const TenantLogins = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const [token, setToken] = useState('');


    const handleChange = (e) => {
         if (e.target.name === "email") {
            setEmail(e.target.value);
        } else if (e.target.name === "password") {
            setPassword(e.target.value);
        } 
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMessage("");
        setSuccessMessage("");
        try {
            const response = await axios.post(SERVER_URL + '/users/login', {
                email,
                password,
            });
            if (response.data.status) {
                setSuccessMessage("Logged in successfully!");
                // Set token in localStorage
                localStorage.setItem('token', response.data.token);
            } else {
                setErrorMessage(response.data.message);
            }
        } catch (error) {
            console.error('Login failed:', error);
            setErrorMessage("An error occurred while logging in.");
        }
    };
    

    
    

    return (
        <>
            <Navbar navType={'hero'} />
            <Hero size={'mid'} />
            <div className="sw_wrapper sw_mtb-4">
                <div className="sw_wd-80 sw_mlr-auto">
                    <div className="sw_panel sw_panel-styled bg-none sw_rsq-1">
                        <div className="sw_panel-wrapper">
                            <div className="sw_mb-4">
                                <a href="/tenant/login" className="st-black sw_br-2 brb-coral">
                                    Tenant
                                </a>
                                <a href="/landlord/login" className="st-black sw_ml-3">
                                    Leaser
                                </a>
                            </div>
                            <h1 className="font_sw-2">Welcome Back</h1>
                            <p className="font_xd-1 sw_mb-3">
                            Welcome to RentHub! Please login to access your account and manage your properties, leases, and payments.
                            </p>
                            <div className="sw_grid-row">
                                <div className="sw_grid sw_grid-60 sw_rp3_grid-100">

                                    {errorMessage && (
                                        <div className="sw_notification sw_notification-styled bg-none sw_rsq-1">
                                            <FontAwesomeIcon icon={faWarning} color='coral' />&nbsp;
                                            <span className="font_xd-2">{errorMessage}</span>
                                        </div>
                                    )}

                                    {successMessage && (
                                        <div className="sw_notification sw_notification-styled bg-none sw_rsq-1">
                                            <FontAwesomeIcon icon={faCheck} color='coral' />&nbsp;
                                            <span className="font_xd-2">{successMessage}</span>
                                        </div>
                                    )}

                                    <form className="sw_form" onSubmit={handleSubmit}>
                                        <label htmlFor="email">Email*</label>
                                        <div className="sw_form-addon sw_form-addon-prepend sw_rsq-1">
                                            <span className="addon-icon addon-merge st-coral">
                                                <FontAwesomeIcon className='font_xd-3' icon={faEnvelope} color='coral' fontSize='10px' />
                                            </span>
                                            <input
                                                className="sw_form-input"
                                                placeholder="Enter email"
                                                type="text"
                                                name="email"
                                                value={email}
                                                onChange={handleChange}
                                            />
                                        </div>

                                        <label htmlFor="password">Password*</label>
                                        <div className="sw_form-addon sw_form-addon-prepend sw_rsq-1">
                                            <span className="addon-icon addon-merge st-coral">
                                                <FontAwesomeIcon icon={faLock} color='coral' />
                                            </span>
                                            <input
                                                className="sw_form-input"
                                                placeholder="Enter password"
                                                type="password"
                                                name="password"
                                                value={password}
                                                onChange={handleChange}
                                            />
                                        </div>

                                        <input type="submit" className="sw_btn sw_btn-block bg-coral st-white sw_rsq-1" value="LOGIN" />
                                        {token && <p>Token: {token}</p>}
                                        <a href="/forgot-password" className="sw_align-right font_xd-2 st-black">
                                            Forgot Password?
                                        </a>
                                    </form>


                                    <p className="font_xd-2">
                                        New user? Register <a href="/tenant/register" className="font_xd-2">here</a>
                                    </p>
                                </div>
                                <div className="sw_grid sw_grid-40 st_align-center">
                                    <div className="sw_mt-8">
                                        <h1 className="font_sw-3">OR</h1>
                                        <a href="/google" className="sw_btn sw_rsq-1 bg-coral st-white">
                                            <i className="fa-brands fa-google"></i> CONTINUE WITH GOOGLE
                                        </a>
                                        <br />
                                        <a href="/facebook" className="sw_btn sw_rsq-1 bg-coral st-white sw_mt-3">
                                            <i className="fa-brands fa-facebook"></i> CONTINUE WITH FACEBOOK
                                        </a>
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
};

export default TenantLogins;
