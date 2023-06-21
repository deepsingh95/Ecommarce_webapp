import React from 'react'
import Layout from '../components/Layout/Layout'
import { Link } from 'react-router-dom'

function Pagenotfount() {
    return (
        <Layout title={"go back - page not found"}>
            <h1 className='pnf-title'>404</h1>
            <h2 className='pnf-heading'>Oops ! Page Not Found</h2>
            <Link tp="/" className="pnf-btn">
                Go Back
            </Link>
        </Layout>
    )
}

export default Pagenotfount