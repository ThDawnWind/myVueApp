import { defineStore } from "pinia";
import { ref } from "vue";

interface City {
  name: string;
  local_names?: Record<string, string>;
  lat: number;
  lon: number;
  country: string;
  state?: string;
}

export const useCityStore = defineStore("city", () =>  {
 const saved = localStorage.getItem('city')
 const selectedCity = ref<City | null>(saved ? JSON.parse(saved) : null)

  function setCity(city: City) {
     localStorage.setItem('city', JSON.stringify(city))
     selectedCity.value = city
  }

  return {selectedCity, setCity}
});
