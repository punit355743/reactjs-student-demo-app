import React from 'react';
import Student from './student/student'

export function StudentList({ studentList }) {
    console.log(studentList);
    return (
        <div>
            {studentList.map((student) => <Student key={student.id} name={student.name} age={student.age} studentClass={student.className} />)}
        </div>
    );
}
