import React, { useState, useContext, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useFormik } from 'formik';
import { writeUserData } from "./userProvider";
import * as Yup from 'yup';
 
export default function Register() {

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
        },
        validationSchema: Yup.object({
            name: Yup.string().required("Required"),
            email: Yup.string().email('Invalid email address').required("Required"),
            password: Yup.string().required("Required"),
            confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
        }),
       //  onSubmit: values => writeUserData(values.name, values.email, values.password),
    });
    return (
        <form onSubmit={formik.handleSubmit}>
            <fieldset>
                     <label htmlFor="name">Name</label>
                     <input className="registerInput" id="name" type="text" onChange={formik.handleChange} />
                     
                {formik.touched.name && formik.errors.name ? (
                    <div>{formik.errors.name}</div>
                ) : null}
                     <label for="email">Email</label>
                     <input id="email" type="text" onChange={formik.handleChange} />
                     
                {formik.touched.email && formik.errors.email ? (
                    <div>{formik.errors.email}</div>
                ) : null}
                     <label for="password">Password</label>
                     <input id="password" type="password" onChange={formik.handleChange} />
                     
                {formik.touched.password && formik.errors.password ? (
                    <div>{formik.errors.password}</div>
                ) : null}
                     <label for="confirmPassword">Confirm Password</label>
                     <input id="confirmPassword" type="password" onChange={formik.handleChange} />
                     
                {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
                    <div>{formik.errors.confirmPassword}</div>
                ) : null}
                     <button type="submit">Register</button>
             </fieldset>
         </form> 
    );
};