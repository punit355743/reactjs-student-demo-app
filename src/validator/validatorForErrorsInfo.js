import React from 'react';

function validatorForErrorsInfo(values) {
    let errors = {};

    if (!values.name) {
        errors.name = "Student Name is require !!!";
    }
    if (!values.studentClassName) {
        errors.studentClassName = "Please select the class name !!!";
    }

    if (!values.age) {
        errors.age = "Student Age is require !!!";
    }

    if (!values.gender) {
        errors.gender = "Gender is require !!!";
    }

    return errors;
}

export default validatorForErrorsInfo;