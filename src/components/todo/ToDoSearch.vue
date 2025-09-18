<template>
  <div class="search-box">
    <input
      type="text"
      v-model="query"
      placeholder="Поиск по задачам..."
    />
    <button v-if="query" class="clear-btn" @click="clearSearch">&cross;</button>
    <span class="search-icon">🔍</span>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useTodoStore } from '../../stores/todo'


    const todoStore = useTodoStore()
    const query = ref(todoStore.search)

    watch(query, val => {
      todoStore.setSearch(val)
    })

    const clearSearch = () => {
      query.value = ''
    }
</script>

<style scoped>
.search-box {
  position: relative;
  margin-bottom: 20px;
}

.search-box input {
  width: 125px;
  padding: 10px 40px 10px 35px;
  border: 2px solid #4e42b9;
  border-radius: 8px;
  outline: none;
  font-size: 1rem;
  transition: all 0.25s;
}

.search-box input:hover {
  width: 220px;
}

.search-box input:focus {
  border-color: #4e42b9;
  box-shadow: 0 0 8px rgba(78, 66, 185, 0.3);
}

.search-icon {
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 1.1rem;
  color: #4e42b9;
}

.clear-btn {
  position: absolute;
  top: 50%;
  left: 200px;
  transform: translateY(-50%);
  border: none;
  background: #e53935;
  color: white;
  font-size: 0.9rem;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  cursor: pointer;
  padding: 0;
  line-height: 20px;
  text-align: center;
  transition: background 0.25s;
}

.clear-btn:hover {
  background: #b71c1c;
}
</style>
