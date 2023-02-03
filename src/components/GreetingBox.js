import React from "react";
import GreetingHeader from "../components/GreetingHeader"
import WhatDoing from "../components/WhatDoing"

export default function GreetingBox({seralynActivity, dayEpoch}) {
    return ( 
        <div className="center-text">
            <GreetingHeader dayEpoch= {dayEpoch} />
            <WhatDoing seralynActivity = {seralynActivity}/>
        </div>
     );
}

