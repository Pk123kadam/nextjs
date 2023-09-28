"use client"

import React from 'react'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup';
import { addTask } from '@/services/taskService';
import { toast } from 'react-toastify';

function page() {
    const SignupSchema = Yup.object().shape({
        title: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Required'),
        content: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Required'),
        status: Yup.string().required('Required'),
    });
    return (
        <div className='container' style={{ marginTop: "200px" }}>
            <div className='row  justify-content-center'>
                <div className='col-3'>
                    <h3>Tasks</h3>
                    <Formik
                        initialValues={{
                            title: '',
                            content: '',
                            userId: '650bd78615c2dcc02f1bcb77',
                        }}
                        validationSchema={SignupSchema}
                        onSubmit={(values, { resetForm }) => {
                            try {
                                let call = async () => {
                                    console.log(values);
                                    let data = await addTask(values)
                                    console.log('data', data)
                                }
                                call()
                                resetForm()

                            } catch (err) {

                            }
                        }}
                    >
                        {({ errors, touched, handleBlur, handleChange }) => (
                            <Form className='d-flex flex-column'>
                                <div>
                                    <Field name="title" className="border border-dark w-100" />
                                </div>
                                <div style={{ height: "30px", color: "red" }}>  {errors.title && touched.title ? (
                                    <div>{errors.title}</div>
                                ) : null}</div>

                                <div>
                                    <Field name="content" className="border border-dark  w-100" />    </div>
                                <div style={{ height: "30px", color: "red" }}>{errors.content && touched.content ? (
                                    <div>{errors.content}</div>
                                ) : null}</div>

                                <div>
                                    {/* <Field name="status" className="border border-dark w-100" /> */}
                                    <select name="status" className="border border-dark w-100" onChange={handleChange} onBlur={handleBlur}>
                                        <option>--select--</option>
                                        <option value="pending">Pending</option>
                                        <option value="completed">Completed</option>
                                        <option value="just added">Just Added</option>
                                    </select> </div>
                                <div style={{ height: "30px", color: "red" }}>  {errors.status && touched.status ? <div>{errors.status}</div> : null}
                                </div>


                                <div className='text-center'> <button type="submit" className='btn btn-primary'>Submit</button></div>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    )
}

export default page