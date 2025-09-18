<template>
  <div class="trash-container trash-zone"
      @dragover.prevent
      @dragenter="isDragOver = true"
      @dragleave="isDragOver = false"
      @drop="onDropToTrash"
      v-if="trash.length"
     :class="{'drag-over' : isDragOver}">

    <div class="trash-clear">
       <h2>Корзина</h2>
        <base-btn @click="clearTrash()">Очистить корзину</base-btn>
    </div>

    <ul v-if="trash.length">
      <li v-for="(item, index) in trash" :key="item.id">
        <span>{{ item.title }}</span>
        <div class="actions">
          <base-btn variant="save" @click="restore(item.id)">Восстановить</base-btn>
          <base-btn variant="danger" @click="remove(item.id)">Удалить</base-btn>
        </div>
      </li>
    </ul>

     <div v-if="dropHere" class="empty-zone">
      🗑️ Перетащи задачу сюда
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { storeToRefs } from 'pinia';
import { useTodoStore } from '../../stores/todo'
import BaseBtn from '../../components/ui/BaseBtn.vue'

    const todoStore = useTodoStore()
    const {dropHere, trash} = storeToRefs(todoStore)
    const isDragOver = ref(false)

    const restore = (id: string) => {
      todoStore.restoreTodo(id)
    }

    const remove = (id: string) => {
      todoStore.removeFromTrash(id)
    }

    const clearTrash = () => {
      todoStore.clearTrash()
    }

     const onDropToTrash = (e: DragEvent) => {
      e.preventDefault()
      isDragOver.value = false
      todoStore.setDropHere(false)
      if (e.dataTransfer) {
        const id = e.dataTransfer.getData('todoId')

        if (id) {
          todoStore.removeTodo(id)
        }
      }
    }
</script>

<style scoped>
.trash-container {
  width: 600px;
  height: 600px;
  margin: 40px auto;
  padding: 30px;
  background: #ffffff;
  border-radius: 20px;

  box-shadow:
    0 4px 10px rgba(78, 66, 185, 0.1),
    0 8px 20px rgba(78, 66, 185, 0.15),
    0 12px 40px rgba(78, 66, 185, 0.2);

  transition: transform 0.25s ease, box-shadow 0.3s ease;
}

.trash-container:hover {
  transform: translateY(-4px);
  box-shadow:
    0 6px 12px rgb(255, 255, 255),
    0 12px 24px rgb(255, 255, 255),
    0 20px 50px rgba(155, 145, 238, 0.25);
}

.trash-clear {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
}

.trash-container h2 {
  color: #e53935;
  margin-bottom: 15px;
}

.trash-container ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.trash-container span {
  font-size: 16px;
  font-weight: 600;
  color: #000000;
  max-width: 230px;
  word-break: break-word;
  border-radius: 8px;
  padding: 8px 12px;
  background: #ffffff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
}


.trash-container li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
  padding: 6px 10px;
  border-radius: 6px;
}

.trash-container .actions button {
  margin-left: 5px;
}


.trash-zone.drag-over {
  background: #ffe6e6;
  transition: 900ms;
  border-color: #cc0000;
}
.empty-zone {
  text-align: center;
  padding: 20px;
  color: #999;
  font-style: italic;
}
</style>
