import React, { useEffect } from "react";
import Image from "./Image";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faEnvelope, faSearch, faUserCircle } from '@fortawesome/free-solid-svg-icons';


export const DashboardNavbar = ({username, role}) => {
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector('.sw_navbar');
      if (navbar.classList.contains('sw_navbar-fixed')) {
        if (navbar.hasAttribute('data-onscroll')) {
          const scrollColor = navbar.getAttribute('data-onscroll');
          if (window.scrollY > 50) {
            navbar.classList.add(scrollColor);
          } else if (window.scrollY < 50) {
            navbar.classList.remove(scrollColor);
          }
        }
      }
    };

    const handleNavbarToggle = () => {
      const navbarTogglers = document.querySelectorAll('.sw_navbar-mobile-toggler');
      navbarTogglers.forEach(navbarToggler => {
        navbarToggler.addEventListener('click', () => {
          const menuDirection = navbarToggler.getAttribute('data-mobile');
          const nav = navbarToggler.parentElement;
          const navWidget = navbarToggler.parentElement.querySelector('.sw_navbar-widget');

          if (navbarToggler.getAttribute('data-toggle-icon') === 'true') {
            const manualClose = navbarToggler.querySelector('[data-close=navbar]');
            if (manualClose !== null) {
              manualClose.previousElementSibling.classList.toggle('sw_ds-none');
              manualClose.classList.toggle('sw_ds-block');
              manualClose.addEventListener('click', () => {
                navWidget.classList.add('sw_ds-block');
              });
            } else {
              navbarToggler.classList.toggle('sw_menu-close');
            }
          }

          if (menuDirection === 'horizontal') {
            if (nav.classList.contains('bg-none')) {
              nav.classList.toggle('bg-white');
            }
            navWidget.classList.toggle('sw_ds-block');
          } else if (menuDirection === 'vertical') {
            const navId = navbarToggler.getAttribute('data-target');
            const targetNav = document.querySelector(navId);
            targetNav.classList.toggle('show');
          }
        });
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleNavbarToggle();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);



 

  return (
    <header className="sw_bxsh sw_navbar bg-none">
        <div className="topbar-left">
            <a href="/" className="">
                <Image name={"logo-transparent.png"} alt={"RENTHUB"} className="sw_img sw_wd-60"></Image> 
            </a>
        </div>
        <div className="sw_navbar-center">
        <form action="">
            <input type="text" className="sw_form-input bg-white sw_bxsh sw_no-br sw_rsq-5" placeholder="Search..." />
            <button className="sw_btn bg-white sw_bxsh sw_rsq-6 st-coral sw_ml-1">
            <FontAwesomeIcon icon={faSearch}  />
            </button>
       </form>
        </div >
        <div className="sw_navbar-right">
        <ul>
            <li className="sw_navbar-menu sw_mt-4">
            <a href="/" className="sw_navbar-link">
            <FontAwesomeIcon icon={faEnvelope}  />
            </a>
            </li>
            <li className="sw_navbar-menu sw_mt-4">
            <a href="/" className="sw_navbar-link">
            <FontAwesomeIcon icon={faBell}  />
            </a>
            </li>
            <li className="sw_navbar-menu">
            <a href="/" className="sw_navbar-link">
        <span>{`${username}`}</span>
            <p class="sw-admin-topbar-name st-mute  font_xd-1">{`${role}`}</p>
        </a>
            </li>


            <li className="sw_navbar-menu sw_mt-4">
            <a href="/" className="sw_navbar-link">
            <FontAwesomeIcon icon={faUserCircle} style={{ fontSize: '30px' }} />
            </a>
            </li>
        </ul>
        
        
        

        
            
            </div>
    </header>

  );
};

//export default Navbar;
