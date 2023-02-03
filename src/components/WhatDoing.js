import React from "react";


export default function GreetingHeader({seralynActivity}) {
    return ( 
        <div>
            <h3>Doing *{seralynActivity()}* activity, are you?</h3>
        </div>
     );
}

