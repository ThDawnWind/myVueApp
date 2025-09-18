import { defineStore } from "pinia";
import { getCurrentWeather, getForecast } from "../services/weatherService";
import { notify } from "../utils/useNotify";

export const useWeatherStore = defineStore("weather", {
  state: () => ({
    current: null as any | null,
    forecast: [] as object[],
    loading: true as boolean
  }),
  actions: {
    async loadWeather(lat: number, lon: number) {
      this.current = await getCurrentWeather(lat, lon);
      this.loading = false
      notify('success', 'Данные погоды загружены')
    },
    async loadForecast(lat: number, lon: number) {
      this.forecast = await getForecast(lat, lon);
    }
  }
});
