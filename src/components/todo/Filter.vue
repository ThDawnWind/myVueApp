<template>
  <div class="filters">
    <base-btn
      v-for="f in filters"
      :key="f.value"
      :class="{ active: todoStore.filter === f.value }"
      @click="setFilter(f.value)"
    >
      {{ f.label }}
    </base-btn>
    <base-btn :variant="'danger'" @click="clearCompleted" v-if="hasCompleted">Удалить выполненные</base-btn>
  </div>
</template>

<script setup lang="ts">
import { useTodoStore } from '../../stores/todo'
import BaseBtn from '../../components/ui/BaseBtn.vue'
import type { Filter, Filters } from '../../types/todo'
import { storeToRefs } from 'pinia'

const todoStore = useTodoStore()
const {hasCompleted } = storeToRefs(todoStore)

const filters: Filters[] = [
  { value: 'all', label: 'Все' },
  { value: 'active', label: 'Активные' },
  { value: 'completed', label: 'Завершённые' }
]

const setFilter = (filter: Filter) => {
  todoStore.setFilter(filter)
}

const clearCompleted = () => {
  todoStore.clearCompleted()
}
</script>

<style scoped>
.filters {
  display: flex;
  gap: 10px;
  align-items: center;
}

.active {
  background: #007bff;
  color: white;
}
</style>
