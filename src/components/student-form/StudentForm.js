import React, { useState } from 'react';
import "./StudentForm.css"

function StudentForm(props) {

    const [name, setName] = useState("Amit");
    const [studentClassName, setStudentClassName] = useState("Third");
    const [age, setAge] = useState(15);
    const addStudent = (event) => {
        event.preventDefault();
        props.addStudent({ id: 106, name: name, studentClassName: studentClassName, age: age })

    }

    return (
        <form className={"form-container"}>
            <h1>
                Student Form
       </h1>
            <div>Name:<input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="name" className={"form-item"} /></div>
            <div>Class: <select className="form-control" value={studentClassName} onChange={(e) => setStudentClassName(e.target.value)} className={"form-item"}>
                <option value="select">Select</option>
                <option value="First">First</option>
                <option value="Second">Second</option>
                <option value="Third">Third</option>
            </select></div>
            <div>Age:<input type="text" placeholder="Age" value={age} onChange={(e) => setAge(e.target.value)} className={"form-item"} /></div>
            <button onClick={addStudent} className={"submit-btn"}>Submit</button>
        </form>

    );
}

export default StudentForm;