import React, { useState, useEffect } from 'react';

const MyCounter = (props) => {


    // this would be the old html/js way, let's use react's benefits
    // const count = document.getElementById("count");
    // let countState = 77;

    const [countState, setCountState] = useState(23)

    useEffect(() => {
        if (countState >= 45) {
            alert("Resetting the count back to 23");
            setCountState(23);
        }
    }, [countState])

    function incrementCount() {
        // countState++
        setCountState(countState + props.incBy);
    }
    function decrementCount() {
        setCountState(countState - props.decBy);
    }
    return (
        <div>
            <div id="countLabel">{countState}</div>
            <button class="incBtn" onClick={incrementCount}>+{props.incBy}</button>
            <button class="decBtn" onClick={decrementCount}>-{props.decBy}</button>
        </div>
    )
}

export default MyCounter;