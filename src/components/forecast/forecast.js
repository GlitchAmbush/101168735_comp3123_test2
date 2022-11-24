import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "./forecast.css";

const WEEK_DAYS = [
  "MONDAY",
  "TUESDAY",
  "WEDNESDAY",
  "THURSDAY",
  "FRIDAY",
  "SATURDAY",
  "SUNDAY",
];

const Forecast = ({ data }) => {
  const currentDay = new Date().getDay();
  const forecastDay = WEEK_DAYS.slice(currentDay, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, currentDay)
  );

  return (
    <div className="container">
      <label className="title">7-Day Forecast</label>
      <Accordion allowZeroExpanded>
        {data.list.slice(0, 7).map((item, index) => (
          <AccordionItem key={index}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className="daily-item">
                  <img
                    alt="weather"
                    className="icon-small"
                    src={`http://openweathermap.org/img/wn/${item.weather[0].icon}.png`}
                  />
                  <label className="day">{forecastDay[index]}</label>
                  <label className="desc">{item.weather[0].description}</label>
                  <label className="min-max">
                    {Math.round(item.main.temp_min)} /{" "}
                    {Math.round(item.main.temp_max)}°C
                  </label>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div className="panel-grid">
                <div className="panel-grid-item">
                  <label>High</label>
                  <label>{item.main.temp_max}°C</label>
                </div>
                <div className="panel-grid-item">
                  <label>Low</label>
                  <label>{item.main.temp_min}°C</label>
                </div>
                <div className="panel-grid-item">
                  <label>Feels like</label>
                  <label>{item.main.feels_like}°C</label>
                </div>
                <div className="panel-grid-item">
                  <label>Humidity</label>
                  <label>{item.main.humidity}%</label>
                </div>
                <div className="panel-grid-item">
                  <label>Wind Speed</label>
                  <label>{item.wind.speed}m/s</label>
                </div>
                <div className="panel-grid-item">
                  <label>Pressure</label>
                  <label>{item.main.pressure}hPa</label>
                </div>
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default Forecast;
