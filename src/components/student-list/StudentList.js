import React, { useState, useEffect } from 'react';
import Student from './student/Student'

export function StudentList({ studentList,removeStudent }) {
    console.log(removeStudent);
    return (
        <div>
            {!studentList.length
                ? <div>No data found.</div>
                : studentList.map((student) =><div> <Student key={student.id} id={student.id} name={student.name} age={student.age} studentClass={student.className} removeStudent={removeStudent}/></div>)
            } 
        </div>
    );
}
