import React from "react";
import GreetingHeader from "../components/GreetingHeader"
import WhatDoing from "../components/WhatDoing"

export default function GreetingBox({seralynActivity, lithuanianTimeData}) {
    return ( 
        <div className="center-text">
            <GreetingHeader lithuanianTimeData={lithuanianTimeData} />
            <WhatDoing seralynActivity = {seralynActivity}/>
        </div>
     );
}

