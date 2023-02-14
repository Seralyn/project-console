import React from "react";
import messengerIcon from '../images/chat.png';
import gmailIcon from '../images/envelope.png';
import TelegramAPI from "./TelegramAPI";
import Messenger from "./Messenger";

export default function SocialNotificationsTray() {
    return ( 
        <div className="social-icons-spacing">
            <TelegramAPI />
            <Messenger />
            <div className="horizontal-layout-child-padding"><img className="gmail-icon-sizing-exception" src={gmailIcon} alt="Gmail Icon" /></div>
        </div>
     );
}

