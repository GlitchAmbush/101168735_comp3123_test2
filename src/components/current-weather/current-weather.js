import "./current-weather.css";

const CurrentWeather = ({ data }) => {
  return (
    <div className="weather">
      <div className="top">
        <div>
          <p className="city">{data.city}</p>
          <p className="weather-desc">{data.weather[0].description}</p>
        </div>
        <img
          alt="weather"
          className="weather-icon"
          src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
        />
      </div>
      <div className="bottom">
        <p className="temperature">{Math.round(data.main.temp)}°C</p>
        <div className="details">
          <div className="param-row border">
            <span className="param-label top">Details</span>
          </div>
          <div className="param-row">
            <span className="param-label">Feels Like</span>
            <span className="param-value">
              {Math.round(data.main.feels_like)}°C
            </span>
          </div>
          <div className="param-row">
            <span className="param-label">High</span>
            <span className="param-value">
              {Math.round(data.main.temp_max)}°C
            </span>
          </div>
          <div className="param-row">
            <span className="param-label">Wind Speed</span>
            <span className="param-value">{data.wind.speed}m/s</span>
          </div>
          <div className="param-row">
            <span className="param-label">Humidity</span>
            <span className="param-value">{data.main.humidity}%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
