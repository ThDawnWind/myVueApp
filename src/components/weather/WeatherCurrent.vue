<template>
  <div class="current-weather">
    <h2>Погода сейчас</h2>

    <div v-if="loading">
      <ContentLoader
        :speed="2"
        :width="320"
        :height="125"
        primaryColor="#f0f0ff"
        secondaryColor="#e0e0ff"
        class="weather-skeleton"
      >
        <rect x="0" y="0" rx="8" ry="8" width="120" height="20" />
        <rect x="0" y="30" rx="6" ry="6" width="320" height="16" />
        <rect x="0" y="55" rx="6" ry="6" width="320" height="16" />
        <rect x="0" y="80" rx="6" ry="6" width="320" height="16" />
        <rect x="0" y="105" rx="6" ry="6" width="200" height="16" />
      </ContentLoader>
    </div>

    <div v-else-if="city && temp && descr && feelsLike">
      <p><strong>{{ city }}</strong></p>
      <p>Температура: {{ Math.round(temp) }}°C</p>
      <p>Ощущается как: {{ Math.round(feelsLike) }}°C</p>
      <p>Погодные условия: {{ descr }}</p>
    </div>

    <div v-else-if="!loading" class="no-data">
      <p>Данные о погоде недоступны</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ContentLoader } from 'vue-content-loader';

   defineProps<{
      city: string
      temp: number
      descr: string
      feelsLike: number
      loading: boolean
  }>()
</script>

<style scoped>
.current-weather {
  margin-top: 20px;
  padding: 25px 20px;
  border-radius: 16px;
  color: #ffffff;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  width: 360px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  font-family: 'Inter', sans-serif;
}

.current-weather:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 28px rgba(250, 250, 250, 0.966);
}

.current-weather h2 {
  font-size: 24px;
  margin-bottom: 18px;
  text-align: center;
  font-weight: 700;
  border-bottom: 1px solid rgba(255, 255, 255, 0.35);
  padding-bottom: 10px;
  letter-spacing: 0.5px;
}

.current-weather p {
  font-size: 16px;
  margin: 8px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 1.4;
}

.current-weather strong {
  font-size: 18px;
  font-weight: 600;
}

.current-weather .temp {
  font-size: 30px;
  font-weight: 700;
}

.current-weather .desc {
  font-style: italic;
  text-transform: capitalize;
  opacity: 0.9;
}

.current-weather p span {
  font-weight: 600;
}

/* Skeleton Styles */
.weather-skeleton {
  padding: 0;
  margin: 0;
}

.weather-skeleton svg {
  width: 100% !important;
  height: auto !important;
}

/* No data state */
.no-data {
  padding: 20px 0;
  text-align: center;
  color: rgba(255, 255, 255, 0.7);
  font-size: 16px;
}

.no-data p {
  margin: 0;
}
</style>
