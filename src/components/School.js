import "./School.css";
import React, { useState, useEffect, useContext } from "react";
import { StudentList } from "./student-list/StudentList";
import StudentForm from "./student-form/StudentForm";
import UserTitle from "./user-title/UserTitle";
import WelcomeMessage from './welcome-message/WelcomeMessage';
import { schoolContext } from './../store/Provider';
const axios = require('axios');


const School = () => {
    const { schoolName } = useContext(schoolContext);


    // const [title, setTitle] = useState({
    //     "userId": 1,
    //     "id": 1,
    //     "title": "defaulyt title",
    //     "completed": true
    // })

    // useEffect(() => {
    //     axios.get('https://jsonplaceholder.typicode.com/todos/1')
    //         .then(function (response) {
    //             // handle success
    //             setTitle(response.data);
    //         })
    //         .catch(function (error) {
    //             // handle error
    //             console.log(error);
    //         })
    // }, [])


    return (
        <div className={"my-school"}>
            <WelcomeMessage>
                <h1>Good Morning Punit!</h1>
            </WelcomeMessage>


            <h1>My School name is : {schoolName} </h1>
            {/* <UserTitle title={title} /> */}
            <StudentList />
            <StudentForm />

        </div>
    );
};

export default School;