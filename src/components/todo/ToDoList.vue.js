import { ref, onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import { ContentLoader } from 'vue-content-loader';
import { useTodoStore } from '../../stores/todo';
import BaseBtn from '../ui/BaseBtn.vue';
import Modal from '../ui/Modal.vue';
import Filter from './Filter.vue';
import ToDoSearch from '../todo/ToDoSearch.vue';
const todoStore = useTodoStore();
const { filteredTodos, loading } = storeToRefs(todoStore);
const newTodo = ref('');
const editIndex = ref(null);
const editTodo = ref('');
const showModal = ref(false);
const todoToRemove = ref(null);
const onDrugStart = (e, id) => {
    if (e.dataTransfer) {
        e.dataTransfer.setData('todoId', id);
        todoStore.setDropHere(true);
    }
};
const onDragEnd = () => {
    todoStore.setDropHere(false);
};
const startEdit = (index, title) => {
    editIndex.value = index;
    editTodo.value = title;
};
const saveEdit = (id) => {
    if (editTodo.value.trim()) {
        todoStore.saveTodo(editTodo.value, id);
    }
    editIndex.value = null;
    editTodo.value = '';
};
onMounted(() => {
    todoStore.loadTodos();
    todoStore.loadTrash();
});
const addNewTodo = () => {
    if (newTodo.value.trim()) {
        todoStore.addTodo(newTodo.value);
        newTodo.value = '';
    }
};
const toggleTodo = (id) => {
    todoStore.toggleTodo(id);
};
const askRemove = (id) => {
    todoToRemove.value = id;
    showModal.value = true;
};
const removeConfirmed = () => {
    if (todoToRemove.value) {
        todoStore.removeTodo(todoToRemove.value);
    }
    showModal.value = false;
    todoToRemove.value = null;
};
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_elements;
let __VLS_components;
let __VLS_directives;
/** @type {__VLS_StyleScopedClasses['todo-container']} */ ;
/** @type {__VLS_StyleScopedClasses['todo-title']} */ ;
/** @type {__VLS_StyleScopedClasses['todo-container']} */ ;
/** @type {__VLS_StyleScopedClasses['edit-cont']} */ ;
/** @type {__VLS_StyleScopedClasses['todo-input']} */ ;
/** @type {__VLS_StyleScopedClasses['todo-input']} */ ;
/** @type {__VLS_StyleScopedClasses['todo-list']} */ ;
/** @type {__VLS_StyleScopedClasses['todo-list']} */ ;
/** @type {__VLS_StyleScopedClasses['todo-list']} */ ;
/** @type {__VLS_StyleScopedClasses['todo-title']} */ ;
/** @type {__VLS_StyleScopedClasses['todo-list']} */ ;
/** @type {__VLS_StyleScopedClasses['todo-list']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-cont']} */ ;
/** @type {__VLS_StyleScopedClasses['edit-input']} */ ;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "todo-container" },
});
__VLS_asFunctionalElement(__VLS_elements.h1, __VLS_elements.h1)({});
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "todo-input" },
});
__VLS_asFunctionalElement(__VLS_elements.input)({
    ...{ onKeyup: (__VLS_ctx.addNewTodo) },
    type: "text",
    value: (__VLS_ctx.newTodo),
    placeholder: "Add a new todo",
});
// @ts-ignore
[addNewTodo, newTodo,];
/** @type {[typeof BaseBtn, typeof BaseBtn, ]} */ ;
// @ts-ignore
const __VLS_0 = __VLS_asFunctionalComponent(BaseBtn, new BaseBtn({
    ...{ 'onClick': {} },
    active: (!__VLS_ctx.newTodo.trim()),
}));
const __VLS_1 = __VLS_0({
    ...{ 'onClick': {} },
    active: (!__VLS_ctx.newTodo.trim()),
}, ...__VLS_functionalComponentArgsRest(__VLS_0));
let __VLS_3;
let __VLS_4;
const __VLS_5 = ({ click: {} },
    { onClick: (__VLS_ctx.addNewTodo) });
