import "./style.css";
import "./UI";
import "./pubsub";
import { fetchWeatherAPI } from "./fetchApiData";
import { getCityName } from "./UI";
import "./processAPIData";

fetchWeatherAPI("Sapporo");

window.addEventListener("DOMContentLoaded", () => {
  setInterval(getCityName, 60000);
});
