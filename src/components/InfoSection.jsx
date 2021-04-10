import React, {useEffect} from 'react'
import Aos from 'aos';
import "aos/dist/aos.css";
import styled from 'styled-components'
import { Button } from './Button'
import bg from '../images/woodbg.jpg';

const Section = styled.section`
    width: 100%;
    height: 100%;
    padding: 4rem 0rem;
    overflow: hidden;
    background: url(${bg}) #5a280b52  no-repeat;
    background-attachment: fixed;
`
const Container = styled.div`
    padding: 3rem (calc(100vw - 1300px)/2);
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 800px;

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`
const ColumnLeft = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    line-height: 1.4;
    padding: 1rem 2rem;
    order: ${({reverse}) => (reverse?  '2': '1')}; 

    h1 {

        margin-bottom: 1rem;
        font-size: clamp(1.5rem, 6vw, 2rem);
    }

    p {
        margin-bottom: 2rem;
    }
`
const ColumnRight = styled.div`
    padding: 1rem 2rem;
    order: ${({reverse}) => (reverse?  '1': '2')}; 
    display: flex;
    justify-content: center;
    align-items: center;
   

    @media screen and (max-width: 768px) {
        order: ${({reverse}) => (reverse?  '2': '1')};
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;

        @media screen and (max-with: 768px) {
            width: 90%;
            height: 90%;
        }
    }
`


function InfoSection({infoData}) {

    useEffect(() => {
        Aos.init({duration: 2000})
    }, [])


    const data = infoData.map(({heading, paragraphOne, paragraphTwo, buttonLabel, image, reverse, delay}, index) => (
        <Section>
        <Container >
            <ColumnLeft data-aos="fade-up">
                <h1>{heading}</h1>
                <p>{paragraphOne}</p>
                <p>{paragraphTwo}</p>
                <Button to="/homes" primary={true}>{buttonLabel}</Button>
            </ColumnLeft>
            <ColumnRight  data-aos={`${index%2===0? "fade-left": "flip-right"}`} reverse={reverse}>
                <img src={image} alt="home" />
            </ColumnRight>
        </Container>
    </Section>
    ))
    return (
        <>
        {data}
        </>    
    )
}

export default InfoSection
