import React from "react";


export default function GreetingHeader(lithuanianTimeData) {
    
    let ltTimeDecimal = lithuanianTimeData * 1;
    
    let timeOfDay = () => {

        if (ltTimeDecimal >= 5.00 && ltTimeDecimal <= 11.29) { return "Morning"}
        if (ltTimeDecimal >= 11.30  && ltTimeDecimal <= 16.00) { return "Afternoon"}
        if (ltTimeDecimal >= 16.01  && ltTimeDecimal <= 21.00) { return "Evening"}
        if (ltTimeDecimal >= 21.01  && ltTimeDecimal <= 4.59) { return "Night"}
        return "nothing matches my conditions"
}
    timeOfDay();

    return ( 
        <div>
            <h1>Good *{timeOfDay()}*, Cerelen!</h1>
        </div>
     );
}

