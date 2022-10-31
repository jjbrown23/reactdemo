import React, { useState } from 'react';

const MyCounter = (props) => {


    // this would be the old html/js way, let's use react's benefits
    // const count = document.getElementById("count");
    // let countState = 77;

    const [countState, setCountState] = useState(77)

    function incrementCount() {
        // countState++
        setCountState(countState + props.incBy);
    }
    function decrementCount() {
        setCountState(countState - props.decBy);
    }
    return (
        <div>
            <div>{countState}</div>
            <button onClick={incrementCount}>+{props.incBy}</button>
            <button onClick={decrementCount}>-{props.decBy}</button>
        </div>
    )
}

export default MyCounter;