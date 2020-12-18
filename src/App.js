import "./App.css";
import React, { useState } from "react";
import { StudentList } from "./components/student-list/StudentList";
import StudentForm from "./components/student-form/StudentForm";



const App = () => {
  const [schoolName, setSchoolName] = useState("Podar");
  const [student, setStudent] = useState([
    { id: "101", name: "sachin", age: 28, className: "10th" },
    { id: "102", name: "Payal", age: 28, className: "12th" },
    { id: "103", name: "Punit", age: 35, className: "5th" },

  ])

  const addStudent = (studenInformation) => {
    const stu = student.concat({ id: studenInformation.id, name: studenInformation.name, age: studenInformation.age, className: studenInformation.studentClassName });
    setStudent(student);
  }
  return (
    <div className={"my-school"}>
      <h1>My School name is : {schoolName} </h1>
      <StudentList studentList={student} />
      <StudentForm addStudent={addStudent} />

    </div>
  );
};

export default App;
