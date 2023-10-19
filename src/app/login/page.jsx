"use client"

import React, { useContext } from 'react'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup';
import { Current, Logged } from '@/services/loginServices';
import { useRouter } from 'next/navigation';
import UserContext from '@/context/userContext';
function Login() {
    const router = useRouter()
    const context = useContext(UserContext)
    const SignupSchema = Yup.object().shape({

        email: Yup.string().email('Invalid email').required('Required'),
        password: Yup.string().required('Required')
            .min(8, 'Should be 8 chars minimum.')
            .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
    });
    return (
        <div className='container' style={{ marginTop: "100px" }}>
            <div className='row  justify-content-center'>
                <div className='col-3'>
                    <h3>Login</h3>
                    <Formik
                        initialValues={{
                            email: '',
                            password: '',
                        }}
                        validationSchema={SignupSchema}
                        onSubmit={(values, { resetForm }) => {
                            try {
                                let call = async () => {
                                    console.log(values);
                                    let data = await Logged(values)
                                    console.log('data', data)
                                    if (data) {
                                        context.setUser(data.user)
                                        router.push("/profile/user")
                                    }
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
                                    <label>Email:</label>
                                    <Field name="email" className="border border-dark  w-100" />    </div>
                                <div style={{ height: "30px", color: "red" }}>{errors.email && touched.email ? (
                                    <div>{errors.email}</div>
                                ) : null}</div>
                                {/* <div>
                                    <label>Password:</label>
                                    <Field name="password" className="border border-dark  w-100" type="password" />
                                </div> */}
                                <div>
                                    <label>Password: </label>
                                    <Field name="password" className="border border-dark w-100" type="password" />
                                </div>
                                <div style={{ height: "30px", color: "red" }}>  {errors.password && touched.password ? <div>{errors.password}</div> : null}
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

export default Login