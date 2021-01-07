import "./School.css";
import React, { useContext } from "react";
import { StudentList } from "./student-list/StudentList";
import StudentForm from "./student-form/StudentForm";
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