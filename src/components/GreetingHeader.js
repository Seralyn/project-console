import React from "react";


export default function GreetingHeader({dayEpoch}) {

    return ( 
        <div>
            <h1 className="fade-in-text">Good {dayEpoch}, Cerelen!</h1>
        </div>
     );
}

