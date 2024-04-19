import { key } from "./key";
import { pubsub } from "./pubsub";

export async function fetchWeatherAPI(cityName) {
  if (!cityName) {
    const cityNameElement = document.querySelector(".city-name");
    cityName = cityNameElement.textContent;
    console.log(cityName);
  }

  try {
    const response = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=${key}&q=${cityName}`,
      {
        mode: "cors",
      },
    );
    const rawObj = await response.json();
    const weatherObj = {
      cityName: rawObj.location.name,
      localTime: rawObj.location.localtime,
      tempC: rawObj.current.temp_c,
      tempF: rawObj.current.temp_f,
      condition: rawObj.current.condition,
    };

    pubsub.publish("getAPIData", weatherObj);
  } catch (error) {
    pubsub.publish("handleError", error);
  }
}
