import React, { useContext } from "react";
import "./StudentForm.css";
import useForm from "./../../validator/useForm";
import { schoolContext } from "./../../store/Provider";
import validatorForErrorsInfo from "./../../validator/validatorForErrorsInfo";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function StudentForm(props) {
    const { addStudent } = useContext(schoolContext);
    const addStudentInSchool = () => {
        addStudent({
            name: values.name,
            studentClassName: values.studentClassName,
            age: values.age,
            gender: values.gender
        });
    };

    const { values, onChangeHandler, errors, onSubmitHandler } = useForm(
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
                    className={"form-item"}
                />
                {errors.name && <p className="form-input-error"> {errors.name}</p>}
            </div>
            <div>
                Class:{" "}
                <select
                    className="form-control"
                    name="studentClassName"
                    value={values.studentClassName}
                    onChange={onChangeHandler}
                    className={"form-item"}
                >
                    <option value="select">Select</option>
                    <option value="First">First</option>
                    <option value="Second">Second</option>
                    <option value="Third">Third</option>
                </select>
                {errors.studentClassName && (
                    <p className="form-input-error"> {errors.studentClassName}</p>
                )}
            </div>
            <div>
                Age:
        <input
                    type="text"
                    placeholder="Age"
                    name="age"
                    value={values.age}
                    onChange={onChangeHandler}
                    className={"form-item"}
                />
                {errors.age && <p className="form-input-error"> {errors.age}</p>}
            </div>
            <div className="radio-buttons">
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
