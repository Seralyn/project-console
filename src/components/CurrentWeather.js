import React from "react";
// import * as React from "react"

export default function CurrentWeather() {
    return ( 
        <div className="component-border side-component">
            
            <div className="weather-box">
                <h2 className="center-text underline-text cypun-alt--text">Current Weather</h2>
                <div className="flex centered-flex-column">
                    <h1 className="bold-text">7 &#8451;</h1>
                    <div>Partly Cloudy</div>
                </div>
            </div>
            
            
        </div>
     );
}

