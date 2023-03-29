import * as React from "react"
import '../styles/basic-styles.css'; 
import CloudCoverTray from '../components/CloudCoverTray'
import Upcoming from '../components/Upcoming'
import GreetingBox from "../components/GreetingBox";
import ToDos from "../components/ToDos";
import GoogleCalendar from "../components/GoogleCalendar";
import CheckIns from "../components/CheckIns"
import { useState, useEffect } from 'react'
import { formatToTimeZone } from 'date-fns-timezone';
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Q1 from "../components/Q1";
import Q2 from "../components/Q2";
import Q3 from "../components/Q3";



const IndexPage = () => {

  
  // --------CLOCK LOGIC START-----------
  const timeFORMAT = 'HH:mm';
  const dateFORMAT = 'ddd MMM, Do';
  const checkSchedFORMAT = 'HH.mm';
  const TIME_ZONE_LITHUANIA = 'Europe/Helsinki'
  

  const now= new Date();
  
  // let lithuaniaTime = formatToTimeZone(now, timeFORMAT, {timeZone: TIME_ZONE_LITHUANIA});
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
      
      if (ltNum > 9.31 && ltNum <= 10.15) { return "Pretending to be working" }
      if (ltNum >= 10.16 && ltNum <= 13) { return "Hopefully actually working" }
      if (ltNum >= 13.01 && ltNum <= 14) { return "Taking your lunch break" }
      if (ltNum >= 14.01 && ltNum <= 18) { return "Prepping for workshop" }
      if (ltNum >= 18.01 && ltNum <= 20.30) { return "Leading your workshop or picking kids up from school" }
      if (ltNum >= 20.31 && ltNum <= 21.30) { return "Cooking or eating dinner" }
      if (ltNum >= 21.31 && ltNum <= 23.59) { return "Getting ready for bed" }
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

 
  // --------SOCIAL NOTIFICATION BADGE LOGIC END-----------

  return (
    <main className="page-container">
      
      <div className="level-one--top">
        <CloudCoverTray />
      </div>
      <h3 className="level-one--top">{lithuaniaDate}</h3>
      <GreetingBox className="center-text" dayEpoch={dayEpochResult} seralynActivity={fscaResult}  />
      <div className="cards">
        <ToDos />
        <CheckIns lithuanianDateData={lithuaniaDate} />
      </div>
      <div className="cards">
        <Upcoming />
        </div>
        <div className="cards">
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
      <div className="cards">
        <Q1 />
         <Q2 />
        <Q3 /> 
      </div>
      
       
        
      
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Paul's App</title>
