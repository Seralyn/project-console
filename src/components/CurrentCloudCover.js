import React from "react";
import { useState } from "react";
import axios from "axios";

export default function CurrentCloudCover() {
    
    const [currentWeatherData, setcurrentWeatherData] = useState("");

    const baseURLCurrent =
        "https://api.weatherapi.com/v1/current.json?key=a19d19d5317a40198b762206222204&q=vilnius&aqi=no";

        
    const getThatWeatherForMe = () => {
        axios.get(baseURLCurrent).then((resp) => {
        setcurrentWeatherData(resp.data);
    });
    }

    getThatWeatherForMe();
    // getThatForecastForMe();

    

    return ( 
        <div className="small-margin-top">
            
            <div className="">
                <h3 className="bold-text">Current Cloud Cover:{" "}{currentWeatherData && currentWeatherData.current.cloud}%</h3>
            </div>
            
        </div>
     );
}



