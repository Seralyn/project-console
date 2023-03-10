import React from "react";


export default function TelegramAPI({telegramNotifications, insertTelegramNotificationBadge}) {
    
    return ( 
        <div>
            <div className="horizontal-layout-child-padding position-relative">
                <svg fill="#ff4b4b" width="50px" height="50px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" stroke="#ff4b4b"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M29.919 6.163l-4.225 19.925c-0.319 1.406-1.15 1.756-2.331 1.094l-6.438-4.744-3.106 2.988c-0.344 0.344-0.631 0.631-1.294 0.631l0.463-6.556 11.931-10.781c0.519-0.462-0.113-0.719-0.806-0.256l-14.75 9.288-6.35-1.988c-1.381-0.431-1.406-1.381 0.288-2.044l24.837-9.569c1.15-0.431 2.156 0.256 1.781 2.013z"></path> </g></svg>
                <span>{insertTelegramNotificationBadge(telegramNotifications)}</span>
            </div>
        </div>
     );
}








