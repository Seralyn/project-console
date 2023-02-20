import React from "react";
import ColoradoClock from "../components/ColoradoClock"
import LithuaniaClock from "../components/LithuaniaClock"
import TokyoClock from "../components/TokyoClock"



export default function ClockTray({coloradoTimeData, lithuaniaTimeData, japanTimeData}) {
           

    return ( 
        <div className="card">
            <ColoradoClock coloradoTimeData= {coloradoTimeData} />
            <LithuaniaClock lithuaniaTimeData = {lithuaniaTimeData} />
            <TokyoClock japanTimeData = {japanTimeData} />
        </div>
     );
}

