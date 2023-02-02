import React from "react";
import ColoradoClock from "../components/ColoradoClock"
import LithuaniaClock from "../components/LithuaniaClock"
import TokyoClock from "../components/TokyoClock"

export default function GreetingBox() {
    return ( 
        <div className="horizontal-layout">
            <ColoradoClock />
            <LithuaniaClock />
            <TokyoClock />
        </div>
     );
}

