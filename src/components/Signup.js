import React from 'react';
import { Formik, Form } from 'formik';
import { TextField } from './TextField';
import * as Yup from 'yup';

export const Signup = () => {
   const validate = Yup.object({  
    email: Yup.string()
      .email('Email is invalid')
      .required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 charaters')
      .required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Password must match')
      .required('Confirm password is required'),
      fullName: Yup.string()
    .min(3, 'Must be 15 characters or less')
    .max(15, 'Must be 15 characters or less')
    .required('Required'),
    phone: Yup.number()
    .min(10, 'Phone number must be at least 10 charaters')
    .required('Phone number is required'),
    })
  
  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
        confirmPassword: '',
        fullName: '',
        phone:''
      }}
      validationSchema={validate}
      onSubmit={values => {
        console.log(values)
      }}
    >
      {formik => (
        <div>
          <h2 className="my-4 font-weight-bold .display-4">Create an account</h2>
          <Form>
            <TextField label="Your Email address" name="email" type="email" />
            <TextField label="Your Password" name="password" type="password" />
            <TextField label="Your Confirm Password" name="confirmPassword" type="password" />
            <TextField label="Your Full Name" name="fullName" type="text" />
            <TextField label="Your Phone Number" name="phone" type="phone" />
            <div className="topping">
            <input type="checkbox" id="topping" name="topping" value="Paneer" /> I read and agree Terms and Conditions.
            </div>
            <button className="btn btn-dark mt-3" type="submit">Create account</button>
          </Form>
        </div>
      )}
    </Formik>
  )
}
