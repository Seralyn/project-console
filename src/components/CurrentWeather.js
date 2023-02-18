import React from "react";
import { useState } from "react";
import axios from "axios";

export default function CurrentWeather(props) {
    
    const [currentWeatherData, setcurrentWeatherData] = useState("");
    const [astroWeatherData, setAstroWeatherData] = useState("");
    const [forecastWeatherData, setForecastWeatherData] = useState("");

    const baseURLCurrent =
        "https://api.weatherapi.com/v1/current.json?key=a19d19d5317a40198b762206222204&q=vilnius&aqi=no";

    // const baseURLAstro =
    //     "https://api.weatherapi.com/v1/astronomy.json?key=a19d19d5317a40198b762206222204&q=" +
    //     props.cityName;

    const baseURLForecast =
        "https://api.weatherapi.com/v1/forecast.json?key=a19d19d5317a40198b762206222204&q=&days=7&aqi=no&alerts=no";

    
    const getThatWeatherForMe = () => {
        axios.get(baseURLCurrent).then((resp) => {
        setcurrentWeatherData(resp.data);
    });
    }

    const getThatForecastForMe = () => {
        axios.get(baseURLForecast).then((resp) => {
            setForecastWeatherData(resp.data);
    });
    }

    getThatWeatherForMe();
    // getThatForecastForMe();

    

    return ( 
        <div className="component-border side-component">
            
            <div className="weather-box">
                <h2 className="center-text underline-text cypun-alt--text">Current Weather</h2>
                <div className="flex centered-flex-column">
                    <h1 className="bold-text">{currentWeatherData &&
                        currentWeatherData.current.temp_c}{" "} &#8451;</h1>
                    <div>{currentWeatherData &&
                            currentWeatherData.current.condition.text}</div>
                </div>
            </div>
            
        </div>
     );
}



