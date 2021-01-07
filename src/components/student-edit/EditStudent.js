import React, { useContext,useEffect } from "react";
import "./../student-form/StudentForm.css";
import useForm from "./../../validator/useForm";
import { schoolContext } from "./../../store/Provider";
import validatorForErrorsInfo from "./../../validator/validatorForErrorsInfo";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function EditStudent(props) {
    const { editStudent } = useContext(schoolContext);
    const { student} = useContext(schoolContext);
    const { id } = props.match.params;
    console.log(student);
    console.log(id);
    let editStudentData = [];
    useEffect(() => {
        console.log("start");
        editStudentData = student.filter((studl) =>{
            if (studl.id === id) { // IDs should be Equal
                return studl;
            }
        })
    })

    console.log(editStudentData);

    const editStudentInSchool = () => {
        editStudent({
            name: values.name,
            studentClassName: values.studentClassName,
            age: values.age,
            gender: values.gender
        });
    };

    const { values, onChangeHandler, errors, onSubmitHandler } = useForm(
        {
            name: editStudentData[0]?editStudentData[0].name:'',
            studentClassName: editStudentData[0]?editStudentData[0].className:'',
            age: editStudentData[0]?editStudentData[0].age:'',
            gender: editStudentData[0]?editStudentData[0].gender:''
        },
        validatorForErrorsInfo,
        editStudentInSchool
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
                    className={`form-item ${errors.name ? 'form-input-element-error' : ''}`}
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
                    className={`form-item ${errors.studentClassName ? 'form-input-element-error' : ''}`}
                >
                    <option value="select">Select</option>
                    <option value="1st">First</option>
                    <option value="2nd">Second</option>
                    <option value="3rd">Third</option>
                    <option value="4th">Fourth</option>
                    <option value="5th">Fifth</option>
                    <option value="6th">Sixth</option>
                    <option value="7th">Seventh</option>
                    <option value="8th">Eighth</option>
                    <option value="9th">Ninth</option>
                    <option value="10th">Tenth</option>
                    <option value="11th">Eleven</option>
                    <option value="12th">Twelve</option>
                    <option value="13th">Thirteen</option>
                    <option value="14th">Fourteen</option>
                    <option value="15th">Fifteen</option>
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
                    className={`form-item ${errors.age ? 'form-input-element-error' : ''}`}
                />
                {errors.age && <p className="form-input-error"> {errors.age}</p>}
            </div>
            <div className="radio-buttons" className={`${errors.gender ? 'form-input-element-error' : ''}`}>
                <Form.Check
                    value="male"
                    name="gender"
                    type="radio"
                    checked = {editStudentData[0] && (editStudentData[0].gender === 'Male')}
                    label="Male"
                    onChange={onChangeHandler}
                    className="form-item radio-input"
                    inline
                />
                <Form.Check
                    value="female"
                    name="gender"
                    type="radio"
                    checked = {editStudentData[0] && (editStudentData[0].gender === 'Female')}
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

export default EditStudent;
