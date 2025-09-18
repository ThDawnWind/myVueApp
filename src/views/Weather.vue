<template>
  <div class="weather-page">
    <div class="conteiner">
      <weather-header />
      <div class="current-temp">
        <weather-current
          v-if="hasCurrent"
          :city="current.name"
          :temp="current.main.temp"
          :descr="current.weather[0].description"
          :feelsLike="current.main.feels_like"
          :loading="loading"
        />
        <weather-details
          v-if="hasCurrent"
          :loading="loading"
          :max-temp="current.main.temp_max"
          :pressure="current.main.pressure"
          :humidity="current.main.humidity"
          :wind="current.wind.speed"
        />
      </div>
      <weather-forecast :forecast="dailyForecast" :loading="loading" />
    </div>

    <div class="sidebar">
      <currency-bunner />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, watch } from 'vue';
import { storeToRefs } from 'pinia';
import WeatherHeader from '../components/weather/WeatherHeader.vue';
import WeatherCurrent from '../components/weather/WeatherCurrent.vue';
import WeatherDetails from '../components/weather/WeatherDetails.vue';
import WeatherForecast from '../components/weather/WeatherForecast.vue';
import CurrencyBunner from '../components/weather/CurrencyBunner.vue';
import { useCityStore } from '../stores/city';
import { useWeatherStore } from '../stores/weather';

    const cityStore = useCityStore();
    const weatherStore = useWeatherStore();
    const { current, forecast, loading } = storeToRefs(weatherStore);
    const { selectedCity } = storeToRefs(cityStore);

    const loadData = (lat: number, lon: number) => {
      weatherStore.loadWeather(lat, lon);
      weatherStore.loadForecast(lat, lon);
    };

    onMounted(async () => {
      const lat = selectedCity.value?.lat ?? 55.7558;
      const lon = selectedCity.value?.lon ?? 37.6176;
      loadData(lat, lon)
    });

    watch(selectedCity, (newCity) => {
      if (newCity) {
        weatherStore.loadWeather(newCity.lat, newCity.lon);
        weatherStore.loadForecast(newCity.lat, newCity.lon);
      }
    });

    const dailyForecast = computed(() => {
      if (!forecast.value) return [];
      return forecast.value.slice(0, 5);
    });

    const hasCurrent = computed(() => !!current.value);
</script>

<style scoped>
.weather-page {
  display: flex;
  gap: 20px;
  align-items: flex-start;
  justify-content: center;
  margin: 25px;
}

.conteiner {
  flex: 2;
  padding: 20px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
  background-color: #0818f7;
  border-radius: 15px;
  color: #fff;
  height: 730px;
}

.current-temp {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  width: 1490px;
}

.sidebar {
  flex: 1;
  max-width: 300px;
  padding: 20px;
  background: #0a1af7;
  border-radius: 15px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
  height: 600px;
}
</style>
