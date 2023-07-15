import React from 'react';
import Layout from '../components/Layout/Layout';

function About() {
    return (
        <Layout title={"About us - Ecommerce App"}>
            <div className="row contactus">
                <div className="col-md-6">
                    <img
                        src="/images/about.jpeg"
                        alt="conatctus"
                        style={{ width: "100%" }} />
                </div>
                <div className="col md-4">
                    <p className="text-justify mt-2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam quia et a. Unde, nulla aspernatur! Fugit, excepturi! Quia, assumenda odio! Laboriosam illum inventore autem vitae voluptate perspiciatis dignissimos? Ratione, illum?
                    </p>
                </div>
            </div>
        </Layout>
    );
};

export default About;