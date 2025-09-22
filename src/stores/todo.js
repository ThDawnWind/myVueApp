import { defineStore } from 'pinia';
import { db } from '../firebase';
import { ref as dbRef, push, set, remove, onValue, update } from 'firebase/database';
import { notify } from '../utils/useNotify';
import { saveTrash, loadTrash } from '../services/trashService';
export const useTodoStore = defineStore('todo', {
    state: () => ({
        todos: [],
        trash: [],
        filter: 'all',
        dropHere: false,
        search: '',
        loading: true,
        error: ''
    }),
    getters: {
        filteredTodos(state) {
            let list = [...state.todos];
            switch (state.filter) {
                case 'active':
                    list = list.filter(t => !t.completed);
                    break;
                case 'completed':
                    list = list.filter(t => t.completed);
                    break;
            }
            if (state.search.trim()) {
                list = list.filter(t => t.title.toLowerCase().includes(state.search.toLowerCase()));
            }
            return list;
        },
        hasCompleted(state) {
            return state.todos.some(t => t.completed);
        }
    },
    actions: {
        loadTodos() {
            try {
                const todosRef = dbRef(db, 'todos');
                let loaded = false;
                onValue(todosRef, (snapshot) => {
                    const data = snapshot.val() || {};
                    this.todos = Object.keys(data).map(key => ({ id: key, ...data[key] }));
                    if (!loaded) {
                        notify('info', 'Задачи загружены');
                        loaded = true;
                        this.loading = false;
                    }
                });
            }
            catch (error) {
                switch (error.code) {
                    case "database/permission-denied":
                        notify('error', '⛔ Нет доступа к данным (проверь правила)');
                        break;
                    case "database/network-error":
                        notify('error', '🌐 Проблемы с сетью, попробуйте позже');
                        break;
                    default:
                        notify('error', '⛔ Неизвестная ошибка ');
                }
            }
        },
        addTodo(title) {
            const todosRef = dbRef(db, 'todos');
            const newTodoRef = push(todosRef);
            set(newTodoRef, {
                title,
                completed: false,
                date: new Date().toISOString()
            });
            notify('info', 'Задача добавлена');
        },
        saveTodo(title, id) {
            const todoRef = dbRef(db, `todos/${id}`);
            update(todoRef, { title: title }).then(() => {
                notify('success', 'Отредактировано успешно');
            });
        },
        toggleTodo(id) {
            const todoRef = dbRef(db, `todos/${id}`);
            const todo = this.todos.find(t => t.id === id);
            if (todo) {
                update(todoRef, { completed: !todo.completed });
            }
        },
        removeTodo(id) {
            const todoRef = dbRef(db, `todos/${id}`);
            const index = this.todos.findIndex(t => t.id === id);
            if (index === -1)
                return;
            const [deletedTodo] = this.todos.splice(index, 1);
            this.addToTrash(deletedTodo);
            remove(todoRef);
            notify('error', 'Задача перенесена в корзину');
        },
        removeFromTrash(id) {
            this.trash = this.trash.filter(t => t.id !== id);
        },
        restoreTodo(id) {
            const todo = this.trash.find(it => it.id === id);
            if (!todo)
                return;
            const todoRef = dbRef(db, `todos/${id}`);
            set(todoRef, {
                title: todo.title,
                completed: todo.completed,
                date: todo.date || new Date().toISOString()
            });
            this.trash = this.trash.filter(it => it.id !== id);
            localStorage.setItem('trash', JSON.stringify(this.trash));
            notify('success', 'Задача восстановлена');
        },
        addToTrash(todo) {
            this.trash.push(todo);
            saveTrash(this.trash);
        },
        loadTrash() {
            this.trash = loadTrash();
        },
        clearTrash() {
            this.trash = [];
            saveTrash(this.trash);
            notify("success", "Корзина очищена");
        },
        setFilter(filter) {
            this.filter = filter;
        },
        setSearch(query) {
            this.search = query;
        },
        clearCompleted() {
            const completed = this.todos.filter(t => t.completed);
            completed.forEach(t => {
                const todoRef = dbRef(db, `todos/${t.id}`);
                remove(todoRef);
                this.addToTrash(t);
            });
            this.todos = this.todos.filter(t => !t.completed);
            notify('info', 'Все выполненные задачи удалены');
        },
        setDropHere(value) {
            this.dropHere = value;
        }
    }
});
