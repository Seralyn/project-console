import React from "react";
import { Icon } from '@iconify/react';

export default function LithuaniaClock({lithuaniaTimeData}) {
    return ( 
        <div className="clock-padding clock-row">
            <Icon icon="openmoji:flag-lithuania" width="30" height="30" />
            <h3>&nbsp;:&nbsp;</h3>
            <h3>{lithuaniaTimeData}</h3>
        </div>
     );
}

