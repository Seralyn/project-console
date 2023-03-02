import React from "react";


export default function GreetingHeader({dayEpoch}) {

    return ( 
        <div>
            
            <h1 className="fade-in-text">Good {dayEpoch}, Paul!</h1>
        </div>
     );
}

