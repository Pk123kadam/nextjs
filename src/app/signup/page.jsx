"use client"

import React from 'react'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup';
import { addUser } from '@/services/UserServices';

function SignUp() {
    const SignupSchema = Yup.object().shape({
        name: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Required'),
        email: Yup.string().email('Invalid email').required('Required'),
        password: Yup.string().required('password required.')
            .min(8, 'Should be 8 chars minimum.')
            .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
        about: Yup.string().min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Required')


    });
    return (
        <div className='container' style={{ marginTop: "100px" }}>
            <div className='row  justify-content-center'>
                <div className='col-3'>
                    <h3>Sign Up</h3>
                    <Formik
                        initialValues={{
                            name: '',
                            email: '',
                            password: '',
                            about: '',
                        }}
                        validationSchema={SignupSchema}
                        onSubmit={(values, { resetForm }) => {
                            try {
                                let call = async () => {
                                    console.log(values);
                                    let data = await addUser(values)
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
                                    <label>Username:</label>
                                    <Field name="name" className="border border-dark w-100" />
                                </div>
                                <div style={{ height: "30px", color: "red" }}>  {errors.name && touched.name ? (
                                    <div>{errors.name}</div>
                                ) : null}</div>

                                <div>
                                    <label>Email:</label>
                                    <Field name="email" className="border border-dark  w-100" />    </div>
                                <div style={{ height: "30px", color: "red" }}>{errors.email && touched.email ? (
                                    <div>{errors.email}</div>
                                ) : null}</div>

                                <div>
                                    <label>Password:</label>
                                    <Field name="password" className="border border-dark  w-100" type="password" />
                                </div>
                                <div style={{ height: "30px", color: "red" }}>  {errors.password && touched.password ? <div>{errors.password}</div> : null}
                                </div>
                                <div>
                                    <label>About:</label>
                                    <Field name="about" className="border border-dark  w-100" />
                                </div>
                                <div style={{ height: "30px", color: "red" }}>  {errors.about && touched.about ? <div>{errors.about}</div> : null}
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

export default SignUp