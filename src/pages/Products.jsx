import React from 'react'
import ProductHeader from '../components/ProductHeader'
import ProductList from '../components/ProductList'
import { productData } from '../data/productData'





function Products() {
    return (
        <>
            <ProductHeader/>
            <ProductList productData={productData}/>
        </>
    )
}

export default Products
