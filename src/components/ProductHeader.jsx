import React, {useEffect} from 'react'
import Aos from 'aos';
import "aos/dist/aos.css";
import styled from 'styled-components'
import header from '../images/header.jpg'


const ProductSection = styled.section`
    height: 80vh;
    max-height: 700px;
    position: relative;
    overflow: hidden;
    background: transparent;
    padding:0;
`;

const ProductWrapper = styled.div`
    width: 100%;
    height: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    position: relative;
`;

// const ProductHeader = styled.img`
//      position: absolute;
//      top: 0;
//      left: 0;
//      width: 100vw;
//      height: 50vh;
//      object-fit: cover;
// `


const ProductSlide = styled.div`
    z-index: 1;
    width: 100%;
    height: 100%;
`;

const ProductSlider = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 80%;
    display: flex;
    align-items: center;
    justify-content: center;

    &::before{
        content: '';
        position: absolute;
        z-index: 2;
        width: 100%;
        height: 100vh;
        bottom: 0vh;
        left: 0;
        overflow: hidden;
        opacity: 0.4;
        background:transparent;
    }
`;


const ProductImage = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    object-fit: cover;
`;

const ProductContent = styled.div`
    position: relative;
    z-index: 10;
    display: flex;
    flex-direction: column;
    max-width: 1600px;
    width: calc(100% - 100px);
    color: #fff;

    h1{
        font-size: clamp(1rem, 8vw, 2rem);
        font-weight: 400;
        text-transform: uppercase;
        text-shadow: 0px 0px 20px rgba(0,0,0,0.4);
        text-align: left;
        margin-bottom: 0.8rem;
    }

    p{
        margin-bottom: 1.2rem;
        text-shadow: 0px 0px 20px rgba(0,0,0,0.4);
    }
`;




function ProductHeader() {

    useEffect(() => {
        Aos.init({duration: 1000})
    }, [])

    return (
        <>
        <ProductSection>
        <ProductWrapper>
        <ProductSlide data-aos="fade-right">
                    <ProductSlider>
                        <ProductImage src={header} alt={"header"}/>
                        <ProductContent>
                            <h1>Welcome to Furnstore</h1>
                            <p>Making dreams to reality</p>
                        </ProductContent>
                    </ProductSlider>
                </ProductSlide>
            </ProductWrapper>
        </ProductSection>
        </>
    )
}

export default ProductHeader
