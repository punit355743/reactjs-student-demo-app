import React from 'react';

function WelcomeMessage(props) {
    return (
        <div>
            {props.children}
        </div>
    );
}

export default WelcomeMessage;