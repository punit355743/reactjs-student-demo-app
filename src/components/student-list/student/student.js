import React from 'react';
import "./student.css"

function student({ name, age, studentClass }) {
    return (
        <div className={"student-container"}>
            <span className={"student"}>{name}</span>
            <span className={"student"}>{age}</span>
            <span className={"student"}>{studentClass}</span>
            <span className={"student"}><button>edit</button></span>
            <span className={"student"}><button>delete</button></span>

        </div>
    );
}

export default student;