import {
    SEARCH_CITY,
    SELECT_CITY,
    REQUEST_FORECAST_BY_CITY
} from "../constants";

const initialState = {
    findCities: [],
    forecastByCity: null
}

export const forecastReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEARCH_CITY:
            return { ...state, findCities: action.payload }
        case SELECT_CITY:
            return { ...state, city: action.payload }
        case REQUEST_FORECAST_BY_CITY:
            return { ...state, forecastByCity: action.payload, findCities: []}
        default:
            return state
    }
}