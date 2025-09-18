<template>
  <div class="details">
    <div v-if="loading" class="skeleton-cont" v-for="n in 4" :key="n">
      <ContentLoader
        :speed="2"
        :width="160"
        :height="140"
        :backgroundColor="'#ffffff'"
        :foregroundColor="'#f5f5f5'"
        class="weather-skeleton"
      >
        <circle cx="80" cy="25" r="25" />
        <rect x="20" y="70" rx="6" ry="6" width="120" height="14" />
        <rect x="20" y="100" rx="6" ry="6" width="120" height="14" />
      </ContentLoader>
    </div>

    <div v-else class="temp" v-for="item in details" :key="item.title">
      <div class="icon-bg">
        <component :is="item.icon" class="icon" />
      </div>
      <h3 class="title">{{ item.title }}</h3>
      <h3 class="temp-descr">{{ item.value }}</h3>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { ContentLoader } from 'vue-content-loader'
import TempIcon from '../../assets/temp.svg'
import PressureIcon from '../../assets/pressure.svg'
import RainIcon from '../../assets/rain.svg'
import WindIcon from '../../assets/wind.svg'

 const props = defineProps<{
  maxTemp: number
  pressure: number
  humidity: number
  wind: number
  loading: boolean
}>()

const details = computed(() => [
  { title: 'Максимальная температура', value: `${props.maxTemp}°C`, icon: TempIcon },
  { title: 'Давление', value: `${props.pressure} мм ртутного столба`, icon: PressureIcon },
  { title: 'Влажность', value: `${props.humidity}%`, icon: RainIcon },
  { title: 'Ветер', value: `${props.wind} м/с`, icon: WindIcon }
])

</script>

<style scoped>
.details {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 824px;
  padding: 5px;
  gap: 20px;
  margin-top: 20px;
  color: #ffffff;
}

.temp {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
  border-radius: 12px;
  width: 160px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  flex-shrink: 0;
}

.skeleton-item {
  flex-shrink: 0;
}

.temp:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgb(255, 255, 255);
}

.icon-bg {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
  background-color: #ffffff;
}

.icon {
  width: 24px;
  height: 24px;
  fill: #4ea1f3;
}

.title {
  font-size: 14px;
  color: #ffffff;
  font-weight: 500;
  font-size: 15px;
  text-align: center;
  margin-bottom: 30px;
}

.temp-descr {
  font-size: 14px;
  font-weight: 600;
  color: #ffffff;
  text-align: center;
}

.weather-skeleton {
  padding: 0;
  margin: 0;
  width: 100%;
}

.weather-skeleton svg {
  width: 100% !important;
  height: auto !important;
}

.skeleton-cont {
  width: 1200px;
}
</style>
