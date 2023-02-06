import React from "react";
// import * as React from "react"

export default function ThemeTray() {
    return ( 
        <div className="themetray-layout">
            <div className="themetray-item">
                <div className="theme-colors-holder">
                    <div className="color-square" id="CK-bg">.</div>
                    <div className="color-square" id="CK-dk"></div>
                    <div className="color-square" id="CK-lt">.</div>
                    <div className="color-square" id="CK-txt"></div>
                </div>
                <div>Creamy Kelp</div>
            </div>

            <div className="themetray-selected">
            <div className="theme-colors-holder">
                    <div className="color-square" id="CP-bg">.</div>
                    <div className="color-square" id="CP-dk"></div>
                    <div className="color-square" id="CP-lt">.</div>
                    <div className="color-square" id="CP-txt"></div>
            </div>
                <div>Cyberpunk</div>
            </div>
            
            <div className="themetray-item">
            <div className="theme-colors-holder">
                    <div className="color-square" id="CC-bg">.</div>
                    <div className="color-square" id="CC-dk"></div>
                    <div className="color-square" id="CC-lt">.</div>
                    <div className="color-square" id="CC-txt"></div>
            </div>
                <div>Cotton Candy</div>
            </div>
            
            <div className="themetray-item">
            <div className="theme-colors-holder">
                    <div className="color-square" id="CS-bg">.</div>
                    <div className="color-square" id="CS-dk"></div>
                    <div className="color-square" id="CS-lt">.</div>
                    <div className="color-square" id="CS-txt"></div>
            </div>
                <div>Clean & Simple</div>
            </div>
            
            <div className="themetray-item">
            <div className="theme-colors-holder">
                    <div className="color-square" id="MDN-bg">.</div>
                    <div className="color-square" id="MDN-dk"></div>
                    <div className="color-square" id="MDN-lt">.</div>
                    <div className="color-square" id="MDN-txt"></div>
            </div>
                <div>Midnight</div>
            </div>
            
            <div className="themetray-item-last">
            <div className="theme-colors-holder">
                    <div className="color-square" id="TRM-bg">.</div>
                    <div className="color-square" id="TRM-dk"></div>
                    <div className="color-square" id="TRM-lt">.</div>
                    <div className="color-square" id="TRM-txt"></div>
            </div>
                <div>Terminal</div>
            </div>

        </div>
     );
}

