<template>
  <button
    :class="['base-btn', variant]"
    @click="$emit('click')"
    :disabled="active"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">

defineProps<{
  variant?: 'save' | 'danger',
  active?: boolean
}>()
</script>

<style scoped>
.base-btn {
  height: 28px;
  min-width: 70px;
  margin: 2px;
  padding: 5px 5px;
  font-size: 11px;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  background-color: #4e42b9;
  color: #fff;
  transition: background 0.25s ease, transform 0.2s ease;
}

.base-btn:disabled {
  opacity: 0.6;
  transform: none;
}

.base-btn.save:disabled {
  background-color: #037a21;
  color: #fff;
}

.base-btn.danger:disabled {
  background-color: #ffebee;
  color: #e53935;
}

.base-btn.save {
  opacity: 0.7;
  background-color: #037a21;
  color: #ffffff;
}

.base-btn.save:hover {
  transition: 0.7s;
  opacity: 1;
}

.base-btn.danger {
  background-color: #ffebee;
  color: #e53935;
}
.base-btn.danger:hover {
  background-color: #ffcdd2;
}

</style>
