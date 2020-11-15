import axios from 'axios';
import {
  API_FORECAST_KEY,
  API_FORECAST_URL,
  API_SEARCH_CITY_KEY,
  API_SEARCH_CITY_URL,
} from '../config';

export function searchCity(q) {
  return new Promise((resolve, reject) => axios.get(`${API_SEARCH_CITY_URL}find?q=${q}&appid=${API_SEARCH_CITY_KEY}&units=metric`)
    .then((response) => resolve(response.data.list))
    .catch((err) => reject(err)));
}

const transformData = (data) => ({
  name: data.city.name,
  tempList: data.list.map((item) => {
    const [m, d] = new Date(item.dt * 1000).toLocaleDateString('en-US').split('/');
    return {
      date: `${d}.${m}`,
      temp: Math.round(item.main.temp),
    };
  }),
});

export function getForecastByCityId(q) {
  return new Promise((resolve, reject) => axios.get(`${API_FORECAST_URL}forecast?id=${q}&appid=${API_FORECAST_KEY}&units=metric&cnt=10`)
    .then((response) => resolve(transformData(response.data)))
    .catch((err) => reject(err)));
}
