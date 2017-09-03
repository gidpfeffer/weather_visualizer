import * as secrets from '../secrets'
import * as actionTypes from './action_types'
import axios from 'axios';

const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${secrets.API_KEY}`

export function fetchWeather(city){
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);

  return{
    type: actionTypes.FETCH_WEATHER,
    payload: request
  }
}
