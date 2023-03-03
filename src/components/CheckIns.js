import React from "react";
// import * as React from "react"

export default function CheckIns({lithuanianDateData}) {
    return ( 
        <div className="component-border side-component card">
            <h2 className="center-text underline-text cypun-alt--text">Mistress Management</h2>
            <h3>Today's date: <span className="bold-text">{lithuanianDateData}</span></h3>
            <div>Seralyn: recent interaction - likely</div>
            <div>Erika: Tease her over text and make plan to slice her</div>
            <div>Paulina: Set up a meeting to "talk" but actually just fuck her</div>
            <div>Remonda: Protect her</div>
            <div>The New Girl: Figure out what you can get away with</div>
            <a href="https://fetlife.com" target="_blank">Open Fetlife</a>
        </div>
     );
}

