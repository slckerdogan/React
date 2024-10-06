import React from 'react'
import { useState } from 'react';
import '../css/MainArea.css'

function MainArea() {
    let t = new Date().toLocaleTimeString();
    const [clock, setClock] = useState(t)

    const showTime = () => {
        let t = new Date();

        let hour = t.getHours();
        if (hour < 10) {
            hour = "0" + hour;
        }

        let minute = t.getMinutes();
        if (minute < 10) {
            minute = "0" + minute;
        }

        let second = t.getSeconds();
        if (second < 10) {
            second = "0" + second;
        }

        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

        let digital = hour + ":" + minute + ":" + second + " " + days[t.getDay()]

        setClock(digital)
    }
    setInterval(showTime, 1000);
    return (
        <div className="clock" onLoad={showTime}>
            {clock}
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque iste reiciendis dolores placeat libero cupiditate, rerum veniam ut magnam dolorem deserunt numquam. Culpa impedit repudiandae itaque possimus animi neque aperiam quidem totam. Non alias eligendi, quo pariatur maxime fugit quasi possimus modi facere. Quo magni at qui vero atque ut ad reiciendis deleniti architecto tempora.

            </p>
        </div>
        
    )
}

export default MainArea