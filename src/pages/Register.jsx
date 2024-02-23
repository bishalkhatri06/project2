import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const Register = () => {
  return (
    <Formik
    initialValues={{
        firstname:'',
        lastname:'',
        email:'',
        password:'',
        cpassword:''
    }}
    validationSchema={Yup.object({
        firstname:Yup.string()
        .required('First name is mandatory')
        .max(20,'20 character or less'),
        lastname:Yup.string()
        .required('Last name is mandatory')
        .max(20,'20 character or less'),
        email:Yup.string()
        .required('Email is mandatory')
        .email('Invalid Email format'),
        password: Yup.string()
        .required('Password is required')
        .matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@!?_.&])[A-Za-z\d@!?_.&]{8,50}$/,'password contain at least one character, one number, one special character and password greater than 8 and less than 50 characters'),
        cpassword:Yup.string()
        .required('Confirm Password is mandatory')
        .oneOf([Yup.ref('password'),null],'confirm password and password doesnot match')
    }
    )}
    >
        <div className="container my-3">
            <div className="shadow p-4">
                <Form>
                    <div className="mb-2">
                        <label htmlFor="firstname">First Name</label>
                        <Field type='text' name='firstname' id='firstname' className='form-control' />
                        <ErrorMessage name='firstname'>
                            {msg=> <div style={{color:'red'}}>{msg}</div>}
                        </ErrorMessage>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="lastname">Last Name</label>
                        <Field type='text' name='lastname' id='lastname' className='form-control' />
                        <ErrorMessage name='lastname'>
                            {msg=> <div style={{color:'red'}}>{msg}</div>}
                        </ErrorMessage>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="email">Email</label>
                        <Field type='email' name='email' id='email' className='form-control' />
                        <ErrorMessage name='email'>
                            {msg=> <div style={{color:'red'}}>{msg}</div>}
                        </ErrorMessage>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="password">Password</label>
                        <Field type='password' name='password' id='password' className='form-control' />
                        <ErrorMessage name='password'>
                            {msg=> <div style={{color:'red'}}>{msg}</div>}
                        </ErrorMessage>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="cpassword">Confirm Password</label>
                        <Field type='password' name='cpassword' id='cpassword' className='form-control' />
                        <ErrorMessage name='cpassword'>
                            {msg=> <div style={{color:'red'}}>{msg}</div>}
                        </ErrorMessage>
                    </div>

                    <div className="mb-2">
                        <button className="btn btn-primary">Register</button>
                    </div>
                </Form>
            </div>
        </div>
    </Formik>
  )
}

export default Register