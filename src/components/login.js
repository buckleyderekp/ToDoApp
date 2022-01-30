import React, { useState, useEffect, useContext } from "react";
import { useHistory, Link, NavLink, useNavigate } from "react-router-dom";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { UserContext } from "./userProvider";

export default function Login() {
    const {handleLogin } = useContext(UserContext);
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: Yup.object({
            email: Yup.string().email('Invalid email address').required("Required"),
            password: Yup.string().required("Required")
        }),
        onSubmit: values => {
            console.log(values)
            handleLogin(values)
        },
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <fieldset>
                <label for="email">Email</label>
                <input id="email" type="text" onChange={formik.handleChange} value={formik.values.email} />
                {formik.touched.email && formik.errors.email ? (
                    <div>{formik.errors.email}</div>
                ) : null}
                <label for="password">Password</label>
                <input id="password" type="password" onChange={formik.handleChange} value={formik.values.password} />
                {formik.touched.password && formik.errors.password ? (
                    <div>{formik.errors.firstName}</div>
                ) : null}
                <button>Login</button>
                <em>
                    Not registered? <NavLink to="/register">Register</NavLink>
                </em>
            </fieldset>
        </form>
    );
}