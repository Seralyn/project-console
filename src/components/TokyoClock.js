import React from "react";
import { Icon } from '@iconify/react';

export default function TokyoClock({japanTimeData}) {
    return ( 
        <div className="clock-row">
            <Icon icon="openmoji:flag-japan" width="30" height="30" />
            <h3>&nbsp;:&nbsp;</h3>
            <h3>{japanTimeData}</h3>
        </div>
     );
}

