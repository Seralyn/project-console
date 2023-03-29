import React from "react";
import GreetingHeader from "../components/GreetingHeader"
import WhatDoing from "../components/WhatDoing"


export default function GreetingBox({seralynActivity, dayEpoch}) {
    
    
    return ( 
        <div className="center-text card-colorful">
            <GreetingHeader className="yellow-text" dayEpoch= {dayEpoch} />
            <div className="yellow-text">BE NICE TO RAI-CHAN</div>
            <WhatDoing seralynActivity = {seralynActivity}/>
            
        </div>
     );
}

