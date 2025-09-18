<template>
  <teleport to="body">
    <div v-if="show" class="modal-backdrop" @click.self="close">
      <div class="modal">
        <h1>{{ title }}</h1>
        <p>{{ message }}</p>
        <div class="actions">
          <base-btn @click="confirm">Да</base-btn>
          <base-btn variant="danger" @click="close">Отмена</base-btn>
        </div>
      </div>
    </div>
  </teleport>
</template>

<script setup lang="ts">
    import BaseBtn from '../ui/BaseBtn.vue'

    defineProps<{
      show: boolean
      title?: string
      message?: string
    }>()

    const emit = defineEmits<{
      (e: 'close'): void
      (e: 'confirm'): void
    }>()

    const close = () => emit('close')
    const confirm = () => emit('confirm')
</script>

<style scoped>
.modal-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}

.modal {
  background: white;
  padding: 20px;
  border-radius: 8px;
  min-width: 500px;
  max-width: 90%;
}

.modal h1 {
  color: red;
}

.modal p {
   font-style: italic;
  font-size: 18px;
  line-height: 1.6;
  color: #444;
  margin: 10px 0 15px;
  text-align: center;
  background: #f9f9f9;
  padding: 10px 15px;
  border-left: 4px solid #4e42b9;
  border-radius: 6px;
  transition: all 0.3s ease;
}

.actions {
  margin-top: 15px;
  display: flex;
  justify-content: flex-end;
  gap: 10px;
}
</style>
