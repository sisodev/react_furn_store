import React, {useState, useEffect, useRef} from 'react'
import styled, {keyframes} from 'styled-components';
import bg from '../images/testimonialbg.jpg'
//import some from '../images/interior-1.jpg'


const TestimonialWrapper = styled.div`
    background:  url(${bg}) #5a280b52  no-repeat;
    background-attachment: fixed;
    height: 70vh;
    width: 100%;
    position: relative;
    padding: 5px;
    padding-top: 10px;

    @media (max-width: 991px) {
        height: 100vh;
    }

    @media (max-width: 600px){
        height: 100vh;   
    }
`

const slider = keyframes`
    0% { transform: translateX(0px); }
	20% { transform: translateX(0px); }
	25% { transform: translateX(800px); }
	45% { transform: translateX(800px); }
	50% { transform: translateX(1600px); }
	70% { transform: translateX(1600px); }
	75% { transform: translateX(2400px); }
	95% { transform: translateX(3600px); }
	100% { transform: translateX(0px);  }
`


const TestimonialContent = styled.div`
    background: #5a280b52;
    border: 1px #ccc solid; 
    padding: 100px;
    width: 50%;
    height: 100%;

    h2 {
       display: inline-block;
       font-size: 1em;
       font-weight: 200;
       text-rendering: optimizeSpeed;
       text-align: center;
       color: #fff;
    }
   

    h3 {
        text-align: left;
        text-overflow: ellipsis;
        padding: 20px;
        letter-spacing: 2px;
        color: #fff;
        transition: text-shadow 0.3s;
        word-wrap: normal;
        &::first-letter{
            color: #d8a689;
            font-size: xx-large;
        }
        &:hover {
            text-shadow: 2px 2px 4px #000000;
        }
    }

    @media (max-width: 600px){
        width: 100%;
        height: 50%;
        padding: 5px;

        h2 {
            text-align: center;
            margin-left: 0px !important;
            transform: translate(42px, 0px);
            left: 0px;
            padding: 5px;
            margin-left: 100px;
        }

        h3 {
            text-align: center;
            padding: 3px;
            margin-right: 22px;
        }
    }
     
`;

const TestimonialImage = styled.div`
     background: #b9b99c;
     border: 1px #ccc solid;
     width: 120%;
     height: 400px;
     padding: 50px;

    p {
        text-align: justify;
        text-justify: inter-word;
        text-overflow: ellipsis;
        font-size: clamp(0.1rem, 8vw, 1rem);
        padding: 10px;
        letter-spacing: 0.2px;
        color: #fff;
        position: relative;
    }

    @media (max-width: 600px){
        width: 100%;
        height: 50%;
        padding: 5px;
    }

   
`;

const SlideRow = styled.div`
    display: flex;
    width: 100%;
    padding-top: 20px;
    justify-content: center;
    @media screen and (max-width: 992px) {
        display: flex;
        flex-direction: column;
    }
`

const SlideCol = styled.div`
    width: 1000px;
    height: auto;
    display: flex;
    align-items: center;
    /* animation-name: ${slider};
	animation-duration: 5s;
	animation-timing-function: ease-in-out;
	animation-iteration-count:infinite; */

    @media (max-width: 1200px) {
        top: 0;
        height: 550px;
        position: relative;
        box-shadow: none;
    }

    @media (max-width: 991px){
        width: 100%;
        height: auto;
        flex-direction: row;
    }

    @media (max-width: 600px){
        padding: 25px;
        flex-direction: column;
        align-items: flex-start;
    }
`


function SimpleTestimonial({testimonial}) {

    const [current, setCurrent] = useState(0);
    const length = testimonial.length;
    const timeout = useRef(null);

    useEffect(() => {
           const nextSlide = () => {
               setCurrent(current => (current === length -1 ? 0 : current+1))
           }

           timeout.current = setTimeout(nextSlide, 3000);

           return function(){
               if(timeout.current){
                   clearTimeout(timeout.current)
               }
           }
   },[current, length])

   
    if(!Array.isArray(testimonial) || testimonial.length <= 0) {
        return null;
    }

     const loadTestimonial =  testimonial.map(({name,comment}, index) => (
        index === current && <SlideCol key={index}>
            <TestimonialContent>
                    <h2>Our Happy Customers</h2>
                    <h3>{name}</h3>
                </TestimonialContent>
                 <TestimonialImage>
                     <p>{comment}</p>
                 </TestimonialImage>
        </SlideCol>
     ))

    return (
        <TestimonialWrapper>
                <SlideRow>
                    {loadTestimonial}
                </SlideRow>
        </TestimonialWrapper>
    )
}

export default SimpleTestimonial
