import {
  HIDE_ALERT, HIDE_LOADER, REQUEST_FORECAST_BY_CITY, SEARCH_CITY, SHOW_ALERT, SHOW_LOADER,
} from '../constants';
import * as Api from '../api';

export function showLoader() {
  return {
    type: SHOW_LOADER,
  };
}

export function hideLoader() {
  return {
    type: HIDE_LOADER,
  };
}

export function hideAlert() {
  return {
    type: HIDE_ALERT,
  };
}

export function showAlert(text) {
  return (dispatch) => {
    dispatch({
      type: SHOW_ALERT,
      payload: text,
    });

    setTimeout(() => {
      dispatch(hideAlert());
    }, 3000);
  };
}

function fetchAction(q, type, api) {
  return async (dispatch) => {
    try {
      dispatch(showLoader());
      const response = await api(q);

      if (response.length || response.tempList.length) {
        dispatch({ type, payload: response });
      } else {
        dispatch(showAlert('Not Found!'));
      }

      dispatch(hideLoader());
    } catch (e) {
      dispatch(showAlert('Server Error!'));
      dispatch(hideLoader());
    }
  };
}

export function searchCity(q) {
  return fetchAction(q, SEARCH_CITY, Api.searchCity);
}

export function getForecastByCityId(id) {
  return fetchAction(id, REQUEST_FORECAST_BY_CITY, Api.getForecastByCityId);
}
