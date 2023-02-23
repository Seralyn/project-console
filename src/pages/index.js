import * as React from "react"
import '../styles/basic-styles.css'; 
// import HeaderBar from '../components/HeaderBar'
import ThemeTray from '../components/ThemeTray'
import CloudCoverTray from '../components/CloudCoverTray'
import ClockTray from '../components/ClockTray'
import Upcoming from '../components/Upcoming'
import GreetingBox from "../components/GreetingBox";
import Notepad from "../components/Notepad";
import ToDos from "../components/ToDos";
import GoogleCalendar from "../components/GoogleCalendar";
import SocialNotificationsTray from "../components/SocialNotificationsTray";
import CheckIns from "../components/CheckIns"
import { useState, useEffect } from 'react'
import { formatToTimeZone } from 'date-fns-timezone';
import CurrentWeather from "../components/CurrentWeather";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import CurrentCloudCover from "../components/CurrentCloudCover"


// -------------- BEGIN TELEGRAM API STUFF ----------------

// App api_id:
// 22128585

// app api_hash:
// b40aa83bbd80178e9bef6b4c3c3929e5

// Test: 149.154.167.40:443
// -----BEGIN RSA PUBLIC KEY-----
// MIIBCgKCAQEAyMEdY1aR+sCR3ZSJrtztKTKqigvO/vBfqACJLZtS7QMgCGXJ6XIR
// yy7mx66W0/sOFa7/1mAZtEoIokDP3ShoqF4fVNb6XeqgQfaUHd8wJpDWHcR2OFwv
// plUUI1PLTktZ9uW2WE23b+ixNwJjJGwBDJPQEQFBE+vfmH0JP503wr5INS1poWg/
// j25sIWeYPHYeOrFp/eXaqhISP6G+q2IeTaWTXpwZj4LzXq5YOpk4bYEQ6mvRq7D1
// aHWfYmlEGepfaYR8Q0YqvvhYtMte3ITnuSJs171+GDqpdKcSwHnd6FudwGO4pcCO
// j4WcDuXc2CTHgH8gFTNhp/Y8/SpDOhvn9QIDAQAB
// -----END RSA PUBLIC KEY-----


// Production: 149.154.167.50:443
// -----BEGIN RSA PUBLIC KEY-----
// MIIBCgKCAQEA6LszBcC1LGzyr992NzE0ieY+BSaOW622Aa9Bd4ZHLl+TuFQ4lo4g
// 5nKaMBwK/BIb9xUfg0Q29/2mgIR6Zr9krM7HjuIcCzFvDtr+L0GQjae9H0pRB2OO
// 62cECs5HKhT5DZ98K33vmWiLowc621dQuwKWSQKjWf50XYFw42h21P2KXUGyp2y/
// +aEyZ+uVgLLQbRA1dEjSDZ2iGRy12Mk5gpYc397aYp438fsJoHIgJ2lgMv5h7WY9
// t6N/byY9Nw9p21Og3AoXSL2q/2IJ1WRUhebgAdGVMlV1fkuOQoEzR7EdpqtQD9Cs
// 5+bfo3Nhmcyvk5ftB0WkJ9z6bNZ7yxrP8wIDAQAB
// -----END RSA PUBLIC KEY-----

// -------------- END TELEGRAM API STUFF ----------------




