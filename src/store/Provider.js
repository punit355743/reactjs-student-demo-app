
import React, { useState } from 'react';


const schoolContext = React.createContext({});


function Provider(props) {
    const [schoolName, setSchoolName] = useState("Podar");
    const [student, setStudent] = useState([
        { id: "101", name: "sachin", age: 28, className: "10th", gender: "Male" },
        { id: "102", name: "Payal", age: 28, className: "12th", gender: "Female" },
        { id: "103", name: "Punit", age: 35, className: "5th", gender: "Male" },
        { id: "104", name: "raja", age: 35, className: "10th", gender: "Male" },

    ])

    const getIncrementId = () => {
        if (student && student.length) {
            const getId = parseInt(student[student.length - 1].id);
            return `${getId + 1}`;
        } else {

            return "100";
        }


    }


    const addStudent = (studenInformation) => {
        const stu = student.concat({ id: getIncrementId(), name: studenInformation.name, age: studenInformation.age, className: studenInformation.studentClassName, gender: studenInformation.gender });
        setStudent(stu);
    }
    const removeStudent = (deleteId) => {
        const updatedstu = student.filter((studl) =>
            studl.id !== deleteId)
        setStudent(updatedstu)
    }


    return (
        <schoolContext.Provider value={{ schoolName, student, addStudent, removeStudent }}>
            {props.children}
        </schoolContext.Provider>
    );
}

export { Provider, schoolContext }

