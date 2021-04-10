import React, {useState} from 'react';
import Dropdown from './components/Dropdown';
import Hero from './components/Hero';
import InfoSection from './components/InfoSection';
import Navbar from './components/Navbar';
import { sliderData } from './data/SliderData';
import { infoData } from './data/InfoData';
import GlobalStyle from './globalStyle';
// import Testimonial from './components/Testimonial';
import { testimonialData } from './data/testimonialData';
import Contact from './components/Contact';
import SimpleTestimonial from './components/SimpleTestimonial';

function App() {

  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  

  return (
    <>
      <GlobalStyle/>
        <Navbar toggle={toggle}/>
        <Dropdown isOpen={isOpen} toggle={toggle}/>
        <Hero slides={sliderData}/>
        <InfoSection infoData={infoData}/>
        {/* <Testimonial testimonial={testimonialData}/> */}
        <SimpleTestimonial  testimonial={testimonialData}/> 
        <Contact/>
    </>
  );
}

export default App;
