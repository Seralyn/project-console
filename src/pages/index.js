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

  const timeFORMAT = 'HH:mm:ssaa';
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
      
      if (ltNum > 10.3 && ltNum <= 15) { return "Drinking coffee, playing Rimworld etc" }
      if (ltNum >= 15.01 && ltNum <= 19) { return "Working the busy part of the day" }
      if (ltNum >= 19.01 && ltNum <= 20) { return "Taking her \"lunch break\" and eating dinner" }
      if (ltNum >= 20.01 && ltNum <= 23) { return "Working & probably only moderately busy" }
      if (ltNum >= 23.01 && ltNum <= 0.3) { return "Belching loudly" }
      if (ltNum >= 0.31 && ltNum <= 4) { return "Decompressing/Intoxicating/Media Intake" }
      if (ltNum >= 4 && ltNum <= 6.3) { return "Probably Sleeping" }
      if (ltNum >= 6.31 && ltNum <= 10.3) { return "Definitely Sleeping" }
      
  }


  findSeralynCurrentActivity();

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
          <GreetingBox className="center-text" lithuaniaTimeData = {lithuaniaTime} seralynActivity = {findSeralynCurrentActivity}/>
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
