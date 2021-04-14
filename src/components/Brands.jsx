import React from 'react'
import styled from 'styled-components'
import bg from '../images/testimonialbg.jpg'
// import Slider from "react-slick";



const BrandsWrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: grid;
    place-items: center;
    background: url(${bg}) #5a280b52  no-repeat;
    background-position: center;
`



const BrandContainer = styled.div`
    width:  90%;
    height: auto;
    text-align: center;

    h1 {
        font-size: 60px;
        color: #555;
    }

    hr {
        width: 15%;
        height: 5px;
        border: none;
        background: #26ccca;
        margin: auto;
        margin-top: 30px;
        margin-bottom: 30px;

    }

    @media screen and (max-width: 768px) {

        h1 {
            font-size: 50px;
        }

    }

`

const BrandWell = styled.div`
    width: 100%;
    height: auto;
`

const BrandsRow = styled.ul`
    padding: 0px;
    margin: 0px;
`

const Brand = styled.li`
    list-style: none;
    display: inline-block;
    width: 150px;
    height: 150px;
    margin: 10px;
    box-shadow: 0px 0px 0px -7px #555;
    position: relative;
    overflow: hidden;
    cursor: pointer;
    transition: .5s;

    

    img {
        width: 100%;
        height: 100%;
        border: 1px solid #89ac89;
    }

    @media screen and (max-width: 768px){
        width: 120px;
        height: 120px;
        margin: 5px;

        img {
            width: 75%;
            height: 75%;
        }

    }
`


const Overlay = styled.div`
    position: absolute;
    bottom: 100%;
    left: 0;
    right: 0;
    background: #5a280b52;
    overflow: hidden;
    width: 100%;
    height:0;
    transition: .5s ease;

    ${Brand}:hover & {
        bottom: 0;
        height: 100%;
    }

    @media screen and (max-width: 768px) {
        ${Brand}:hover & {
            bottom: 28px;
            height: 77%;
            width: 75%;
            left: 15px;
        }
    }
`

const OverlayText = styled.div`
    color: white;
    font-size: 20px;
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    text-align: center;
`

function Brands({brandData}) {

    const loadBrands = brandData.map(({image, alt}, index)=>(
        <Brand key={index}>
            <img src={image} alt={alt}/>
            <Overlay>
                <OverlayText>View Product</OverlayText>
            </Overlay>
        </Brand>
    ));


    return (
        <BrandsWrapper>
            <BrandContainer>
                <h1>Our Brands</h1>
                <hr/>
                <BrandWell>
                    <BrandsRow>
                        {loadBrands}
                    </BrandsRow>
                </BrandWell>
            </BrandContainer> 
        </BrandsWrapper>
    )
}

export default Brands
