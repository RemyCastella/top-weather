import { format } from "date-fns";
import { pubsub } from "./pubsub";
import { fetchWeatherAPI } from "./fetchApiData";

export const elements = (function () {
  const input = document.querySelector("#city-input");
  const searchBtn = document.querySelector("button.search");
  const container = document.querySelector(".city-data");
  const american = false;
  return { input, searchBtn, container, american };
})();

function createElements(obj) {
  const cityName = obj.cityName;
  const localTime = format(obj.localTime, "E, MMMM d, HH:mm");
  const description = obj.condition.text;
  const iconURL = obj.condition.icon.replace(
    "//cdn.weatherapi.com/weather/64x64/",
    "",
  );
  const temp = elements.american ? `${obj.tempF}&degF` : `${obj.tempC}&degC`;

  const fragment = new DocumentFragment();

  const timeElement = document.createElement("div");
  timeElement.classList.add("city-time");
  timeElement.textContent = `${localTime} (Last Updated)`;

  const nameElement = document.createElement("div");
  nameElement.classList.add("city-name");
  nameElement.textContent = cityName;

  const tempElement = document.createElement("div");
  tempElement.classList.add("city-temperature");
  tempElement.innerHTML = temp;

  const conditionsContainer = document.createElement("div");
  conditionsContainer.classList.add("city-condition");
  const conditionIcon = document.createElement("img");
  conditionIcon.classList.add("weather-icon");
  conditionIcon.src = `./icons/${iconURL}`;
  const conditionDescription = document.createElement("div");
  conditionDescription.classList.add("description");
  conditionDescription.textContent = description;
  conditionsContainer.appendChild(conditionIcon);
  conditionsContainer.appendChild(conditionDescription);

  const american = document.createElement("div");
  american.classList.add("american");
  const americanLabel = document.createElement("label");
  americanLabel.setAttribute("for", "american");
  americanLabel.textContent = "American?";

  const americanInput = document.createElement("input");
  americanInput.type = "checkbox";
  americanInput.checked = elements.american;
  americanInput.setAttribute("id", "american");
  americanInput.addEventListener("change", (e) => handleAmerican(e));
  american.appendChild(americanLabel);
  american.appendChild(americanInput);

  fragment.appendChild(timeElement);
  fragment.appendChild(nameElement);
  fragment.appendChild(tempElement);
  fragment.appendChild(conditionsContainer);
  fragment.appendChild(american);

  pubsub.publish("renderElements", fragment);
}
pubsub.subscribe("getAPIData", createElements);

function renderElements(fragment) {
  elements.container.innerHTML = "";
  elements.container.appendChild(fragment);
}
pubsub.subscribe("renderElements", renderElements);

elements.searchBtn.addEventListener("click", (e) => handleInput(e));

function handleInput(e) {
  e.preventDefault();
  let searchValue = elements.input.value;
  elements.container.innerHTML = "";
  fetchWeatherAPI(searchValue);
  searchValue = "";
}

function handleError(error) {
  const errorMessage = document.createElement("div");
  errorMessage.classList.add("error");
  errorMessage.textContent = `There was an error 😔

Please check if your city is spelled correctly!`;
  elements.container.appendChild(errorMessage);
}
pubsub.subscribe("handleError", handleError);

export function getCityName() {
  const cityNameElement = document.querySelector(".city-name");
  const cityNameText = cityNameElement.textContent;
  fetchWeatherAPI(cityNameText);
}

function handleAmerican(e) {
  const checked = e.target.checked;
  elements.american = checked;
  getCityName();
}