const IndexPage = () => {

  
  // --------CLOCK LOGIC START-----------
  const timeFORMAT = 'HH:mm';
  const dateFORMAT = 'ddd MMM, Do z';
  const checkSchedFORMAT = 'HH.mm';
  const TIME_ZONE_TOKYO = 'Asia/Tokyo';
  const TIME_ZONE_LITHUANIA = 'Europe/Helsinki'
  const TIME_ZONE_DENVER = 'America/Denver';

  const now= new Date();

  let japanTime = formatToTimeZone(now, timeFORMAT, {timeZone: TIME_ZONE_TOKYO});
  // let japanDate = formatToTimeZone(now, dateFORMAT, {timeZone: TIME_ZONE_TOKYO});
  
  let coloradoTime = formatToTimeZone(now, timeFORMAT, {timeZone: TIME_ZONE_DENVER});
  // let coloradoDate = formatToTimeZone(now, dateFORMAT, {timeZone: TIME_ZONE_DENVER});
  
  let lithuaniaTime = formatToTimeZone(now, timeFORMAT, {timeZone: TIME_ZONE_LITHUANIA});
  let lithuaniaDate = formatToTimeZone(now, dateFORMAT, {timeZone: TIME_ZONE_LITHUANIA});


  //convert '20:30 --> 20.3'
  let ltNum = formatToTimeZone(now, checkSchedFORMAT, {timeZone: TIME_ZONE_LITHUANIA}) * 1;
  
  
  const [date, setDate] = useState(new Date());

  function refreshClock() {
      setDate(new Date());
  }
  useEffect(() => {setInterval(refreshClock, 1000)}, []);

  // --------CLOCK LOGIC END-----------

  // --------ACTIVITY LOGIC START-----------
  
  const findSeralynCurrentActivity = () => {
      
      if (ltNum > 9.31 && ltNum <= 10.15) { return "Drinking coffee and scrolling" }
      if (ltNum >= 10.16 && ltNum <= 13) { return "Coding your heart out" }
      if (ltNum >= 13.01 && ltNum <= 14) { return "Taking your lunch break" }
      if (ltNum >= 14.01 && ltNum <= 18) { return "Coding and chatting on Telegram" }
      if (ltNum >= 18.01 && ltNum <= 20.30) { return "Fucking around doing nothing in particular" }
      if (ltNum >= 20.31 && ltNum <= 21.30) { return "Cooking or eating dinner" }
      if (ltNum >= 21.31 && ltNum <= 23.59) { return "Getting high and playing video games" }
      if (ltNum >= 24.00 && ltNum <= 9.30) { return "Not sleeping, when you should be sleeping" }
      
  }

  
  const timeOfDay = () => {
    
    if (ltNum >= 5.00 && ltNum <= 11.29) { return "Morning"}
    if (ltNum >= 11.30  && ltNum <= 16.00) { return "Afternoon"}
    if (ltNum >= 16.01  && ltNum <= 21.00) { return "Evening"}
    if (ltNum >= 21.01  && ltNum <= 4.59) { return "Night"}
    console.log(ltNum)
    return "nothing matches my conditions"
  }
  
  let dayEpochResult =timeOfDay();
  let fscaResult = findSeralynCurrentActivity();

  // --------ACTIVITY LOGIC END-----------

  // --------SOCIAL NOTIFICATION BADGE LOGIC START-----------

  let telegramNotifications = 2;
  let messengerNotifications = 6;
  let gmailNotifications = 4;
  
    
    

  // --------SOCIAL NOTIFICATION BADGE LOGIC END-----------

  return (
    <main className="page-container">
      
      <div className="level-one--top">
        <ThemeTray />
        <CurrentCloudCover />
        <CloudCoverTray />
      </div>
      
      <div className="level-one--bottom">
        <div className="layout-column-left">
          <ClockTray coloradoTimeData = {coloradoTime} lithuaniaTimeData = {lithuaniaTime} japanTimeData = {japanTime} />
          <Upcoming />
          <Notepad />
        </div>

        <div className="layout-column-middle">
          <GreetingBox className="center-text" dayEpoch={dayEpochResult} seralynActivity={fscaResult} telegramNotifications={telegramNotifications} messengerNotifications={messengerNotifications} gmailNotifications={gmailNotifications} />
          <Accordion style={{ width: 650, backgroundColor: "#392C53" }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content">
              <Typography style={{ fontWeight: 10, color: "#ff4b4b" }}>Google Calendar</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <GoogleCalendar />
              </Typography>
            </AccordionDetails>
          </Accordion>
          
        </div>

        <div className="layout-column-right">
          <CurrentWeather />
          <CheckIns lithuanianDateData={lithuaniaDate} />
          <ToDos />
        </div>
      </div>
      
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Project Console</title>
