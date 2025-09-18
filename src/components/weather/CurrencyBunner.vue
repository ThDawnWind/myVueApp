<template>
  <div class="banner">
    <h1>Курсы валют</h1>
    <div class="currency-list">
      <div class="curr-choice">
        <!-- Из валюты -->
        <label for="fromCurrency">Из валюты:</label>
        <select id="fromCurrency" v-model="from" @change="fetchRate">
          <option
            v-for="(name, code) in currencies"
            :key="'from-' + code"
            :value="code"
          >
            {{ code }} - {{ name }}
          </option>
        </select>

        <label for="toCurrency">В валюту:</label>
        <select id="toCurrency" v-model="to" @change="fetchRate">
          <option
            v-for="(name, code) in currencies"
            :key="'to-' + code"
            :value="code"
          >
            {{ code }} - {{ name }}
          </option>
        </select>
      </div>
    </div>

    <div class="curr-info">
      <div v-if="rate && !loading" class="rate-display">
        <div class="rate-value">
          <span class="rate-arrow">→</span>
          <span class="from-currency">1 {{ from }}</span>
          <span class="equals">=</span>
          <span class="to-currency">{{ rate }} {{ to }}</span>
        </div>
        <div class="rate-date">
          <span class="update-icon">🕒</span>
          Обновлено: {{ updated }}
        </div>
      </div>

      <div v-if="loading" class="loading-state">
        <div class="spinner"></div>
        <span>Загрузка курса...</span>
      </div>

      <div v-if="error" class="error-state">
        <span class="error-icon">⚠️</span>
        <span class="error-message">{{ error }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, watch } from 'vue';
import { storeToRefs } from 'pinia';
import { useCurrencyStore } from '../../stores/currency';

    const currencyStore = useCurrencyStore()
    const { currencies, from, to, rate, updated, loading, error } = storeToRefs(currencyStore)

    onMounted(() => {
      currencyStore.fetchCurrencies()
    })

    const fetchRate = () => {
      if (from.value && to.value) {
        currencyStore.fetchRate(from.value, to.value)
      }
    }

    watch([from, to], fetchRate, { immediate: true })
</script>
<style scoped>
.banner {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background: linear-gradient(135deg, #4f8cff, #6cc1ff);
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

h1 {
  color: #fff;
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 15px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  text-align: center;
}

.currency-list {
  width: 100%;
  display: flex;
  justify-content: center;
}

.curr-choice {
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  max-width: 220px;
  background: rgba(255, 255, 255, 0.15);
  padding: 15px;
  border-radius: 10px;
  backdrop-filter: blur(8px);
}

label {
  color: #fff;
  font-weight: 500;
  font-size: 13px;
  margin-bottom: 4px;
}


select {
  width: 100%;
  padding: 6px 10px;
  border: none;
  border-radius: 6px;
  outline: none;
  font-size: 13px;
  background: #fff url("data:image/svg+xml;utf8,<svg fill='black' height='16' viewBox='0 0 24 24' width='16' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/></svg>") no-repeat right 10px center;
  background-size: 16px;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  color: #333;
  cursor: pointer;
}

select option {
  padding: 10px;
  font-size: 13px;
  background: #fff;
  color: #333;
}

select option:hover {
  background: #e6f0ff;
}

select:hover {
  background: #f1f1f1;
}

select:focus {
  box-shadow: 0 0 0 2px rgba(79, 140, 255, 0.6);
}

.curr-info {
  margin-top: 2rem;
  padding: 1.5rem;
  background: linear-gradient(135deg, #0818f7, #4245f0);
  border-radius: 16px;
  color: white;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.rate-display {
  text-align: center;
  animation: fadeIn 0.5s ease-in;
}

.rate-value {
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.rate-arrow {
  font-size: 2rem;
  animation: pulse 2s infinite;
}

.from-currency {
  color: #ffd700;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.equals {
  font-size: 1.5rem;
  opacity: 0.8;
}

.to-currency {
  color: #90ee90;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.rate-date {
  font-size: 0.9rem;
  opacity: 0.9;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

.update-icon {
  font-size: 1.1rem;
}

.loading-state {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  animation: pulse 1.5s infinite;
}

.spinner {
  width: 24px;
  height: 24px;
  border: 3px solid rgba(255, 255, 255, 0.3);
  border-top: 3px solid white;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

.error-state {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  padding: 1rem;
  background: rgba(255, 0, 0, 0.1);
  border: 1px solid rgba(255, 0, 0, 0.3);
  border-radius: 12px;
  animation: shake 0.5s ease-in;
}

.error-icon {
  font-size: 1.2rem;
}

.error-message {
  font-weight: 500;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.7; }
}

@keyframes shake {
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-5px); }
  75% { transform: translateX(5px); }
}

@media (max-width: 768px) {
  .rate-value {
    font-size: 1.4rem;
    flex-direction: column;
    gap: 0.3rem;
  }

  .curr-info {
    margin-top: 1.5rem;
    padding: 1rem;
  }
}

@media (max-width: 480px) {
  .rate-value {
    font-size: 1.2rem;
  }

  .rate-date {
    font-size: 0.8rem;
  }
}
</style>
