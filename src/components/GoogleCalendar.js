import React from "react";
// import * as React from "react"

export default function GoogleCalendar() {
    return ( 
        <div className="component-border side-component">
            <iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%234285F4&ctz=Europe%2FVilnius&showTitle=0&showPrint=0&showTabs=0&showCalendars=1&src=c2VyYWx5bmNhbXBiZWxsQGdtYWlsLmNvbQ&src=Z2p2MjVvY2JqMXUxMWQ2OTFobmJndGJjZzBAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=ZW4uamFwYW5lc2UjaG9saWRheUBncm91cC52LmNhbGVuZGFyLmdvb2dsZS5jb20&src=Y19jaGt2NjI4ZXJqYjZtZGNwM2F1aW9jZ3Vra0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%237986CB&color=%23F09300&color=%23F4511E&color=%238E24AA&color=%237CB342" style={{borderWidth:0}} width="600" height="370" frameborder="0" scrolling="no"></iframe>
        </div>
     );
}

