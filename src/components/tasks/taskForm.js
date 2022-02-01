import React from "react";
import { Formik, Field, Form } from 'formik';
import { useSelector, useDispatch, connect } from "react-redux";
import * as actions from "../../actionCreater";
import * as Yup from 'yup';
import "./taskForm.scss";

//this component handles the form to add and will eventually edit tasks
const TasksForm = ({modal, toggle, addTask, user}) => {
    const userInfo = user;
    return (
        <Formik
            initialValues={{
                description: "",
                category: "",
                completed: false,
                userId: userInfo.id
            }}
            // for validation
            validationSchema={Yup.object().shape({
                description: Yup.string().required("Required"),
                category: Yup.string().required("Required"),
            })}
            enableReinitialize
            onSubmit={(values) => {
                addTask(values)
                toggle()      
            }}>
            {({ values, errors, touched, handleChange, handleSubmit }) => {
                return (
                <Form onSubmit={handleSubmit} className="formContainer">
                    <div className="formField">
                        <label>Description </label>
                        <Field
                            type="text"
                            name="description"
                            onChange={handleChange}
                        />
                        {/* display errors if there are any and if that input has been touched */}
                        {errors.description && touched.description ? <div className="error">{errors.description}</div> : null}
                    </div>
                    <div className="formField">
                        <label>Category</label>
                        <Field type="text" name="category" value={values.category} onChange={handleChange}/>
                        {/* display errors if there are any and if that input has been touched */}
                        {errors.category && touched.category ? <div className="error">{errors.category}</div> : null}
                    </div>
                    <button className="submitButton" type="submit">submit</button>
                    <button className="cancelButton" onClick={() => toggle()}>cancel</button>
                </Form>
            )}}
        </Formik>
    )

}

//make user part of the props for this component
const mapStateToProps = state => {
    return {
        user: state.user
    }
} 
//make addTask part of the props for this component
const mapDispatchToProps = dispatch => {
    return {
        addTask: () => dispatch(actions.addTask())
    }
}
// connect to redux store
export default connect(mapStateToProps, mapDispatchToProps)(TasksForm);
