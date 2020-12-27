import "./School.css";
import React, { useState, useEffect } from "react";
import { StudentList } from "./student-list/StudentList";
import StudentForm from "./student-form/StudentForm";
import UserTitle from "./user-title/UserTitle";
const axios = require('axios');


const School = () => {
    const [schoolName, setSchoolName] = useState("Podar");
    const [student, setStudent] = useState([
        { id: "101", name: "sachin", age: 28, className: "10th" },
        { id: "102", name: "Payal", age: 28, className: "12th" },
        { id: "103", name: "Punit", age: 35, className: "5th" },
        { id: "104", name: "raja", age: 35, className: "10th" },

    ])

    const [title, setTitle] = useState({
        "userId": 1,
        "id": 1,
        "title": "defaulyt title",
        "completed": true
    })

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/todos/1')
            .then(function (response) {
                // handle success
                setTitle(response.data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }, [])

    const addStudent = (studenInformation) => {
        const stu = student.concat({ id: studenInformation.id, name: studenInformation.name, age: studenInformation.age, className: studenInformation.studentClassName });
        setStudent(stu);
    }
    const removeStudent = (deleteId) => {
        const updatedstu = student.filter((studl)=>
        studl.id!==deleteId)
        setStudent(updatedstu)
    }

    return (
        <div className={"my-school"}>
            <h1>My School name is : {schoolName} </h1>
            <UserTitle title={title} />
            <StudentList studentList={student} removeStudent={removeStudent}/>
            <StudentForm addStudent={addStudent} />

        </div>
    );
};

export default School;