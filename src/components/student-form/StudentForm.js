import React, { useState } from 'react';
import "./StudentForm.css"
import useForm from './../../validator/useForm';

function StudentForm(props) {
    const { values, onChangeHandler } = useForm({
        name: "payal",
        studentClassName: "",
        age: "30",
        gender:""
    })
    const addStudent = (event) => {
        event.preventDefault();
        props.addStudent({ id: 106, name: values.name, studentClassName: values.studentClassName, age: values.age ,gender:values.gender})

    }

    return (
        <form className={"form-container"}>
            <h1>
                Student Form
       </h1>
            <div>Name:<input type="text" name="name" value={values.name} onChange={(e) => onChangeHandler(e)} placeholder="name" className={"form-item"} /></div>
            <div>Class: <select className="form-control" name="studentClassName" value={values.studentClassName} onChange={(e) => onChangeHandler(e)} className={"form-item"}>
                <option value="select">Select</option>
                <option value="First">First</option>
                <option value="Second">Second</option>
                <option value="Third">Third</option>
            </select></div>
            <div>Age:<input type="text" placeholder="Age" name="age" value={values.age} onChange={(e) => onChangeHandler(e)} className={"form-item"} /></div>
            <div className="radio-buttons">
                Male
                <input
                value="Male"
                name="gender"
                type="radio"
                onChange={(e) => onChangeHandler(e)} className={"form-item"}
                />
                Female
                <input
                value="Female"
                name="gender"
                type="radio"
                onChange={(e) => onChangeHandler(e)} className={"form-item"}
                />
            </div>
            <button onClick={addStudent} className={"submit-btn"}>Submit</button>
        </form>

    );
}

export default StudentForm;