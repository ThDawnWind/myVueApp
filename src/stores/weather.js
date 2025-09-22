import { defineStore } from "pinia";
import { getCurrentWeather, getForecast } from "../services/weatherService";
import { notify } from "../utils/useNotify";
export const useWeatherStore = defineStore("weather", {
    state: () => ({
        current: null,
        forecast: [],
        loading: true
    }),
    actions: {
        async loadWeather(lat, lon) {
            this.current = await getCurrentWeather(lat, lon);
            this.loading = false;
            notify('success', 'Данные погоды загружены');
        },
        async loadForecast(lat, lon) {
            this.forecast = await getForecast(lat, lon);
        }
    }
});
