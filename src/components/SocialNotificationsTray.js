import React from "react";
import messengerIcon from '../images/chat.png';
import gmailIcon from '../images/envelope.png';
import TelegramAPI from "./TelegramAPI";
import Messenger from "./Messenger";
import GMail from "./GMail";

export default function SocialNotificationsTray({telegramNotifications, messengerNotifications, gmailNotifications}) {
    
    const insertTelegramNotificationBadge = (telegramNotifications) => {
        if (telegramNotifications >= 1) {
            return (<span className="social-notification-badge">{telegramNotifications}</span>)
        } else {
            return ("");
        }
    }

    const insertMessengerNotificationBadge = (messengerNotifications) => {
        if (messengerNotifications >= 1) {
            return (<span className="social-notification-badge">{messengerNotifications}</span>)
        } else {
            return ("");
        }
    }

    const insertGmailNotificationBadge = (gmailNotifications) => {
        if (gmailNotifications >= 1) {
            return (<span className="social-notification-badge">{gmailNotifications}</span>)
        } else {
            return ("");
        }
    }

    
    
    return ( 
        <div className="social-icons-spacing">
            <TelegramAPI 
                insertTelegramNotificationBadge={insertTelegramNotificationBadge} 
                telegramNotifications={telegramNotifications} 
            />
            <Messenger 
                insertMessengerNotificationBadge={insertMessengerNotificationBadge} 
                messengerNotifications={messengerNotifications} 
            />
            <GMail 
                insertGmailNotificationBadge={insertGmailNotificationBadge} 
                gmailNotifications={gmailNotifications} 
            />
        </div>
     );
}

