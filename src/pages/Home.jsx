import React from 'react';

import Hero from '../components/Hero';
import InfoSection from '../components/InfoSection';
// import Navbar from '../components/Navbar';
import { sliderData } from '../data/SliderData';
import { infoData } from '../data/InfoData';
// import GlobalStyle from '../globalStyle';
// import Testimonial from './components/Testimonial';
import { testimonialData } from '../data/testimonialData';
import Contact from '../components/Contact';
import SimpleTestimonial from '../components/SimpleTestimonial';
import {brandData} from '../data/brandData';
import Brands from '../components/Brands';


function Home() {


    return (
        <>
            {/* <Navbar toggle={toggle}/> */}
            {/* <Dropdown isOpen={isOpen} toggle={toggle}/> */}
            <Hero slides={sliderData}/>
            <InfoSection infoData={infoData}/>
            {/* <Testimonial testimonial={testimonialData}/> */}
            <Brands brandData={brandData} />
            <SimpleTestimonial  testimonial={testimonialData}/> 
            <Contact/>
        </>
    )
}

export default Home
