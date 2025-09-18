<template>
  <div class="forecast-container">
    <h2>Погода сейчас</h2>

    <div class="forecast-cards">
      <div v-if="props.loading" v-for="n in 5" :key="n" class="forecast-card">
        <ContentLoader
          :speed="2"
          :width="200"
          :height="260"
          :backgroundColor="'#ffffff'"
          :foregroundColor="'#f5f5f5'"
          class="weather-skeleton"
        >
          <rect x="40" y="10" rx="6" ry="6" width="120" height="14" />
          <circle cx="100" cy="70" r="30" />
          <rect x="40" y="110" rx="6" ry="6" width="120" height="14" />
          <rect x="40" y="140" rx="6" ry="6" width="120" height="14" />
          <rect x="40" y="170" rx="6" ry="6" width="120" height="14" />
          <rect x="40" y="200" rx="6" ry="6" width="120" height="14" />
          <rect x="40" y="230" rx="6" ry="6" width="120" height="14" />
        </ContentLoader>
      </div>

      <div v-else v-for="day in props.forecast" :key="day.dt" class="forecast-card">
        <p class="forecast-date">{{ formatDateWeather(day.dt_txt) }}</p>
        <div class="forecast-icon">
          <img class="icon" :src="`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`" :alt="day.weather[0].description"/>
        </div>
        <p class="forecast-temp">Темп.: {{ Math.round(day.main.temp) }}°C</p>
        <p class="forecast-feels">Ощущ.: {{ Math.round(day.main.feels_like) }}°C</p>
        <p class="forecast-desc">{{ day.weather[0].description }}</p>
        <p class="forecast-humidity">Влажность: {{ day.main.humidity }}%</p>
        <p class="forecast-pressure">Давление: {{ day.main.pressure }} мм рт.ст.</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ContentLoader } from 'vue-content-loader';
import { formatDateWeather } from '../../utils/formatDate';

  const props = defineProps<{
    forecast: any[],
    loading: boolean
  }>()

</script>

<style scoped>
.forecast-container {
  margin-top: 30px;
  width: 1517px;
}

.forecast-container h2 {
  font-size: 22px;
  text-align: center;
  margin-bottom: 20px;
  color: #ffffff;
}

.forecast-cards {
  display: flex;
  justify-content: space-between;
  gap: 15px;
  flex-wrap: wrap;
}

.forecast-card {
  background: linear-gradient(135deg, #0818f7, #4245f0);
  color: #ffffff;
  border-radius: 12px;
  padding: 11px;
  width: 200px;
  font-size: 8px;
  min-height: 260px;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
}

.forecast-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 0 15px rgb(255, 255, 255);
}

.forecast-card:hover .icon {
  transform: rotate(15deg);
  transition: transform 0.3s ease;
}

.forecast-date {
  font-weight: 600;
  margin-bottom: 10px;
}

.forecast-icon img {
  width: 60px;
  height: 60px;
}

.forecast-temp,
.forecast-feels,
.forecast-desc,
.forecast-humidity,
.forecast-pressure {
  margin: 4px 0;
  font-size: 14px;
}

.weather-skeleton {
  padding: 0;
  margin: 0;
}

.weather-skeleton svg {
  width: 100% !important;
  height: auto !important;
}
</style>
