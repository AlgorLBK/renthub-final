import React, { useEffect } from "react";


export const Hero = ({size}) => {
    let heroSize;
    if(size === 'mid') {
        heroSize = 'sw_hero-mx';
    } else {
        heroSize = 'sw_hero-full'
    }
    useEffect(() => {
        const heroElements = document.querySelectorAll('.sw_hero[data-bg]');
        heroElements.forEach(heroElement => {
          const heroBg = heroElement.getAttribute('data-bg');
          const heroOverlay = heroElement.getAttribute('data-overlay') === 'true';
          heroElement.style.backgroundImage = heroOverlay
            ? `linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)), url('${heroBg}')`
            : `url('${heroBg}')`;
        });
      }, []);

    return (
        <div class={`sw_hero ${heroSize}`} data-bg={process.env.PUBLIC_URL + `/assets/images/hero.jpg`} data-overlay="true">
        <div class="sw_hero-content  sw_rp3-mlr-auto">
            <div class=" br_gulf-blue st_align-center">
                <h1 class="font_sw-3 font_rp3-sw-2 st-white">Get Your Dream Space</h1>
 
    
                <a href="/tenant" class="sw_btn sw_rsq-7 bg-coral sw_plr-7  sw_mt-4  font_xd-2 sw_br-2 st-white sw_ds-rp3-inline_block">Rent Apartment</a>
                <a href="/landlord/properties/add" class="sw_btn sw_rsq-7 bg-coral sw_plr-7  sw_mt-4 sw_ml-2  font_xd-2 sw_br-2 st-white sw_ds-rp3-inline_block">List Property</a>
                
            </div>
        </div>
    </div>
    );
}