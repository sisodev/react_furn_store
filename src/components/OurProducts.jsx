import React from 'react'
import styled from 'styled-components'

const ProductsWrapper = styled.div`
    padding-top: 80px;
    background: grey;
    width: 100%;
    height: 100vh ;

`;

const ProductsContainer = styled.div`

`

const ProductsRow = styled.div`

`

const ProductsCol = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 20px;
    grid-row-gap: 20px;

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        grid-column-gap: 10px;
        grid-row-gap: 10px;
    }

`

const Products = styled.div`
    background: #fff;
    border-radius: 10px;
    padding: 1em;
    box-shadow: 0px 10px 5px #b2bec3;
    text-align: center;

    .title {
        font-size: 18px;
        font-weight: bold;
    }

    .image img {
        max-width: 100%;
        border-radius: 5px;
    } 

    .text {
        text-align: left;
        margin-left: 2em;
        margin-bottom: 0.5em;
    }
`

function OurProducts({productData}) {
     const loadProducts =  productData.map(({name, image}, index) =>(
        <Products key={index}>
                         <div className="title">{name}</div>
                         <div className="image">
                             <img src={image} alt={`${index}-img`}/>
                         </div>
                         <div className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
        </Products>

     ))

    return (
        <ProductsWrapper>
            <ProductsContainer>
                    <h1>Our Products</h1>
                <ProductsRow>
                    <ProductsCol>
                      {loadProducts}
                    </ProductsCol>
                </ProductsRow>
            </ProductsContainer>
        </ProductsWrapper>
    )
}

export default OurProducts
