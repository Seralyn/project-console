import React from "react";
import { TiWeatherCloudy } from "react-icons/ti";
import { TiWeatherNight } from "react-icons/ti";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { useState } from "react";
import axios from "axios";





export default function CloudCoverTray() {

    // if (navigator.geolocation) {
    //     navigator.permissions
    //       .query({ "name": "geolocation" })
    //       .then(function (result) {
    //         if (result.state === "granted") {
    //           console.log(result.state);
    //           //If granted then you can directly call your function here
    //         } else if (result.state === "prompt") {
    //           console.log(result.state);
    //         } else if (result.state === "denied") {
    //           //If denied then you have to show instructions to enable location
    //         }
    //         result.onchange = function () {
    //           console.log(result.state);
    //         };
    //       });
    //   } else {
    //     alert("Sorry Not available!");
    //   }

    //   var options = {
    //     enableHighAccuracy: true,
    //     timeout: 5000,
    //     maximumAge: 0,
    //   };
    //   function success(pos) {
    //     var crd = pos.coords;
      
    //     console.log("Your current position is:");
    //     console.log(`Latitude : ${crd.latitude}`);
    //     console.log(`Longitude: ${crd.longitude}`);
    //     console.log(`More or less ${crd.accuracy} meters.`);
    //   }
      
    //   function errors(err) {
    //     console.warn(`ERROR(${err.code}): ${err.message}`);
    //   }
    

    // const [currentWeatherData, setcurrentWeatherData] = useState("");
    // const [astroWeatherData, setAstroWeatherData] = useState("");
    const [forecastWeatherData, setForecastWeatherData] = useState("");

    // const baseURLCurrent =
    //     "https://api.weatherapi.com/v1/current.json?key=a19d19d5317a40198b762206222204&q=vilnius&aqi=no";

    // const baseURLAstro =
    //     "https://api.weatherapi.com/v1/astronomy.json?key=a19d19d5317a40198b762206222204&q=" +
    //     props.cityName;

    const baseURLForecast =
        "https://api.weatherapi.com/v1/forecast.json?key=a19d19d5317a40198b762206222204&q=vilnius&days=3&aqi=no&alerts=no";

    
    // const getThatWeatherForMe = () => {
    //     axios.get(baseURLCurrent).then((resp) => {
    //     setcurrentWeatherData(resp.data);
    // });
    // }

    const getThatForecastForMe = () => {
        axios.get(baseURLForecast).then((resp) => {
            setForecastWeatherData(resp.data);
            console.log(resp.data);
    });
    }

    // getThatWeatherForMe();
    getThatForecastForMe();

    return ( 
      <div>
          <div className="component-border astro-tray">
            
              <div className="row">
                  <div className="col">
                      <div className="conditions-symbol">
                          <img src={forecastWeatherData && forecastWeatherData.forecast.forecastday[0].day.condition.icon}  />
                      </div>
                      <div className="day-of-week">Mon</div>
                  </div>
                  <div className="col">
                      <div className="conditions-symbol">
                      <img src={forecastWeatherData && forecastWeatherData.forecast.forecastday[1].day.condition.icon}  />
                      </div>
                      <div className="day-of-week">Tue</div>
                  </div>
                  <div className="col">
                      <div className="conditions-symbol">
                      <img src={forecastWeatherData && forecastWeatherData.forecast.forecastday[2].day.condition.icon}  />
                      </div>
                      <div className="day-of-week">Wed</div>
                  </div>
                  <div className="col">
                      <div className="conditions-symbol">
                          <TiWeatherPartlySunny />
                      </div>
                      <div className="day-of-week">Thu</div>
                  </div>
                  <div className="col">
                      <div className="conditions-symbol">
                          <TiWeatherCloudy />
                      </div>
                      <div className="day-of-week">Fri</div>
                  </div>
                  <div className="col">
                      <div className="conditions-symbol">
                          <TiWeatherNight />
                      </div>
                      <div className="day-of-week">Sat</div>
                  </div>
                  <div className="col-last">
                      <div className="conditions-symbol">
                          <TiWeatherCloudy />
                      </div>
                      <div className="day-of-week">Sun</div>
                  </div>
                  
              </div>
              
          </div>
          <div className="weather-location-box">
            <div>{forecastWeatherData && forecastWeatherData.location.name}, {forecastWeatherData && forecastWeatherData.location.country}</div>
          </div>
          
        </div>
     );
};



