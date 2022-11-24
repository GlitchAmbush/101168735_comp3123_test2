import "./current-weather.css";

const CurrentWeather = () => {
  return (
    <div className="weather">
      <div className="top">
        <div>
          <p className="city">Toronto</p>
          <p className="weather-desc">Sunny</p>
        </div>
        <img
          alt="weather"
          className="weather-icon"
          src=" http://openweathermap.org/img/wn/01d@2x.png"
        />
      </div>
      <div className="bottom">
        <p className="temperature">18°C</p>
        <div className="details">
          <div className="param-row border">
            <span className="param-label top">Details</span>
          </div>
          <div className="param-row">
            <span className="param-label">Feels Like</span>
            <span className="param-value">22°C</span>
          </div>
          <div className="param-row">
            <span className="param-label">Wind Speed</span>
            <span className="param-value">2km/h</span>
          </div>
          <div className="param-row">
            <span className="param-label">Percipitation</span>
            <span className="param-value">8%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
