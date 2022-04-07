import React from "react";
import "./Weather.css"

function Weather({ cityName, temperature, clouds, wind, icon}) {

    const imageLink = `https://openweathermap.org/img/wn/${icon}@2x.png`;
    return (
      <div className="container">
      <h3>{cityName}</h3>
      <img src={imageLink} alt="" />
      <h4>{temperature}</h4>
      <h4>{clouds}</h4>
      <h4>{wind}</h4>
    </div>
  );

}

export default Weather;
