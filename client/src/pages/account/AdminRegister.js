import 'swavy-ui/dist/css/swavy-ui.min.css';
import '../../App.css';

import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { Navbar } from '../../components/default/Navbar';
import { Hero } from '../../components/default/Hero';
import Footer from '../../components/default/Footer';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faEnvelope, faLock, faPhone, faUser, faWarning } from '@fortawesome/free-solid-svg-icons';


const SERVER_URL = 'http://localhost:8080';

const AdminRegister = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [role, setRole] = useState("admin");

    const [message, setMessage] = useState("");
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();

    const handleChange = (e) => {
        if (e.target.name === "name") {
            setName(e.target.value);
        } else if (e.target.name === "email") {
            setEmail(e.target.value);
        } else if (e.target.name === "username") {
            setUsername(e.target.value);
        } else if (e.target.name === "phone") {
            setPhone(e.target.value);
        } else if (e.target.name === "password") {
            setPassword(e.target.value);
        } else if (e.target.name === "confirmPassword") {
            setConfirmPassword(e.target.value);
        } else if (e.target.name === "role") {
            setRole(e.target.value);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setMessage("");

        try {
            const res = await axios.post(SERVER_URL + "/users/register", {
                name,
                username,
                email,
                phone,
                password,
                confirmPassword,
                role
            });

            if (res.data.status) {
                setMessage('Registration successful!');
            }

        } catch (err) {
            setError(err.response.data.message);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        if (message) {
            const redirectTimer = setTimeout(() => {
                navigate('/admin/login');
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
                            
                            <h1 className="font_sw-2">Let's Get Started</h1>
                        <p className="font_xd-1 sw_mb-3">
                        Welcome to RentHub, sign up for full access to our rental platform!
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

                                    <form className="sw_form" onSubmit={handleSubmit}>
                                        <label for="name">Name*</label>
                                        <div className="sw_form-addon sw_form-addon-prepend sw_rsq-1">
                                            <span className="addon-icon addon-merge st-coral font_xd-2">
                                            <FontAwesomeIcon icon={faUser} color='coral' size='10' />
                                            </span>
                                            <input 
                                                className="sw_form-input"
                                                placeholder="Enter name"
                                                type="text"
                                                name="name"
                                                value={name}
                                                onChange={handleChange}
                                            />
                                        </div>

                                        <label for="name">Username*</label>
                                        <div className="sw_form-addon sw_form-addon-prepend sw_rsq-1">
                                            <span className="addon-icon addon-merge st-coral font_xd-2">
                                            <FontAwesomeIcon icon={faUser} color='coral' size='10' />
                                            </span>
                                            <input 
                                                className="sw_form-input"
                                                placeholder="Enter username"
                                                type="text"
                                                name="username"
                                                value={username}
                                                onChange={handleChange}
                                            />
                                        </div>
        
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
        
                                        <label for="name">Phone*</label>
                                        <div className="sw_form-addon sw_form-addon-prepend sw_rsq-1">
                                            <span className="addon-icon addon-merge st-coral font_xd-2">
                                                <FontAwesomeIcon icon={faPhone} color='coral' size='10' />
                                            </span>
                                            <input 
                                                className="sw_form-input"
                                                placeholder="Enter phone number"
                                                type="text"
                                                name="phone"
                                                value={phone}
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
        
                                        <label for="name">Confirm Password*</label>
                                        <div className="sw_form-addon sw_form-addon-prepend sw_rsq-1">
                                        <span className="addon-icon addon-merge st-coral font_xd-2">
                                                <FontAwesomeIcon icon={faLock} color='coral' size='2' />
                                            </span>
                                            <input 
                                                className="sw_form-input"
                                                placeholder="Enter password"
                                                type="password"
                                                name="confirmPassword"
                                                value={confirmPassword}
                                                onChange={handleChange}
                                            />
                                        </div>


                                        <div className="sw_flex">
                                        <div className="sw_form-check-wrapper">
                                            <input type="checkbox" className="sw_form-check" id="terms" />
                                            <label className="sw_form-check-label" htmlFor="terms">Accept terms &amp; conditions</label>
                                        </div>
                                        <div>
                                        <i className="fa-solid fa-info-circle st-coral"></i> <span className="font_xd-2">Privacy Policy</span>
                                        </div>
                                    </div>

                                        <input 
                                            type="hidden" 
                                            value="admin" 
                                            name="role"
                                            onChange={handleChange}
                                            />
                                        <input type="submit" className="sw_btn sw_btn-block bg-coral st-white sw_rsq-1" value="CREATE ACCOUNT" />

                                    </form>
                                    <p className="font_xd-2">Existing user? Login <a href="/admin/login" className="font_xd-2">here</a></p>

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

export default AdminRegister;
