import React from "react";
import { Icon } from '@iconify/react';

export default function ColoradoClock({coloradoTimeData}) {
    return ( 
        <div>
            <h3><span><Icon icon="openmoji:flag-united-states" /></span> : {coloradoTimeData}</h3>
        </div>
     );
}

