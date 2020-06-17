const baseURL = 'https://api.openweathermap.org/data/2.5/';


export const ENDPOINTS = {
  GET_BY_CITY_NAME: baseURL + 'weather?q=',
  GET_BY_CITY_FORECAST: baseURL + 'forecast?q=',
  GET_Weather_Daily: baseURL + 'onecall?',
  GET_BY_PRAYER_CITY_NAME : 'https://api.aladhan.com/v1/timingsByCity?city='
};
