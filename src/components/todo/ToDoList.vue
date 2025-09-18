<template>
  <div class="todo-container">
    <h1>To-Do List</h1>

    <div class="todo-input">
      <input type="text" v-model="newTodo" @keyup.enter="addNewTodo" placeholder="Add a new todo" />
      <base-btn :active="!newTodo.trim()"  @click="addNewTodo">Добавить</base-btn>
    </div>

    <ToDoSearch/>

    <Filter/>

    <ContentLoader
      v-if="loading"
      :width="550"
      :height="160"
      :speed="1.6"
      primaryColor="#f0f0ff"
      dangerColor="#e0e0ff"
    >
      <rect x="10" y="10" rx="10" ry="10" width="530" height="35" />
      <rect x="10" y="60" rx="10" ry="10" width="530" height="35" />
      <rect x="10" y="110" rx="10" ry="10" width="530" height="35" />
    </ContentLoader>

    <TransitionGroup v-else name="todo" tag="ul" class="todo-list">
     <li
        v-for="(todo, index) in filteredTodos"
        :key="todo.id"
        draggable="true"
        @dragstart="onDrugStart($event, todo.id)"
        @dragend="onDragEnd"
        class="todo-item"
      >
  <div v-if="editIndex === index" class="todo-edit">
    <div>
    <input
      v-model="editTodo"
      type="text"
      @keyup.enter="saveEdit(todo.id)"
      class="edit-input"
    />
    </div>

    <div>
      <base-btn variant="save" @click="saveEdit(todo.id)">Сохранить</base-btn>
      <base-btn variant="danger" @click="editIndex = null">Отмена</base-btn>
    </div>
  </div>

  <div v-else :class="'todo-title ' + (todo.completed ? 'done' : '')">
    {{ todo.title }}
  </div>

  <div class="btn-cont" v-if="editIndex !== index">
    <input
      type="checkbox"
      :checked="!!todo.completed"
      @change="toggleTodo(todo.id)"
    />
    <base-btn @click="startEdit(index, todo.title)">Редактировать</base-btn>
    <base-btn variant="danger" @click="askRemove(todo.id)">Удалить</base-btn>
  </div>
</li>
    </TransitionGroup>

    <Modal
      :show="showModal"
      title="Подтверждение"
      message="Вы уверены, что хотите удалить задачу?"
      @close="showModal = false"
      @confirm="removeConfirmed"
    />
  </div>
</template>

<script setup lang="ts">
  import {ref, onMounted} from 'vue'
  import { storeToRefs } from 'pinia'
  import { ContentLoader } from 'vue-content-loader'
  import { useTodoStore } from '../../stores/todo'
  import BaseBtn from '../ui/BaseBtn.vue'
  import Modal from '../ui/Modal.vue'
  import Filter from './Filter.vue'
  import ToDoSearch from '../todo/ToDoSearch.vue'

    const todoStore = useTodoStore()
    const {filteredTodos, loading } = storeToRefs(todoStore)
    const newTodo = ref<string>('')
    const editIndex = ref<number | null>(null)
    const editTodo = ref<string>('')
    const showModal = ref<boolean>(false)
    const todoToRemove = ref<string | null>(null)

    const onDrugStart = (e: DragEvent, id: string) => {
      if (e.dataTransfer) {
        e.dataTransfer.setData('todoId', id)
        todoStore.setDropHere(true)
      }
    }

    const onDragEnd = () => {
      todoStore.setDropHere(false)
    }

    const startEdit = (index: number, title: string) => {
      editIndex.value = index
      editTodo.value = title
    }

   const saveEdit = (id: string) => {
        if (editTodo.value.trim()) {
          todoStore.saveTodo(editTodo.value, id)
        }
        editIndex.value = null
        editTodo.value = ''
    }

    onMounted(() => {
      todoStore.loadTodos()
      todoStore.loadTrash()
    })

    const addNewTodo = () => {
      if (newTodo.value.trim()) {
        todoStore.addTodo(newTodo.value)
        newTodo.value = ''
      }
    }

    const toggleTodo = (id: string) => {
        todoStore.toggleTodo(id)
    }


    const askRemove = (id: string) => {
      todoToRemove.value = id
      showModal.value = true
    }

    const removeConfirmed = () => {
      if (todoToRemove.value) {
        todoStore.removeTodo(todoToRemove.value)
      }

      showModal.value = false
      todoToRemove.value = null
    }