const { default: __VLS_6 } = __VLS_2.slots;
// @ts-ignore
[addNewTodo, newTodo,];
var __VLS_2;
/** @type {[typeof ToDoSearch, ]} */ ;
// @ts-ignore
const __VLS_7 = __VLS_asFunctionalComponent(ToDoSearch, new ToDoSearch({}));
const __VLS_8 = __VLS_7({}, ...__VLS_functionalComponentArgsRest(__VLS_7));
/** @type {[typeof Filter, ]} */ ;
// @ts-ignore
const __VLS_11 = __VLS_asFunctionalComponent(Filter, new Filter({}));
const __VLS_12 = __VLS_11({}, ...__VLS_functionalComponentArgsRest(__VLS_11));
if (__VLS_ctx.loading) {
    // @ts-ignore
    [loading,];
    const __VLS_15 = {}.ContentLoader;
    /** @type {[typeof __VLS_components.ContentLoader, typeof __VLS_components.ContentLoader, ]} */ ;
    // @ts-ignore
    ContentLoader;
    // @ts-ignore
    const __VLS_16 = __VLS_asFunctionalComponent(__VLS_15, new __VLS_15({
        width: (550),
        height: (160),
        speed: (1.6),
        primaryColor: "#f0f0ff",
        dangerColor: "#e0e0ff",
    }));
    const __VLS_17 = __VLS_16({
        width: (550),
        height: (160),
        speed: (1.6),
        primaryColor: "#f0f0ff",
        dangerColor: "#e0e0ff",
    }, ...__VLS_functionalComponentArgsRest(__VLS_16));
    const { default: __VLS_19 } = __VLS_18.slots;
    __VLS_asFunctionalElement(__VLS_elements.rect)({
        x: "10",
        y: "10",
        rx: "10",
        ry: "10",
        width: "530",
        height: "35",
    });
    __VLS_asFunctionalElement(__VLS_elements.rect)({
        x: "10",
        y: "60",
        rx: "10",
        ry: "10",
        width: "530",
        height: "35",
    });
    __VLS_asFunctionalElement(__VLS_elements.rect)({
        x: "10",
        y: "110",
        rx: "10",
        ry: "10",
        width: "530",
        height: "35",
    });
    var __VLS_18;
}
else {
    const __VLS_20 = {}.TransitionGroup;
    /** @type {[typeof __VLS_components.TransitionGroup, typeof __VLS_components.TransitionGroup, ]} */ ;
    // @ts-ignore
    TransitionGroup;
    // @ts-ignore
    const __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20({
        name: "todo",
        tag: "ul",
        ...{ class: "todo-list" },
    }));
    const __VLS_22 = __VLS_21({
        name: "todo",
        tag: "ul",
        ...{ class: "todo-list" },
    }, ...__VLS_functionalComponentArgsRest(__VLS_21));
    const { default: __VLS_24 } = __VLS_23.slots;
    for (const [todo, index] of __VLS_getVForSourceType((__VLS_ctx.filteredTodos))) {
        // @ts-ignore
        [filteredTodos,];
        __VLS_asFunctionalElement(__VLS_elements.li, __VLS_elements.li)({
            ...{ onDragstart: (...[$event]) => {
                    if (!!(__VLS_ctx.loading))
                        return;
                    __VLS_ctx.onDrugStart($event, todo.id);
                    // @ts-ignore
                    [onDrugStart,];
                } },
            ...{ onDragend: (__VLS_ctx.onDragEnd) },
            key: (todo.id),
            draggable: "true",
            ...{ class: "todo-item" },
        });
        // @ts-ignore
        [onDragEnd,];
        if (__VLS_ctx.editIndex === index) {
            // @ts-ignore
            [editIndex,];
            __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
                ...{ class: "todo-edit" },
            });
            __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({});
            __VLS_asFunctionalElement(__VLS_elements.input)({
                ...{ onKeyup: (...[$event]) => {
                        if (!!(__VLS_ctx.loading))
                            return;
                        if (!(__VLS_ctx.editIndex === index))
                            return;
                        __VLS_ctx.saveEdit(todo.id);
                        // @ts-ignore
                        [saveEdit,];
                    } },
                value: (__VLS_ctx.editTodo),
                type: "text",
                ...{ class: "edit-input" },
            });
            // @ts-ignore
            [editTodo,];
            __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({});
            /** @type {[typeof BaseBtn, typeof BaseBtn, ]} */ ;
            // @ts-ignore
            const __VLS_25 = __VLS_asFunctionalComponent(BaseBtn, new BaseBtn({
                ...{ 'onClick': {} },
                variant: "save",
            }));
            const __VLS_26 = __VLS_25({
                ...{ 'onClick': {} },
                variant: "save",
            }, ...__VLS_functionalComponentArgsRest(__VLS_25));
            let __VLS_28;
            let __VLS_29;
            const __VLS_30 = ({ click: {} },
                { onClick: (...[$event]) => {
                        if (!!(__VLS_ctx.loading))
                            return;
                        if (!(__VLS_ctx.editIndex === index))
                            return;
                        __VLS_ctx.saveEdit(todo.id);
                        // @ts-ignore
                        [saveEdit,];
                    } });
            const { default: __VLS_31 } = __VLS_27.slots;
            var __VLS_27;
            /** @type {[typeof BaseBtn, typeof BaseBtn, ]} */ ;
            // @ts-ignore
            const __VLS_32 = __VLS_asFunctionalComponent(BaseBtn, new BaseBtn({
                ...{ 'onClick': {} },
                variant: "danger",
            }));
            const __VLS_33 = __VLS_32({
                ...{ 'onClick': {} },
                variant: "danger",
            }, ...__VLS_functionalComponentArgsRest(__VLS_32));
            let __VLS_35;
            let __VLS_36;
            const __VLS_37 = ({ click: {} },
                { onClick: (...[$event]) => {
                        if (!!(__VLS_ctx.loading))
                            return;
                        if (!(__VLS_ctx.editIndex === index))
                            return;
                        __VLS_ctx.editIndex = null;
                        // @ts-ignore
                        [editIndex,];
                    } });
            const { default: __VLS_38 } = __VLS_34.slots;
            var __VLS_34;
        }
        else {
            __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
                ...{ class: ('todo-title ' + (todo.completed ? 'done' : '')) },
            });
            (todo.title);
        }
        if (__VLS_ctx.editIndex !== index) {
            // @ts-ignore
            [editIndex,];
            __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
                ...{ class: "btn-cont" },
            });
            __VLS_asFunctionalElement(__VLS_elements.input)({
                ...{ onChange: (...[$event]) => {
                        if (!!(__VLS_ctx.loading))
                            return;
                        if (!(__VLS_ctx.editIndex !== index))
                            return;
                        __VLS_ctx.toggleTodo(todo.id);
                        // @ts-ignore
                        [toggleTodo,];
                    } },
                type: "checkbox",
                checked: (!!todo.completed),
            });
            /** @type {[typeof BaseBtn, typeof BaseBtn, ]} */ ;
            // @ts-ignore
            const __VLS_39 = __VLS_asFunctionalComponent(BaseBtn, new BaseBtn({
                ...{ 'onClick': {} },
            }));
            const __VLS_40 = __VLS_39({
                ...{ 'onClick': {} },
            }, ...__VLS_functionalComponentArgsRest(__VLS_39));
            let __VLS_42;
            let __VLS_43;
            const __VLS_44 = ({ click: {} },
                { onClick: (...[$event]) => {
                        if (!!(__VLS_ctx.loading))
                            return;
                        if (!(__VLS_ctx.editIndex !== index))
                            return;
                        __VLS_ctx.startEdit(index, todo.title);
                        // @ts-ignore
                        [startEdit,];
                    } });
            const { default: __VLS_45 } = __VLS_41.slots;
            var __VLS_41;
            /** @type {[typeof BaseBtn, typeof BaseBtn, ]} */ ;
            // @ts-ignore
            const __VLS_46 = __VLS_asFunctionalComponent(BaseBtn, new BaseBtn({
                ...{ 'onClick': {} },
                variant: "danger",
            }));
            const __VLS_47 = __VLS_46({
                ...{ 'onClick': {} },
                variant: "danger",
            }, ...__VLS_functionalComponentArgsRest(__VLS_46));
            let __VLS_49;
            let __VLS_50;
            const __VLS_51 = ({ click: {} },
                { onClick: (...[$event]) => {
                        if (!!(__VLS_ctx.loading))
                            return;
                        if (!(__VLS_ctx.editIndex !== index))
                            return;
                        __VLS_ctx.askRemove(todo.id);
                        // @ts-ignore
                        [askRemove,];
                    } });
            const { default: __VLS_52 } = __VLS_48.slots;
            var __VLS_48;
        }
    }
    var __VLS_23;
}
/** @type {[typeof Modal, ]} */ ;
// @ts-ignore
const __VLS_53 = __VLS_asFunctionalComponent(Modal, new Modal({
    ...{ 'onClose': {} },
    ...{ 'onConfirm': {} },
    show: (__VLS_ctx.showModal),
    title: "Подтверждение",
    message: "Вы уверены, что хотите удалить задачу?",
}));
const __VLS_54 = __VLS_53({
    ...{ 'onClose': {} },
    ...{ 'onConfirm': {} },
    show: (__VLS_ctx.showModal),
    title: "Подтверждение",
    message: "Вы уверены, что хотите удалить задачу?",
}, ...__VLS_functionalComponentArgsRest(__VLS_53));
let __VLS_56;
let __VLS_57;
const __VLS_58 = ({ close: {} },
    { onClose: (...[$event]) => {
            __VLS_ctx.showModal = false;
            // @ts-ignore
            [showModal, showModal,];
        } });
