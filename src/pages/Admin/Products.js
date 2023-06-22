import React from 'react'
import Layout from '../../components/Layout/Layout'
import AdminMenu from '../../components/Layout/AdminMenu'

function Products() {
    return (
        <Layout>
            <div className="row">
                <div className="col-md-3">
                    <AdminMenu />
                </div>
                <div className="col-md-9">
                    <h1 className='text-center'>All Products List</h1>
                </div>
            </div>
        </Layout>
    )
}

export default Products;