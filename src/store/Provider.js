import React, { useState } from "react";

const schoolContext = React.createContext({});

function Provider(props) {
    const [schoolName, setSchoolName] = useState("Podar");
    const [student, setStudent] = useState([
        { id: "101", name: "sachin", age: 28, className: "10th", gender: "male" },
        { id: "102", name: "Payal", age: 28, className: "12th", gender: "female" },
        { id: "103", name: "Punit", age: 35, className: "5th", gender: "male" },
        { id: "104", name: "raja", age: 35, className: "10th", gender: "Male" }
    ]);

    const getIncrementId = () => {
        if (student && student.length) {
            const getId = parseInt(student[student.length - 1].id);
            return `${getId + 1}`;
        } else {
            return "100";
        }
    };

    const addStudent = studenInformation => {
        const stu = student.concat({
            id: getIncrementId(),
            name: studenInformation.name,
            age: parseInt(studenInformation.age),
            className: studenInformation.studentClassName,
            gender: studenInformation.gender
        });
        setStudent(stu);
    };
    const removeStudent = deleteId => {
        const updatedstu = student.filter(studl => studl.id !== deleteId);
        setStudent(updatedstu);
    };
    const editStudent = studenInformation => {
        const { id, name, age, className, gender } = studenInformation;
        const updatedstudent = student.map(stud => {
            if (stud.id === id) {
                stud.name = name;
                stud.age = parseInt(age);
                stud.className = className;
                stud.gender = gender;
            }
            return stud;
        });
        setStudent(updatedstudent)
    };

    return (
        <schoolContext.Provider
            value={{ schoolName, student, addStudent, removeStudent, editStudent }}
        >
            {props.children}
        </schoolContext.Provider>
    );
}

export { Provider, schoolContext };
