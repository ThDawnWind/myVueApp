import { defineStore } from 'pinia'
import { db } from '../firebase'
import { ref as dbRef, push, set, remove, onValue, update } from 'firebase/database'
import type { Todo, Filter } from '../types/todo'
import { notify } from '../utils/useNotify'
import { saveTrash, loadTrash } from '../services/trashService'

export const useTodoStore = defineStore('todo', {

  state: () => ({
    todos: [] as Todo[],
    trash: [] as Todo[],
    filter: 'all' as Filter,
    dropHere: false as boolean,
    search: '' as string,
    loading: true as boolean,
    error: '' as string
  }),

  getters: {
    filteredTodos(state) {
      let list = [...state.todos]

      switch(state.filter) {
        case 'active':
          list = list.filter(t => !t.completed)
          break
        case 'completed':
          list = list.filter(t => t.completed)
          break
      }

      if (state.search.trim()) {
        list = list.filter(t => t.title.toLowerCase().includes(state.search.toLowerCase()))
      }

      return list
    },
      hasCompleted(state) {
          return state.todos.some(t => t.completed)
      }
  },
  actions: {
    loadTodos() {
      try {
        const todosRef = dbRef(db, 'todos')
        let loaded = false
        onValue(todosRef, (snapshot) => {
          const data = snapshot.val() || {}
          this.todos = Object.keys(data).map(key => ({ id: key, ...data[key] }))

          if (!loaded) {
            notify('info', 'Задачи загружены')
            loaded = true
            this.loading = false
          }
        })
      } catch(error: any) {
        switch (error.code) {
      case "database/permission-denied":
        notify('error', '⛔ Нет доступа к данным (проверь правила)')
        break
      case "database/network-error":
        notify('error', '🌐 Проблемы с сетью, попробуйте позже')
        break
      default:
        notify('error', '⛔ Неизвестная ошибка ')
    }
      }
    },
    addTodo(title: string) {
      const todosRef = dbRef(db, 'todos')
      const newTodoRef = push(todosRef)

      set(newTodoRef, {
        title,
        completed: false,
        date: new Date().toISOString()
      })

      notify('info', 'Задача добавлена')
    },
    saveTodo(title: string, id: string) {
       const todoRef = dbRef(db, `todos/${id}`)

      update(todoRef, { title: title }).then(() => {
        notify('success', 'Отредактировано успешно')
      })
    },
    toggleTodo(id: string) {
      const todoRef = dbRef(db, `todos/${id}`)
      const todo = this.todos.find(t => t.id === id)
      if (todo) {
        update(todoRef, { completed: !todo.completed })
      }
    },

    removeTodo(id: string) {
      const todoRef = dbRef(db, `todos/${id}`)
      const index = this.todos.findIndex(t => t.id === id)
      if (index === -1) return

      const [deletedTodo] = this.todos.splice(index, 1)
      this.addToTrash(deletedTodo)
      remove(todoRef)

    notify('error', 'Задача перенесена в корзину')
    },
    removeFromTrash(id: string) {
        this.trash = this.trash.filter(t => t.id !== id)
    },
    restoreTodo(id: string) {
      const todo = this.trash.find(it => it.id === id)
      if (!todo) return

      const todoRef = dbRef(db, `todos/${id}`)
      set(todoRef, {
        title: todo.title,
        completed: todo.completed,
        date: todo.date || new Date().toISOString()
      })

       this.trash = this.trash.filter(it => it.id !== id)
       localStorage.setItem('trash', JSON.stringify(this.trash))

      notify('success', 'Задача восстановлена')
    },
    addToTrash(todo: Todo) {
      this.trash.push(todo)
      saveTrash(this.trash)
    },
    loadTrash() {
      this.trash = loadTrash()
    },

    clearTrash() {
       this.trash = []
       saveTrash(this.trash);
       notify("success", "Корзина очищена");
    },
    setFilter(filter: Filter) {
      this.filter = filter
    },

    setSearch(query: string) {
      this.search = query
    },

    clearCompleted() {
      const completed = this.todos.filter(t => t.completed)

      completed.forEach(t => {
        const todoRef = dbRef(db, `todos/${t.id}`)
        remove(todoRef)
        this.addToTrash(t)
      })

      this.todos = this.todos.filter(t => !t.completed)

      notify('info', 'Все выполненные задачи удалены')
    },
    setDropHere(value: boolean) {
      this.dropHere = value
    }
  }
})
