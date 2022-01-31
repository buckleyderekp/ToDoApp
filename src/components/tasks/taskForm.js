import React from "react";
import { Formik } from 'formik';
import * as Yup from 'yup';
import "./taskForm.scss";

//this component handles the form to add and will eventually edit tasks
const TasksForm = () => {
    return (
        <Formik
            initialValues={{
                description: "",
                category: "",
                completed: false,
            }}
            validationSchema={Yup.object().shape({
                description: Yup.string().required("Required"),
                category: Yup.string().required("Required"),
            })}
            onSubmit={(values) => console.log(values)}>
            {({ values, errors, touched, handleChange, handleSubmit }) => (
                <form onSubmit={handleSubmit} className="formContainer">
                    <div className="formField">
                        <label>Description </label>
                        <input
                            type="text"
                            name="description"
                            //value={values.description}
                            onChange={() => handleChange()}
                        />
                        {errors.description && touched.description ? <div className="error">{errors.description}</div> : null}
                    </div>
                    <div className="formField">
                        <label>Category</label>
                        <input type="text" name="category" value={values.category}></input>
                        {errors.category && touched.category ? <div className="error">{errors.category}</div> : null}
                    </div>
                    <button className="submitButton" type="submit">submit</button>
                    <button className="cancelButton">cancel</button>
                </form>
            )}
        </Formik>
    )

}

export default TasksForm;