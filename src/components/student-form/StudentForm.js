import React, { useContext, useState } from "react";
import "./StudentForm.css";
import useForm from "./../../validator/useForm";
import { schoolContext } from "./../../store/Provider";
import validatorForErrorsInfo from "./../../validator/validatorForErrorsInfo";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function StudentForm(props) {
    const { addStudent } = useContext(schoolContext);
    const [isNameDirty, setIsNameDirty] = useState(false);
    const [isClassDirty, setIsClassDirty] = useState(false);
    const [isAgeDirty, setIsAgeDirty] = useState(false);
    const [isGenderDirty, setIsGenderDirty] = useState(false);
    const addStudentInSchool = () => {
        addStudent({
            name: values.name,
            studentClassName: values.studentClassName,
            age: values.age,
            gender: values.gender
        });
    };

    const { values, onChangeHandler, errors, onSubmitHandler, onBlurHandler } = useForm(
        {
            name: "",
            studentClassName: "",
            age: "",
            gender: ""
        },
        validatorForErrorsInfo,
        addStudentInSchool
    );

    return (
        <form className={"form-container"}>
            <div className="student-form-header">
                <h3>Student Form</h3>
            </div>
            <div>
                Name:
        <input
                    type="text"
                    name="name"
                    value={values.name}
                    onChange={onChangeHandler}
                    placeholder="name"
                    className={`form-item ${(errors.name && isNameDirty) ? 'form-input-element-error' : ''}`}
                    onBlur={(event) => { onBlurHandler(event); setIsNameDirty(true) }}
                />
                {(errors.name && isNameDirty) && <p className="form-input-error"> {errors.name}</p>}
            </div>
            <div>
                Class:{" "}
                <select
                    className="form-control"
                    name="studentClassName"
                    value={values.studentClassName}
                    onChange={onChangeHandler}
                    className={`form-item ${(errors.studentClassName && isClassDirty) ? 'form-input-element-error' : ''}`}
                    onBlur={(event) => { onBlurHandler(event); setIsClassDirty(true) }}
                >
                    <option value="select">Select</option>
                    <option value="First">First</option>
                    <option value="Second">Second</option>
                    <option value="Third">Third</option>
                </select>
                {(errors.studentClassName && isClassDirty) ? (
                    <p className="form-input-error"> {errors.studentClassName}</p>
                ) : null}
            </div>
            <div>
                Age:
        <input
                    type="text"
                    placeholder="Age"
                    name="age"
                    value={values.age}
                    onChange={onChangeHandler}
                    className={`form-item ${(errors.age && isAgeDirty) ? 'form-input-element-error' : ''}`}
                    onBlur={(event) => { onBlurHandler(event); setIsAgeDirty(true) }}
                />
                {(errors.age && isAgeDirty) ? <p className="form-input-error"> {errors.age}</p> : null}
            </div>
            <div className="radio-buttons" className={`${errors.gender ? 'form-input-element-error' : ''}`}>
                <Form.Check
                    value="male"
                    name="gender"
                    type="radio"
                    label="Male"
                    onChange={onChangeHandler}
                    className="form-item radio-input"
                    inline
                />
                <Form.Check
                    value="female"
                    name="gender"
                    type="radio"
                    label="Female"
                    onChange={onChangeHandler}
                    className="form-item radio-input"
                    inline
                />
                {errors.gender && <p className="form-input-error"> {errors.gender}</p>}
            </div>
            <Button
                variant="primary"
                size="lg"
                onClick={e => onSubmitHandler(e)}
                className={"submit-btn"}
            >
                Submit
      </Button>
        </form>
    );
}

export default StudentForm;
