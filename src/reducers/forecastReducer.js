import {
  SEARCH_CITY,
  REQUEST_FORECAST_BY_CITY,
} from '../constants';

const initialState = {
  findCities: [],
  forecastByCity: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_CITY:
      return { ...state, findCities: action.payload };
    case REQUEST_FORECAST_BY_CITY:
      return { ...state, forecastByCity: action.payload, findCities: [] };
    default:
      return state;
  }
};
