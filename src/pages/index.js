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



const IndexPage = () => {
  return (
    <main className="page-container">
      <div className="top-row-layout">
        <ThemeTray />
        <CloudCoverTray />
      </div>
      
      <ClockTray />

      <div className="top-row-layout">

        <div className="flex flex-column side-container-top-margin">
          <Upcoming />
          <GoogleCalendar />
        </div>
      
        <div className="flex flex-column">
          <GreetingBox className="center-text" />
          <Notepad className="notepad" />
          <SocialNotificationsTray />
        </div>

        <div className="flex flex-column side-container-top-margin">
          <ToDos />
          <CheckIns />
        </div>

      </div>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Project Console</title>
