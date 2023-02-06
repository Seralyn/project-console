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
                    <div className="color-square">1</div>
                    <div className="color-square">2</div>
                    <div className="color-square">3</div>
                    <div className="color-square">4</div>
            </div>
                <div>Cotton Candy</div>
            </div>
            
            <div className="themetray-item">
            <div className="theme-colors-holder">
                    <div className="color-square">1</div>
                    <div className="color-square">2</div>
                    <div className="color-square">3</div>
                    <div className="color-square">4</div>
            </div>
                <div>Clean & Simple</div>
            </div>
            
            <div className="themetray-item">
            <div className="theme-colors-holder">
                    <div className="color-square">1</div>
                    <div className="color-square">2</div>
                    <div className="color-square">3</div>
                    <div className="color-square">4</div>
            </div>
                <div>Midnight</div>
            </div>
            
            <div className="themetray-item-last">
            <div className="theme-colors-holder">
                    <div className="color-square">1</div>
                    <div className="color-square">2</div>
                    <div className="color-square">3</div>
                    <div className="color-square">4</div>
            </div>
                <div>Terminal</div>
            </div>

        </div>
     );
}

