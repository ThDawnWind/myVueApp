<template>
  <div class="container">
    <TodoList />
    <Trash :trash="trash"/>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useTodoStore } from '../stores/todo'
import TodoList from '../components/todo/ToDoList.vue'
import Trash from '../components/todo/Trash.vue';

const todoStore = useTodoStore()
const { trash } = storeToRefs(todoStore)

</script>

<style scoped>
.container {
  display: flex;
  justify-content: space-between;
}
</style>
