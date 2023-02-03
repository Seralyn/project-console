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


const IndexPage = () => {

  const timeFORMAT = 'HH:mm:ss';
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

  
  const findSeralynCurrentActivity = () => {
      
      if (ltNum > 9.31 && ltNum <= 10.15) { return "Drinking coffee and scrolling" }
      if (ltNum >= 10.16 && ltNum <= 13) { return "Coding your heart out" }
      if (ltNum >= 13.01 && ltNum <= 14) { return "Taking your lunch break" }
      if (ltNum >= 14.01 && ltNum <= 18) { return "Coding and chatting with Paul on Telegram" }
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

  return (
    <main className="page-container">
      <div className="top-row-layout">
        <ThemeTray />
        <CloudCoverTray />
      </div>
      
      <ClockTray coloradoTimeData = {coloradoTime} lithuaniaTimeData = {lithuaniaTime} japanTimeData = {japanTime} />

      <div className="top-row-layout">

        <div className="flex flex-column side-container-top-margin">
          <Upcoming />
          <GoogleCalendar />
        </div>
      
        <div className="flex flex-column">
          <GreetingBox className="center-text" dayEpoch={dayEpochResult} seralynActivity = {fscaResult}/>
          <Notepad />
          <SocialNotificationsTray />
        </div>

        <div className="flex flex-column side-container-top-margin">
          <ToDos />
          <CheckIns lithuanianDateData={lithuaniaDate} />
        </div>

      </div>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Project Console</title>
