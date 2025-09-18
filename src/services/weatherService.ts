import axios from "axios";
import { notify } from "../utils/useNotify";

const API_KEY = "f4487a2f4562ceeec4ffb7803853cc72";
const BASE_URL = "https://api.openweathermap.org/data/2.5";
const GEO_URL = "https://api.openweathermap.org/geo/1.0";

export const getCurrentWeather = async (lat: number, lon: number) => {
  try {
    const res = await axios.get(`${BASE_URL}/weather`, {
      params: {
        lat,
        lon,
        appid: API_KEY,
        units: "metric",
        lang: "ru",
      },
    });
    return res.data;
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        notify('error',`Ошибка ${error.response.status}: ${error.response.data.message || "Не удалось получить погоду"}`);
      } else if (error.request) {
        notify("error", "Сервер не отвечает, попробуйте позже");
      } else {
        notify("error","Ошибка запроса: " + error.message);
      }
    } else {
      notify('error',"Неизвестная ошибка");
    }
    return null;
  }
};

export const getForecast = async (lat: number, lon: number) => {
  try {
    const res = await axios.get(`${BASE_URL}/forecast`, {
      params: {
        lat,
        lon,
        appid: API_KEY,
        units: "metric",
        lang: "ru",
      },
    });
    return res.data.list;
  } catch (error: any) {
    notify("error", "Ошибка загрузки прогноза");
    return [];
  }
};

export const searchCitiesByName = async (city: string) => {
  try {
    const res = await axios.get(`${GEO_URL}/direct`, {
      params: {
        q: city,
        limit: 5,
        appid: API_KEY,
        lang: "ru",
      },
    });
    return res.data;
  } catch (error: any) {
    notify("error", "Ошибка поиска города");
    return [];
  }
};
