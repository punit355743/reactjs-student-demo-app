import React, { Component } from 'react';
import { schoolContext } from "./../../store/Provider";

class About extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "punit"
        }
        this.clickHandler = this.clickHandler.bind(this);
    }

    clickHandler() {
        console.log("xxxxx", this.state.name);
    }


    render() {
        return (
            <schoolContext.Consumer>
                {(schoolData) => (
                    <div>
                        <h1>{schoolData.schoolName}</h1>
                        <h1>In Our School number of student {schoolData.student.length}</h1>
                        <h2>{this.state.name}</h2>
                        <input type="text" defaultValue="punit" />
                        <button onClick={this.clickHandler}>Click</button>
                    </div>
                )}
            </schoolContext.Consumer>
        );
    }
}

export default About;