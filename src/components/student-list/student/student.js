import React, { useContext } from 'react';
import "./student.css"
import { schoolContext } from '../../../store/Provider';

function Student({id, name, studentClass, age}) {

    const {removeStudent } = useContext(schoolContext);
  
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