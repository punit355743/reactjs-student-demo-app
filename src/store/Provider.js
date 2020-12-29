
import React, { useState } from 'react';


const schoolContext = React.createContext({});


function Provider(props) {
    const [schoolName, setSchoolName] = useState("Podar");
    const [student, setStudent] = useState([
        { id: "101", name: "sachin", age: 28, className: "10th" },
        { id: "102", name: "Payal", age: 28, className: "12th" },
        { id: "103", name: "Punit", age: 35, className: "5th" },
        { id: "104", name: "raja", age: 35, className: "10th" },

    ])
    const addStudent = (studenInformation) => {
        const stu = student.concat({ id: studenInformation.id, name: studenInformation.name, age: studenInformation.age, className: studenInformation.studentClassName });
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

