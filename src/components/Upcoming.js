import React from "react";
import ApiCalendar from "react-google-calendar-api";

export default function Upcoming() {
    
    const googleCalendarAPIKey = "AIzaSyBIbRwR7a7jFbdFs9kIYg2-6MAFGW20ctw";
    const googleClientID = "22637917346-0i19thlcpermmk0nq90vjl2q11o4bfds.apps.googleusercontent.com";

    const config = {
        "clientId": googleClientID,
        "apiKey": googleCalendarAPIKey,
        "scope": "https://www.googleapis.com/auth/calendar",
        "discoveryDocs": [],
        "clientSecret": "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",
    }

    const apiCalendar = new ApiCalendar(config);

    const handleItemClick = (name) =>  {
        if (name === 'sign-in') {
          apiCalendar.handleAuthClick()
        } else if (name === 'sign-out') {
          apiCalendar.handleSignoutClick();
        }
      }

      const showEvents = (events) => {
        apiCalendar.listUpcomingEvents(events);
      }
    //   const showEvents = apiCalendar.listUpcomingEvents({"maxResults": 4, "calendarId": "this.calendar"});
    
    return ( 
        <div className="component-border side-component">
            <h2 className="cypun-alt--text">Upcoming </h2>
            <div>{showEvents}</div>
            <ul>
                <li>Lorem Ipsum</li>
                <li>Lorem Ipsum</li>
                <li>Lorem Ipsum</li>
                <li>Lorem Ipsum</li>
                <li>Lorem Ipsum</li>
            </ul>
            <button
                  onClick={(e) => handleItemClick(e, 'sign-in')}
              >
                sign-in
              </button>
              <button
                  onClick={(e) => handleItemClick(e, 'sign-out')}
              >
                sign-out
              </button>
        </div>
     );
}

