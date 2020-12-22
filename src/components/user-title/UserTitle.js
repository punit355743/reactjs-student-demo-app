import React from 'react';

function UserTitle({ title: { userId, id, title, completed } }) {
    return (
        <div>
            <div>User Title List</div>
            <div>{userId}</div>
            <div>{id}</div>
            <div>{title}</div>
            <div>{completed}</div>
        </div>
    );
}

export default UserTitle;