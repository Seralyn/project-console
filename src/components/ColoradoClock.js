import React from "react";
import { Icon } from '@iconify/react';

export default function ColoradoClock({coloradoTimeData}) {
    return ( 
        <div className="clock-row">
            <Icon icon="openmoji:flag-united-states" width="30" height="30" />
            <h3>&nbsp;:&nbsp;</h3>
            <h3>{coloradoTimeData}</h3>
        </div>
     );
}

