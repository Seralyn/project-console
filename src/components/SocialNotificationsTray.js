import React from "react";
import messengerIcon from '../images/chat.png';
import gmailIcon from '../images/envelope.png';
import TelegramAPI from "./TelegramAPI";
import Messenger from "./Messenger";
import GMail from "./GMail";

export default function SocialNotificationsTray({socialNotifications}) {
    const insertNotificationBadge = (socialNotifications) => {
        if (socialNotifications >= 1) {
            return (<span className="social-notification-badge">socialNotifications</span>)
        } else {
            return ("");
        }
    }
    
    return ( 
        <div className="social-icons-spacing">
            <TelegramAPI insertNotificationBadge={insertNotificationBadge} socialNotifications={socialNotifications}/>
            <Messenger />
            <GMail />
        </div>
     );
}

