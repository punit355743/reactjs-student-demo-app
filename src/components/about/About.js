import React, { Component } from 'react';

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
            <div>
                <h1>This is About component!!!!!</h1>
                <h2>{this.state.name}</h2>
                <input type="text" defaultValue="punit" />
                <button onClick={this.clickHandler}>Click</button>
            </div>
        );
    }
}

export default About;