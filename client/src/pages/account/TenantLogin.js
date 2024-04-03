import 'swavy-ui/dist/css/swavy-ui.min.css';
import '../../App.css';

import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { Navbar } from '../../components/default/Navbar';
import { Hero } from '../../components/default/Hero';
import Footer from '../../components/default/Footer';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faEnvelope, faLock, faWarning } from '@fortawesome/free-solid-svg-icons';


const SERVER_URL = 'http://localhost:8080';

const TenantLogin = () => {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('tenant');

    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'email') {
            setEmail(value);
        } else if (name === 'password') {
            setPassword(value);
        } else if (name === 'role') {
            setRole(value);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setMessage('');

        try {
            const res = await axios.post(`${SERVER_URL}/users/login`, {
                email,
                password,
                role
            });

            if (res.data.status) {
                localStorage.setItem('token', res.data.token);
                localStorage.setItem('user', res.data.user);
                console.log(res.data.token);

                setMessage('Login successful!');
            } else {
                setError(res.data.message);
            }
        } catch (err) {
            //console.error(err);
            setError(err.response.data.message);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        if (message) {
            const redirectTimer = setTimeout(() => {
                navigate('/tenant');
            }, 3000);

            return () => clearTimeout(redirectTimer);
        }
    }, [message, navigate]);

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
                            <h1 className="font_sw-2">Welcome Back!</h1>
                        <p className="font_xd-1 sw_mb-3">
                        Welcome to RentHub! Please login to access your account and manage your properties, leases, and payments.
                        </p>
                            <div className="sw_grid-row">
                                <div className="sw_grid sw_grid-60 sw_rp3_grid-100">

                                {error && (
                                        <div className="sw_notification bg-none br-error-light st-error sw_rsq-1">
                                            <button class="sw_close st-error" data-close="notification"></button>
                                            <FontAwesomeIcon icon={faWarning}  />&nbsp;
                                            <span className="font_xd-2">{error}</span>
                                        </div>
                                    )}

                                    {message && (
                                        <div className="sw_notification bg-none br-success-light st-success sw_rsq-1">
                                             <button class="sw_close st-success" data-close="notification"></button>
                                            <FontAwesomeIcon icon={faCheck}  />&nbsp;
                                            <span className="font_xd-2">{message}</span>
                                        </div>
                                    )}

<form className="sw_form" onSubmit={handleSubmit} method="post">
                                       
        
                                        <label for="name">Email*</label>
                                        <div className="sw_form-addon sw_form-addon-prepend sw_rsq-1">
                                            <span className="addon-icon addon-merge st-coral font_xd-2">
                                            <FontAwesomeIcon icon={faEnvelope} color='coral' size='10' />
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
        
                                      
        
                                        <label for="name">Password*</label>
                                        <div className="sw_form-addon sw_form-addon-prepend sw_rsq-1">
                                            <span className="addon-icon addon-merge st-coral font_xd-2">
                                                <FontAwesomeIcon icon={faLock} color='coral' size='10' />
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
        

                                        <input 
                                            type="hidden" 
                                            value="tenant" 
                                            name="role"
                                            onChange={handleChange}
                                            />
                                        <input type="submit" className="sw_btn sw_btn-block bg-coral st-white sw_rsq-1" value="LOGIN" />

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

export default TenantLogin;
