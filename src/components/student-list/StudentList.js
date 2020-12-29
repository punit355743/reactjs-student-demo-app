import React, { useState, useEffect, useContext } from 'react';
import Student from './student/Student'
import { schoolContext } from './../../store/Provider'

export function StudentList() {
    const { student, removeStudent } = useContext(schoolContext)
    return (
        <div>
            {!student.length
                ? <div>No data found.</div>
                : student.map((student) => <Student key={student.id} id={student.id} name={student.name} age={student.age} studentClass={student.className} gender={student.gender} removeStudent={removeStudent} />)
            }
        </div>
    );
}
