import { useTodoStore } from '../../stores/todo';
import BaseBtn from '../../components/ui/BaseBtn.vue';
import { storeToRefs } from 'pinia';
const todoStore = useTodoStore();
const { hasCompleted } = storeToRefs(todoStore);
const filters = [
    { value: 'all', label: 'Все' },
    { value: 'active', label: 'Активные' },
    { value: 'completed', label: 'Завершённые' }
];
const setFilter = (filter) => {
    todoStore.setFilter(filter);
};
const clearCompleted = () => {
    todoStore.clearCompleted();
};
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_elements;
let __VLS_components;
let __VLS_directives;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "filters" },
});
for (const [f] of __VLS_getVForSourceType((__VLS_ctx.filters))) {
    // @ts-ignore
    [filters,];
    /** @type {[typeof BaseBtn, typeof BaseBtn, ]} */ ;
    // @ts-ignore
    const __VLS_0 = __VLS_asFunctionalComponent(BaseBtn, new BaseBtn({
        ...{ 'onClick': {} },
        key: (f.value),
        ...{ class: ({ active: __VLS_ctx.todoStore.filter === f.value }) },
    }));
    const __VLS_1 = __VLS_0({
        ...{ 'onClick': {} },
        key: (f.value),
        ...{ class: ({ active: __VLS_ctx.todoStore.filter === f.value }) },
    }, ...__VLS_functionalComponentArgsRest(__VLS_0));
    let __VLS_3;
    let __VLS_4;
    const __VLS_5 = ({ click: {} },
        { onClick: (...[$event]) => {
                __VLS_ctx.setFilter(f.value);
                // @ts-ignore
                [todoStore, setFilter,];
            } });
    const { default: __VLS_6 } = __VLS_2.slots;
    (f.label);
    var __VLS_2;
}
if (__VLS_ctx.hasCompleted) {
    // @ts-ignore
    [hasCompleted,];
    /** @type {[typeof BaseBtn, typeof BaseBtn, ]} */ ;
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent(BaseBtn, new BaseBtn({
        ...{ 'onClick': {} },
        variant: ('danger'),
    }));
    const __VLS_8 = __VLS_7({
        ...{ 'onClick': {} },
        variant: ('danger'),
    }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    let __VLS_10;
    let __VLS_11;
    const __VLS_12 = ({ click: {} },
        { onClick: (__VLS_ctx.clearCompleted) });
    const { default: __VLS_13 } = __VLS_9.slots;
    // @ts-ignore
    [clearCompleted,];
    var __VLS_9;
}
/** @type {__VLS_StyleScopedClasses['filters']} */ ;
/** @type {__VLS_StyleScopedClasses['active']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup: () => ({
        BaseBtn: BaseBtn,
        todoStore: todoStore,
        hasCompleted: hasCompleted,
        filters: filters,
        setFilter: setFilter,
        clearCompleted: clearCompleted,
    }),
});
export default (await import('vue')).defineComponent({});
; /* PartiallyEnd: #4569/main.vue */
