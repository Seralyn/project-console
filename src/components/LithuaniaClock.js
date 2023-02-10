import React from "react";
import { Icon } from '@iconify/react';

export default function LithuaniaClock({lithuaniaTimeData}) {
    return ( 
        <div className="clock-padding">
            <h3><span><Icon icon="openmoji:flag-lithuania" /> :</span> {lithuaniaTimeData}</h3>
        </div>
     );
}

