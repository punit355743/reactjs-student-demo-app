import "./School.css";
import React, { useState, useEffect, useContext } from "react";
import { StudentList } from "./student-list/StudentList";
import StudentForm from "./student-form/StudentForm";
import UserTitle from "./user-title/UserTitle";
import WelcomeMessage from './welcome-message/WelcomeMessage';
import { schoolContext } from './../store/Provider';
import {useHistory} from "react-router-dom";
const axios = require('axios');


const School = () => {
    const { schoolName } = useContext(schoolContext);
    const history = useHistory();
    //When application refresh it should start from home page
    useEffect(() => {
        history.push("/")
    },[])

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
                <h2>Good Morning Punit!</h2>
            </WelcomeMessage>


            <h3>My School name is : {schoolName} </h3>
            {/* <UserTitle title={title} /> */}
            <StudentList />
            <StudentForm />

        </div>
    );
};

export default School;