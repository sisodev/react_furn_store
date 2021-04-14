import React from 'react'
import styled from 'styled-components'


const ProductListWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
    padding-top: 50px;

    h1 {
        position: absolute;
        transform: translate(1%,-1900%);
        font-size: 18px;
        font-weight: 400;
        text-align: center;
        color: #fff;
        transition: all 0.5s ease-in;
    }

    @media screen and (max-width: 650px) {
        h1 {
        transform: translate(1%,-5200%);
        }

    }
`

const ProductListSection = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    transform-style: preserve-3d;
    width: 1100px;

    
`

const ProductCard = styled.div`
    position: relative;
    width: 320px;
    height: 320px;
    margin: 20px;
    transform-style: preserve-3d;
    perspective: 1000px;
`

const ProductBox = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 80%;
    transform-style: preserve-3d;
    transition: 1s ease;

    ${ProductCard}:hover & {
        transform: rotateY(180deg);
    }
`

const ProductImgBx = styled.div`
    
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;


    img {
        object-fit: cover;

    }
`

const ProductContentBox = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #644f4f;
    backface-visibility: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    transform-style: preserve-3d;
    transform: rotateY(180deg);

    div {
        transform-style: preserve-3d;
        padding: 20px;
        background: linear-gradient(45deg, #fe0061, #ffeb3b);
        transform: translateZ(100px);

        
            h2 {
                color: #fff;
                font-size: 20px;
                letter-spacing: 1px;

            }

            p {
                color: #fff;
                font-size: 16px;
                letter-spacing: 1px;
            }

    }


`


function ProductList({productData}) {

    

    const loadProduct = productData.map(({name, image, description}, index)=>(
        
        <ProductCard key={index} >
                    <ProductBox >
                        <ProductImgBx>
                            <img src={image} alt="totally"/>
                        </ProductImgBx>
                        <ProductContentBox>
                            <div>
                                <h2>{name}</h2>
                                <p>{description}</p>
                            </div>
                        </ProductContentBox>
                    </ProductBox>
                </ProductCard>
    ))

    return (
        <ProductListWrapper>
            <h1>Our Products</h1>
            <ProductListSection>
                    {loadProduct}
            </ProductListSection>
        </ProductListWrapper>
    )
}

export default ProductList
