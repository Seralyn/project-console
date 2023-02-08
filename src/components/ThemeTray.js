import React from "react";
// import * as React from "react"

export default function ThemeTray() {
    return ( 
        <div className="themetray-layout">
            <div className="themetray-item">
                <div>Creamy Kelp</div>
            </div>

            <div className="themetray-selected">
                <div>Cyberpunk</div>
            </div>
            
            <div className="themetray-item">
                <div>Cotton Candy</div>
            </div>
            
            <div className="themetray-item">
                <div>Clean & Simple</div>
            </div>
            
            <div className="themetray-item">
                <div>Midnight</div>
            </div>
            
            <div className="themetray-item-last">
                <div>Terminal</div>
            </div>

        </div>
     );
}

