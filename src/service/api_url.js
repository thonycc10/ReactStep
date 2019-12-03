const location = "Lima,pe";
const api_key = "8528aa9ca8113072c19255336296869f";
const url_base_weather = "http://api.openweathermap.org/data/2.5/weather";

export const api_weather = `${url_base_weather}?q=${location}&appid=${api_key}`;
