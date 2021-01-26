import React, { useState, useMemo } from 'react';

function Help(props) {

    const [isSunnyDay, setIssunnyDay] = useState(false);
    const [count, setCount] = useState(0);
    const getTable = useMemo(() => {
        for (let i = 0; i <= 10000000; i++) {
        }
        const table = []
        console.log("table component render");
        if (count === 0) return []
        for (let i = 1; i <= 10; i++) {
            table.push(count * i);
        }
        return table;
    }, [count])


    return (
        <div>
            <h1>Help Component</h1>
            {isSunnyDay ? (<p>What a beautiful day</p>) : (<p>What a beautiful Night</p>)}
            <input type="number" value={count} onChange={(e) => {
                setCount(e.target.value)
            }} />
            <button onClick={() => {
                setIssunnyDay(!isSunnyDay);
            }}>chnage Day/Night mode</button>
            <ul>
                {getTable.map((num) => {

                    return (<li key={num}>{num}</li>)

                })}
            </ul>
        </div>
    );
}


export default Help;