import axios from 'axios';
import {
  API_FORECAST_KEY,
  API_FORECAST_URL,
  API_SEARCH_CITY_KEY,
  API_SEARCH_CITY_URL,
} from '../config';

export const searchCity = async (q) => {
  const response = await axios.get(`${API_SEARCH_CITY_URL}find?q=${q}&appid=${API_SEARCH_CITY_KEY}&units=metric`);
  return response.data.list;
};

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

export const getForecastByCityId = async (q) => {
  const response = await axios.get(`${API_FORECAST_URL}forecast?id=${q}&appid=${API_FORECAST_KEY}&units=metric&cnt=10`);
  return transformData(response.data);
};
