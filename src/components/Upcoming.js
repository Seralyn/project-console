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

      const showEvents = () => {
        apiCalendar.listUpcomingEvents(10).then(function (_a) {
            var result = _a.result;
            console.log(result.items);
        });
      }
    
    return ( 
        <div className="component-border side-component">
            <h2 className="cypun-alt--text">Upcoming </h2>
            <div>{showEvents}</div>
            <ul>
                <li>Munch, Thur 2/16/23 @ 19:00</li>
                <li>Dentist, Sat 2/18/23 @ 13:00</li>
                <li>Coffee Date w/ Sun Tzu, Sun 2/19/23 @ 15:00</li>
                <li>Visa pickup, Thur 2/23/23 @ 11:00</li>
                <li>Movie date w/ President of Iran, Thur 2/23/23 @ 18:00</li>
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

