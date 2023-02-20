import React from "react";
import GreetingHeader from "../components/GreetingHeader"
import WhatDoing from "../components/WhatDoing"
import SocialNotificationsTray from "./SocialNotificationsTray";

export default function GreetingBox({seralynActivity, dayEpoch, telegramNotifications, messengerNotifications, gmailNotifications}) {
    
    
    return ( 
        <div className="center-text card-colorful">
            <GreetingHeader dayEpoch= {dayEpoch} />
            <WhatDoing seralynActivity = {seralynActivity}/>
            <SocialNotificationsTray telegramNotifications={telegramNotifications} messengerNotifications={messengerNotifications} gmailNotifications={gmailNotifications} />
        </div>
     );
}

