import { defineStore } from "pinia";
import { ref } from "vue";
export const useCityStore = defineStore("city", () => {
    const saved = localStorage.getItem('city');
    const selectedCity = ref(saved ? JSON.parse(saved) : null);
    function setCity(city) {
        localStorage.setItem('city', JSON.stringify(city));
        selectedCity.value = city;
    }
    return { selectedCity, setCity };
});
