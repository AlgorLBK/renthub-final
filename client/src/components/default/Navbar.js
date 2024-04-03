import React, { useEffect } from "react";
import NavDropdown from "./NavDropdown";
import Image from "./Image";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


export const Navbar = ({navType}) => {
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
              nav.classList.toggle('bg-coral');
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

  let navColor, navHero;

  if (navType === 'hero') {
    navHero = 'sw_navbar-hero';
    // navLogo = 'logo-white.png'
    navColor = 'bg-none'
  } else {
    navHero = '';
    // navLogo = 'logo-transparent.png';
    navColor = 'bg-coral';
  }

  return (
    <nav className={`sw_navbar sw_navbar-fixed ${navColor} ${navHero}`} data-onscroll="bg-orange">
      <div className="sw_navbar-left">
        <a href="/" className="sw_navbar-brand">
          <Image name={"logo-white.png"} alt={"RENTHUB"} className="sw_wd-70"></Image>
          
        </a>
      </div>
      <button className="sw_navbar-mobile-toggler sw_menu-icon st-white" data-toggle="navbar" data-toggle-icon="true" data-mobile="horizontal" data-target="#mobile-nav"></button>

      <div className="sw_navbar-widget">
        <div className="sw_navbar-center">
          <form action="">
            <input type="text" className="sw_form-input bg-white sw_no-br sw_rsq-5" placeholder="Search..." />
            <button className="sw_btn bg-white sw_rsq-6 st-coral sw_ml-1">
            <FontAwesomeIcon icon={faSearch} />
            </button>
          </form>
        </div>

        <ul className="sw_navbar-right">
          <li className="sw_navbar-menu"><a href="/" className="sw_navbar-link st-white">Home</a></li>
          <li className="sw_navbar-menu"><a href="/properties" className="sw_navbar-link st-white">Properties</a></li>
          <li className="sw_navbar-menu"><a href="/services" className="sw_navbar-link st-white">Services</a></li>

          <NavDropdown></NavDropdown>

          <li className="sw_navbar-menu"><a href="/contact" className="sw_navbar-link font_xd-2 st-white">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

//export default Navbar;
