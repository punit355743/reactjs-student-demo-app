import React, { useContext } from 'react';
import "./StudentForm.css"
import useForm from './../../validator/useForm';
import { schoolContext } from './../../store/Provider';
import validatorForErrorsInfo from './../../validator/validatorForErrorsInfo';

function StudentForm(props) {

    const { addStudent } = useContext(schoolContext);
    const addStudentInSchool = () => {
        addStudent({ name: values.name, studentClassName: values.studentClassName, age: values.age, gender: values.gender });
    }


    const { values, onChangeHandler, errors, onSubmitHandler } = useForm({
        name: "",
        studentClassName: "",
        age: "",
        gender: ""
    }, validatorForErrorsInfo, addStudentInSchool)

    return (
        <form className={"form-container"}>
            <h1>
                Student Form
       </h1>
            <div>Name:<input type="text" name="name" value={values.name} onChange={onChangeHandler} placeholder="name" className={"form-item"} />
                {errors.name && <p className="form-input-error"> {errors.name}</p>}
            </div>
            <div>Class: <select className="form-control" name="studentClassName" value={values.studentClassName} onChange={onChangeHandler} className={"form-item"}>
                <option value="select">Select</option>
                <option value="First">First</option>
                <option value="Second">Second</option>
                <option value="Third">Third</option>
            </select>
                {errors.studentClassName && <p className="form-input-error"> {errors.studentClassName}</p>}
            </div>
            <div>Age:<input type="text" placeholder="Age" name="age" value={values.age} onChange={onChangeHandler} className={"form-item"} />
                {errors.age && <p className="form-input-error"> {errors.age}</p>}
            </div>
            <div className="radio-buttons">
                Male
                <input
                    value="Male"
                    name="gender"
                    type="radio"
                    onChange={onChangeHandler} className={"form-item"}
                />
                Female
                <input
                    value="Female"
                    name="gender"
                    type="radio"
                    onChange={onChangeHandler} className={"form-item"}
                />
                {errors.gender && <p className="form-input-error"> {errors.gender}</p>}
            </div>
            <button onClick={(e) => onSubmitHandler(e)} className={"submit-btn"}>Submit</button>
        </form >

    );
}

export default StudentForm;