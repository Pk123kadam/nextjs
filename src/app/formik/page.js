"use client"

import React from 'react'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup';

function page() {
    const SignupSchema = Yup.object().shape({
        firstName: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Required'),
        lastName: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Required'),
        email: Yup.string().email('Invalid email').required('Required'),
    });
    return (
        <div className='container'>
            <div className='row  justify-content-center'>
                <div className='col-3'>
                    <h3>Signup</h3>
                    <Formik
                        initialValues={{
                            firstName: '',
                            lastName: '',
                            email: '',
                        }}
                        validationSchema={SignupSchema}
                        onSubmit={values => {
                            console.log(values);
                        }}
                    >
                        {({ errors, touched }) => (
                            <Form className='d-flex flex-column'>
                                <div>
                                    <Field name="firstName" className="border border-dark w-100" />
                                </div>
                                <div style={{ height: "30px", color: "red" }}>  {errors.firstName && touched.firstName ? (
                                    <div>{errors.firstName}</div>
                                ) : null}</div>

                                <div>
                                    <Field name="lastName" className="border border-dark  w-100" />    </div>
                                <div style={{ height: "30px", color: "red" }}>{errors.lastName && touched.lastName ? (
                                    <div>{errors.lastName}</div>
                                ) : null}</div>

                                <div>
                                    <Field name="email" type="email" className="border border-dark w-100" />  </div>
                                <div style={{ height: "30px", color: "red" }}>  {errors.email && touched.email ? <div>{errors.email}</div> : null}
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