const __VLS_59 = ({ confirm: {} },
    { onConfirm: (__VLS_ctx.removeConfirmed) });
// @ts-ignore
[removeConfirmed,];
var __VLS_55;
/** @type {__VLS_StyleScopedClasses['todo-container']} */ ;
/** @type {__VLS_StyleScopedClasses['todo-input']} */ ;
/** @type {__VLS_StyleScopedClasses['todo-list']} */ ;
/** @type {__VLS_StyleScopedClasses['todo-item']} */ ;
/** @type {__VLS_StyleScopedClasses['todo-edit']} */ ;
/** @type {__VLS_StyleScopedClasses['edit-input']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-cont']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup: () => ({
        ContentLoader: ContentLoader,
        BaseBtn: BaseBtn,
        Modal: Modal,
        Filter: Filter,
        ToDoSearch: ToDoSearch,
        filteredTodos: filteredTodos,
        loading: loading,
        newTodo: newTodo,
        editIndex: editIndex,
        editTodo: editTodo,
        showModal: showModal,
        onDrugStart: onDrugStart,
        onDragEnd: onDragEnd,
        startEdit: startEdit,
        saveEdit: saveEdit,
        addNewTodo: addNewTodo,
        toggleTodo: toggleTodo,
        askRemove: askRemove,
        removeConfirmed: removeConfirmed,
    }),
});
export default (await import('vue')).defineComponent({});
; /* PartiallyEnd: #4569/main.vue */
