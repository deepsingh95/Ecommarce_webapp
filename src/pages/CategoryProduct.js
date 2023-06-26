import React, { useState } from 'react'
import Layout from '../components/Layout/Layout'

function CategoryProduct() {
    const [products, setProducts] = useState([]);

    return (
        <Layout>
            <div className='container'>
                <h1>
                    category product
                </h1>
            </div>
        </Layout>
    )
};

export default CategoryProduct;