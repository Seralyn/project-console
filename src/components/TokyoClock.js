import React from "react";
import { Icon } from '@iconify/react';

export default function TokyoClock({japanTimeData}) {
    return ( 
        <div>
            <h3><span><Icon icon="openmoji:flag-japan" /></span> : {japanTimeData}</h3>
        </div>
     );
}

