<template>
  <header class="header">
    <div class="header-title">
      <h1>Current Weather</h1>
    </div>

    <div class="city-selector">
      <div class="header-icon">
          <img src="../../assets/search.svg" alt="search" class="search-img" />
      </div>
      <input
        v-model="query"
        @input="searchCity"
        class="header-input"
        type="text"
        @keydown.down.prevent="moveDown"
        @keydown.up.prevent="moveUp"
        @keydown.enter.prevent="chooseSelected"
        placeholder="Введите город..."
      />
      <ul v-if="results.length" class="suggestions">
        <li
          v-for="(city, id) in results"
          :key="city.lat + city.lon"
          :class="{active: id === selectedIndex}"
          @click="selectCity(city)"
        >
          {{ city.name }}, {{ city.country }}
        </li>
      </ul>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useCityStore } from "../../stores/city";
import { searchCitiesByName } from "../../services/weatherService";

    const cityStore = useCityStore()
    const query = ref<string>('')
    const results = ref<any[]>([])
    const selectedIndex = ref<number>(-1)

    async function searchCity() {
      if (query.value.length < 2) {
        results.value = []
        selectedIndex.value = -1
        return
      }
      results.value = await searchCitiesByName(query.value)
      selectedIndex.value = -1
    }

    function selectCity(city: any) {
      cityStore.setCity(city)
      query.value = city.name
      query.value = ''
      results.value = []
      selectedIndex.value = -1
    }

    function moveUp() {
      if (selectedIndex.value > 0) {
        selectedIndex.value--
      }
    }

    function moveDown() {
      if (selectedIndex.value < results.value.length - 1) {
        selectedIndex.value++
      }
    }

   function chooseSelected() {
    if (selectedIndex.value >= 0) {
      selectCity(results.value[selectedIndex.value])
    }
   }
</script>


<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(135deg, #3473e9, #6295ee);
  padding: 15px 20px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

.header-title h1 {
  margin: 0;
  font-size: 20px;
  font-weight: 600;
  color: #fff;
  letter-spacing: 0.5px;
}

.city-selector {
  position: relative;
  display: flex;
  align-items: center;
}

.header-icon {
  font-size: 22px;
  margin-right: 8px;
  margin-left: 5px;
}

.header-input {
  padding: 8px 12px;
  font-size: 16px;
  border: none;
  outline: none;
  border-radius: 6px;
  background: #fff;
  width: 200px;
  transition: all 0.2s ease;
  box-shadow: inset 0 1px 2px rgba(0,0,0,0.1);
}

.header-input:focus {
  width: 240px;
  box-shadow: 0 0 0 2px rgba(74, 144, 226, 0.4);
}

.suggestions {
  position: absolute;
  top: 110%;
  left: 30px;
  right: 0;
  background: linear-gradient(135deg, #3473e9, #6295ee);
  color: #ffffff;
  border-radius: 8px;
  border: 1px solid #ddd;
  list-style: none;
  margin: 8px 0 0 0;
  padding: 0;
  max-height: 180px;
  overflow-y: auto;
  box-shadow: 0 6px 12px rgba(0,0,0,0.1);
  animation: fadeIn 0.2s ease;
  z-index: 10;
}

.suggestions li {
  padding: 10px 12px;
  cursor: pointer;
  font-size: 15px;
  transition: background 0.2s;
}

.suggestions li.active {
  background: #4ea1f3;
  color: white;
}

.suggestions li:hover {
  background: #f3f6fb;
  color: #000000;
}

.search-img {
  width: 24px;
  height: 24px;

}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-4px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
