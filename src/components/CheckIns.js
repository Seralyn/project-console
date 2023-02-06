import React from "react";
// import * as React from "react"

export default function CheckIns({lithuanianDateData}) {
    return ( 
        <div className="component-border side-component">
            <h2 className="center-text underline-text cypun-alt--text">CheckIns</h2>
            <h3>Today's date: <span className="bold-text">{lithuanianDateData}</span></h3>
            <div>Rumi: 10th & 25th</div>
            <div>Ivan: 7th, 14th, 23rd</div>
            <div>Zack: 3rd, 12th, 20th, 28th</div>
            <div>Daniel: 14th</div>
            <div>Katy: 9th, 18th, 27th</div>
        </div>
     );
}

