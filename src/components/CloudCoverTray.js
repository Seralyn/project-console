import React from "react";
// import * as React from "react"

export default function CloudCoverTray() {
    return ( 
        <div className="component-border astro-tray">
            <div className="row">
                <div className="col">
                    <div className="conditions-symbol">X</div>
                    <div className="day-of-week">Mon</div>
                </div>
                <div className="col">
                    <div className="conditions-symbol">X</div>
                    <div className="day-of-week">Tue</div>
                </div>
                <div className="col">
                    <div className="conditions-symbol">X</div>
                    <div className="day-of-week">Wed</div>
                </div>
                <div className="col">
                    <div className="conditions-symbol">?</div>
                    <div className="day-of-week">Thu</div>
                </div>
                <div className="col">
                    <div className="conditions-symbol">X</div>
                    <div className="day-of-week">Fri</div>
                </div>
                <div className="col">
                    <div className="conditions-symbol">O</div>
                    <div className="day-of-week">Sat</div>
                </div>
                <div className="col-last">
                    <div className="conditions-symbol">X</div>
                    <div className="day-of-week">Sun</div>
                </div>
            </div>
            {/* <div>poo</div> */}
        </div>
     );
}

