import "./App.css";
import { useState } from "react";
import Weather from "./Weather/Weather";
import background from "./Img/background.jpg";
function App() {
  const [weather, setWeather] = useState([]);

  const city = (name) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=f006978badfda0c49fedf639c9be684a&units=metric`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setWeather(data));
  };

  console.log(weather)

  const myStyle = {
    backgroundImage: `url(${background})`,
    height: "900px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  // const [txt, setTxt] = useState('');
 
  // const onInputChange = e => {
  //   const { value } = e.target; 
  //   const re = /^[A-Za-z]+$/;
  //   if (value === "" || re.test(value)) {
  //     setTxt(value);
  //   }
  // }
  return (
    <div className="App" style={myStyle}>
        <input id="input" type={'text'}/>
        <button
          onClick={() => {
            const value = document.getElementById("input").value;
            if (value === "" || weather.cod === '404') {
              document.getElementById("error-message").innerText =
                "Please enter a city name";
              document.getElementById("error-message").style.display = "block";
              document.getElementById("display-weather").style.display =
              "none";
            } 
            else {
              city(value);
              document.getElementById("display-weather").style.display =
                "block";
                document.getElementById("error-message").style.display = "none";
            }
          }}
        >
          Search
        </button>
        <p id="error-message"></p>
        <p id="error-message2"></p>
        <div id="display-weather">
          <Weather
            cityName={weather.name}
            icon={weather?.weather?.map((icon) => {
              return icon.icon;
            })}
            temperature={weather?.main?.temp}
            clouds={weather?.weather?.map((item) => {
              return item.main;
            })}
            wind={weather?.wind?.speed}
          ></Weather>
        </div>
      </div>
    );
  };

export default App;
