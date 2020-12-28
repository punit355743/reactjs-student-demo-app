import React, { useContext } from 'react';
import { schoolContext } from './../../store/Provider';

function About(props) {
    const { schoolName } = useContext(schoolContext);
    return (
        <div>
            <h1>About Component </h1>
            <p>
                {schoolName} Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when ...

            </p>
        </div>
    );
}

export default About;