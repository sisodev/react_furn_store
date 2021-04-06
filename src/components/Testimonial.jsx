import React, {useEffect, useState, useRef} from 'react'
import styled from 'styled-components'

const TestimonialWrapper = styled.div`
    background-image: linear-gradient(to right, rgba(255,0,0,0), rgba(255,0,0,1));
    height: 100vh;
    width: 100%;
    position: relative;

    h1 {
        text-align: center;
        padding-top: 80px;
        font-size: 30px;
        color: #fff;
    }
`

const TestimonialContainer = styled.div`
    width: 800px;
    height: 300px;
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);

    .testimonial {

    }
`

const Indicator = styled.div`
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: -100px;
`


const SlideRow = styled.div`
    display: flex;
    width: 3200px;
`

const SlideCol = styled.div`
    width: 800px;
    height: 400px;
    position: relative;
`

const TextContent = styled.div`
    background: #2d3a59;
    width: 520px;
    height: 170px;
    position: absolute;
    left: 0;
    top: 50%;
    transform: translate(-25%, -45%);
    border-radius: 10px;
    color: #d3d4d6;
    padding: 35px;
    box-sizing: border-box;
    z-index: 2;

    p {
        font-size: 18px;
        line-height: 24px;

    }

    h3 {
        margin: 35px 0 5px;
        color: #fff;
    }

    @media screen and (max-width: 768px) {
        width: 350px;
        height: 200px;
        transform: translate(65%, -45%);
    }
`

const ImgContent = styled.div`
   position: absolute;
   top: 20%;
   right: 180px;
   height: 50%;

   img {
       height: 120%;
       border-radius: 10px;
   }

   @media screen and (max-width: 768px) {

    top: 10%;
    right: 350px;
    height: 50%;
    z-index: 2;

    img {
       height: 50%;
       border-radius: 10px;
   }

   }
`

const Span = styled.span(props => ({
    "display": "inline-block",
    "height": "15px",
    "margin": "4px",
    "border-radius": "15px",
    "background": props.background ,
    "cursor": "pointer",
    "width": props.active
}))
       


function Testimonial({testimonial}) {

    const [current, setCurrent] = useState(0);
     const length = testimonial.length;
     const timeout = useRef(null);

     useEffect(() => {
            const nextSlide = () => {
                setCurrent(current => (current === length -1 ? 0 : current+1))
            }

            timeout.current = setTimeout(nextSlide, 2000);

            return function(){
                if(timeout.current){
                    clearTimeout(timeout.current)
                }
            }
    },[current, length])

    
     if(!Array.isArray(testimonial) || testimonial.length <= 0) {
         return null;
     }


    const loadTestimonial = testimonial.map(({name, title, comment, image}, index) => (
        index === current && <SlideCol key={index}>
                    <TextContent>
                        <p>{comment}</p>
                        <h3>{name}</h3>
                    </TextContent>
                    <ImgContent>
                        <img src={image} alt="comments"/>
                    </ImgContent>
                </SlideCol>
    ));

    return (
        <TestimonialWrapper>
        <h1>Testimonials</h1>
            <TestimonialContainer>
                <Indicator>
                {
                  testimonial.map((_, index) => {
                   return (<Span key={index} background={`${index===current?  "#0D6CDA": "#656869"}`}  
                   active={`${index===current?  "45px": "15px"}` }></Span>)
                  })  
                }
                </Indicator>
                <div className="testimonials">
                    <SlideRow>
                        {loadTestimonial}
                    </SlideRow>
                </div>
            </TestimonialContainer> 
        </TestimonialWrapper>
    )
}

export default Testimonial
