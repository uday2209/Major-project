import { useFormik } from "formik";
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";
import * as Yup from 'yup';
import { useEffect, useState } from "react";

function UpdateItem(){
    const { id} = useParams();
    const [vehicle, setVehicle] = useState(null);

    const navigate = useNavigate();

    useEffect(()=>{
        axios.get('http://localhost:5000/pizzas/:id')
        .then(response => {
            setVehicle(response.data);
        })
        .catch(error => {
            console.error('There was an error fetching the vehicle data',error)
        })
    },[id])

    const formik = useFormik({
        initialValues: {
            image: vehicle?.image || '',
            name: vehicle?.name || '',
            price: vehicle?.price ||'',
            size: vehicle?.size||'',
            category: vehicle?.category ||'',
            description: vehicle?.description ||''
        },
        enableReinitialize:true,
        validationSchema: Yup.object({
            image: Yup.string().required('Image URL is required'),
            name: Yup.string()
                    .min(5,'Name must be at least 5 characters')
                    .required('Name is required'),
            price: Yup.number()
                    .min(1,'Price must be greater than 0'),
        
        }),
        onSubmit: (values , {setSubmitting, resetForm , setStatus})=>{
            axios.put('http://localhost:5000/pizzas')
                .then(response=> {
                    setStatus('success');
                    resetForm();
                    navigate('/display');
                })
                .catch(error=>{
                    setStatus('error');
                })
                .finally(()=>{
                    setSubmitting(false);
                });
        },
    });




    return (
        <div className="container mt-4">
            <h2>Update Pizza</h2>


            <form onSubmit={formik.handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="image" className="form-label">Image URL</label>
                    <input
                        id="image"
                        name="image"
                        type="text"
                        className="form-control"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.image}
                        />


                        {
                            formik.touched.image &&  formik.errors.image ? (
                                <div className="text-danger">{formik.errors.image}</div>
                            ): null
                        }
                </div>






                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        className="form-control"
                        onChange={formik.handleChange}
                        value={formik.values.name}
                        />


                        {
                            formik.touched.name &&  formik.errors.name ? (
                                <div className="text-danger">{formik.errors.name}</div>
                            ): null
                        }
                </div>






                <div className="mb-3">
                    <label htmlFor="price" className="form-label">Price</label>
                    <input
                        id="price"
                        name="price"
                        type="number"
                        className="form-control"
                        onChange={formik.handleChange}
                        value={formik.values.price}
                        />


                        {
                            formik.touched.price &&  formik.errors.price ? (
                                <div className="text-danger">{formik.errors.price}</div>
                            ): null
                        }
                </div>

                <div className="mb-3">
                    <label htmlFor="size" className="form-label">size</label>
                    <input
                        id="size"
                        name="size"
                        type="text"
                        className="form-control"
                        onChange={formik.handleChange}
                        value={formik.values.size}
                        />


                        {
                            formik.touched.size &&  formik.errors.size ? (
                                <div className="text-danger">{formik.errors.size}</div>
                            ): null
                        }
                </div>






                <div className="mb-3">
                    <label htmlFor="category" className="form-label">category</label>
                    <input
                        id="category"
                        name="category"
                        type="text"
                        className="form-control"
                        onChange={formik.handleChange}
                        value={formik.values.category}
                        />


                        {
                            formik.touched.category &&  formik.errors.category ? (
                                <div className="text-danger">{formik.errors.category}</div>
                            ): null
                        }
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <input
                        id="description"
                        name="description"
                        type="text"
                        className="form-control"
                        onChange={formik.handleChange}
                        value={formik.values.description}
                        />


                        {
                            formik.touched.description &&  formik.errors.descrption ? (
                                <div className="text-danger">{formik.errors.description}</div>
                            ): null
                        }
                </div>




                <button type="submit" className="btn btn-primary">
                    submit
                </button>
            </form>


        </div>
    )


}


export default UpdateItem;