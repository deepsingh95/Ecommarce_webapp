import React, { useEffect, useState } from 'react'
import Layout from '../../components/Layout/Layout'
import AdminMenu from '../../components/Layout/AdminMenu'
import { toast } from "react-toastify";
import axios from 'axios';
import CategoryForm from '../../components/Layout/Form/CategoryForm';

function CreateCategory() {
    const [categories, setCategories] = useState([]);
    const [name, setName] = useState("");

    //handle form
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post('/api/v1/category/create-category', {
                name
            });
            if (data?.success) {
                toast.success(`${name} is created`);
                getAllCategory();
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error('Something went wrong in input form');
        }
    };

    //get all category
    const getAllCategory = async () => {
        // try {
        await axios.get("/api/v1/category/get-category").then((res) => {
            // console.log(res.data)
            setCategories(res.data.category);
        }).catch((err) => {
            console.log(err.response)
        });
        // if (data.success) {
        //     setCategories(data.category);
        // }
        // } catch (error) {
        //     console.log(error)
        //     toast.error('Something went worng in getting category');
        // }
    };

    useEffect(() => {
        getAllCategory();
        // console.log(categories)
    }, [categories]);

    return (
        <Layout title={'Dashboard - Create Category'}>
            <div className="container-fluid m-3 p-3">

                <div className="row">
                    <div className="col-md-3">
                        <AdminMenu />
                    </div>
                    <div className="col-md-9">
                        <h1>Manage Category</h1>
                        <div className="p-3 w-50">
                            <CategoryForm
                                handleSubmit={handleSubmit}
                                value={name}
                                setValue={setName}
                            />
                        </div>
                        <div className='w-75'>
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th scope="col">Name</th>
                                        <th scope="col">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {categories?.map((c) => (
                                        <>
                                            <tr>
                                                <td key={c._id}>{c.name}</td>
                                                <td>
                                                    <button className='btn btn-primary'>Edit</button>
                                                </td>
                                            </tr>
                                        </>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default CreateCategory;