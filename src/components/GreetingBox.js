import React from "react";
import GreetingHeader from "../components/GreetingHeader"
import WhatDoing from "../components/WhatDoing"

export default function GreetingBox() {
    return ( 
        <div className="center-text">
            <GreetingHeader />
            <WhatDoing />
        </div>
     );
}

