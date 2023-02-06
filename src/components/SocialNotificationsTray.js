import React from "react";
import telegramIcon from '../images/telegram.png';
import messengerIcon from '../images/chat.png';
import gmailIcon from '../images/envelope.png';
// import * as React from "react"

export default function SocialNotificationsTray() {
    return ( 
        <div className="social-icons-spacing">
            <div className="horizontal-layout-child-padding"><img className="social-icon-size-constraint" src={telegramIcon} alt="Telegram chat app Icon" /></div>
            <div className="horizontal-layout-child-padding"><img className="social-icon-size-constraint" src={messengerIcon} alt="Facebook Messenger Icon" /></div>
            <div className="horizontal-layout-child-padding"><img className="gmail-icon-sizing-exception" src={gmailIcon} alt="Gmail Icon" /></div>
        </div>
     );
}

