import React from 'react'
import OurProducts from '../components/OurProducts'
import { productData } from '../data/productData'

function Products() {
    return (
        <>
            <OurProducts productData={productData}/>
        </>
    )
}

export default Products
