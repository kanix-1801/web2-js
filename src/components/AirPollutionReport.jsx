import React, { useState } from "react";
import axios from "axios";

const AirPollutionReport = () => {
  const openWeatherApiKey = "fa21c2942d043f49cb1563b36fe35cce";
  const [cityName, setCityName] = useState("");
  const [airQualityData, setAirQualityData] = useState(null);

  const handleCityInputChange = (e) => {
    setCityName(e.target.value);
  };

  const fetchAirQualityReport = async () => {
    try {
      const coordinates = await getCityCoordinates();
      const { lat, lon } = coordinates;

      const response = await axios.get(
        `http://api.openweathermap.org/data/2.5/air_pollution/forecast?lat=${lat}&lon=${lon}&appid=${openWeatherApiKey}`
      );
      console.log(response.data.list[0].main.aqi);
      const firstReport = response.data.list[0]?.components || {};
      setAirQualityData(firstReport);
    } catch (error) {
      console.error("Error fetching air quality data:", error);
    }
  };

  const getCityCoordinates = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${openWeatherApiKey}`
      );

      return response.data.coord || {};
    } catch (error) {
      console.error("Error fetching coordinates:", error.message);
      return {};
    }
  };
  return (
    <div>
      <h2>Air Pollution Report</h2>
      <div>
        <label htmlFor="cityInput">Enter City Name: </label>
        <input
          type="text"
          id="cityInput"
          value={cityName}
          onChange={handleCityInputChange}
          required
        />
        <button onClick={fetchAirQualityReport}>Get Pollution Report</button>
      </div>
      <ul>
        {airQualityData &&
          Object.entries(airQualityData).map(([key, value]) => (
            <li key={key}>
              <strong>{key}:</strong> {value}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default AirPollutionReport;
