import React, { useState, useEffect } from 'react';
import "./student.css"

function Student({ id, name, age, studentClass, removeStudent}) {

    return (
        <div className={"student-container"}>
            <span className={"student"}>{id}</span>
            <span className={"student"}>{name}</span>
            <span className={"student"}>{age}</span>
            <span className={"student"}>{studentClass}</span>
            <span className={"student"}><button>edit</button></span>
            <span className={"student"}><button onClick={()=>removeStudent(id)}>delete</button></span>

        </div>
    );
}

export default Student;