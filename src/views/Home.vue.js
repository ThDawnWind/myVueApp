import { storeToRefs } from 'pinia';
import { useTodoStore } from '../stores/todo';
import TodoList from '../components/todo/ToDoList.vue';
import Trash from '../components/todo/Trash.vue';
const todoStore = useTodoStore();
const { trash } = storeToRefs(todoStore);
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_elements;
let __VLS_components;
let __VLS_directives;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "container" },
});
/** @type {[typeof TodoList, ]} */ ;
// @ts-ignore
const __VLS_0 = __VLS_asFunctionalComponent(TodoList, new TodoList({}));
const __VLS_1 = __VLS_0({}, ...__VLS_functionalComponentArgsRest(__VLS_0));
/** @type {[typeof Trash, ]} */ ;
// @ts-ignore
const __VLS_4 = __VLS_asFunctionalComponent(Trash, new Trash({
    trash: (__VLS_ctx.trash),
}));
const __VLS_5 = __VLS_4({
    trash: (__VLS_ctx.trash),
}, ...__VLS_functionalComponentArgsRest(__VLS_4));
// @ts-ignore
[trash,];
/** @type {__VLS_StyleScopedClasses['container']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup: () => ({
        TodoList: TodoList,
        Trash: Trash,
        trash: trash,
    }),
});
export default (await import('vue')).defineComponent({});
; /* PartiallyEnd: #4569/main.vue */