</script>

<style scoped>

.todo-enter-active,
.todo-leave-active {
  transition: all 12s ease;
}
.todo-enter-from {
  opacity: 0.5;
}
.todo-leave-to {
  opacity: 0;
}

.todo-container {
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

  color: #ffffff;
  transition: transform 0.25s ease, box-shadow 0.3s ease;
}

.todo-container:hover {
  transform: translateY(-4px);
  box-shadow:
    0 6px 12px rgb(255, 255, 255),
    0 12px 24px rgb(255, 255, 255),
    0 20px 50px rgba(155, 145, 238, 0.25);
}

.todo-title {
  font-size: 16px;
  font-weight: 600;
  color: #4e42b9;
  max-width: 230px;
  word-break: break-word;
  border-radius: 8px;
  padding: 8px 12px;
  background: #f0f0ff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  cursor: pointer;
}

.todo-title:hover {
  background: #e0e0ff;
  color: #3e36b0;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
}

.todo-container:hover {
  transform: translateY(-2px);
}

h1 {
  text-align: center;
  color: #4e42b9;
  margin-bottom: 25px;
  font-size: 2.2rem;
  font-weight: 700;
}

.edit-cont {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.edit-cont input[type="text"] {
  flex: 1;
  height: 10px;
  font-size: 1rem;
  width: 75px;
  padding: 10px 15px;
  border: 2px solid #4e42b9;
  border-radius: 8px;
  outline: none;
  transition: all 0.25s;
}

.todo-input {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
  gap: 10px;
}

.todo-input input[type="text"] {
  flex: 1;
  height: 15px;
  font-size: 1rem;
  padding: 10px 15px;
  border: 2px solid #4e42b9;
  border-radius: 8px;
  outline: none;
  transition: all 0.25s;
}

.todo-input input[type="text"]:focus {
  border-color: #4e42b9;
  box-shadow: 0 0 6px rgba(78, 66, 185, 0.3);
}

.todo-list {
  list-style: none;
  padding: 0;
  margin-top: 8px;
  overflow-y: auto;
  overflow-x: hidden;
  max-height: 300px;
}

.todo-list li {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 18px;
  border-radius: 10px;
  margin-bottom: 12px;
  background: #fff;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.06);
  transition: background 0.25s ease, transform 0.2s ease;
}

.todo-list li:hover {
  background: #f7f7ff;
  transform: translateX(4px);
}

.todo-list li.completed .todo-title {
  text-decoration: line-through;
  color: #f12828;
}


.todo-list li span {
  flex: 1;
  margin-right: 12px;
  font-size: 1.05rem;
  cursor: pointer;
  user-select: none;
}

.todo-list li input[type="checkbox"] {
  width: 20px;
  height: 27px;
  margin-right: 12px;
  color: #4e42b9;
  accent-color: #4e42b9;
  cursor: pointer;
}

.btn-cont {
  display: flex;
  align-items: center;
  gap: 10px;
  }

.btn-cont span {
  font-size: 5px;
  color: #4e42b9;
  margin-left: 10px;
}

.done {
  text-decoration: line-through;
  color: #f12828;
}

.todo-edit {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
  width: 100%;
}

.edit-input {
  flex: 1;
  padding: 8px 12px;
  font-size: 16px;
  height:27px;
  border: 2px solid #000000;
  border-radius: 8px;
  outline: none;
  transition: border-color 0.3s, box-shadow 0.3s;
}

.edit-input:focus {
  border-color: #4a90e2;
  box-shadow: 0 0 6px rgba(74, 144, 226, 0.3);
}
</style>
