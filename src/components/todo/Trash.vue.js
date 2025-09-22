import { ref } from 'vue';
import { storeToRefs } from 'pinia';
import { useTodoStore } from '../../stores/todo';
import BaseBtn from '../../components/ui/BaseBtn.vue';
const todoStore = useTodoStore();
const { dropHere, trash } = storeToRefs(todoStore);
const isDragOver = ref(false);
const restore = (id) => {
    todoStore.restoreTodo(id);
};
const remove = (id) => {
    todoStore.removeFromTrash(id);
};
const clearTrash = () => {
    todoStore.clearTrash();
};
const onDropToTrash = (e) => {
    e.preventDefault();
    isDragOver.value = false;
    todoStore.setDropHere(false);
    if (e.dataTransfer) {
        const id = e.dataTransfer.getData('todoId');
        if (id) {
            todoStore.removeTodo(id);
        }
    }
};
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_elements;
let __VLS_components;
let __VLS_directives;
/** @type {__VLS_StyleScopedClasses['trash-container']} */ ;
/** @type {__VLS_StyleScopedClasses['trash-container']} */ ;
/** @type {__VLS_StyleScopedClasses['trash-container']} */ ;
/** @type {__VLS_StyleScopedClasses['trash-container']} */ ;
/** @type {__VLS_StyleScopedClasses['trash-container']} */ ;
/** @type {__VLS_StyleScopedClasses['trash-container']} */ ;
// CSS variable injection 
// CSS variable injection end 
if (__VLS_ctx.trash.length) {
    // @ts-ignore
    [trash,];
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
        ...{ onDragover: () => { } },
        ...{ onDragenter: (...[$event]) => {
                if (!(__VLS_ctx.trash.length))
                    return;
                __VLS_ctx.isDragOver = true;
                // @ts-ignore
                [isDragOver,];
            } },
        ...{ onDragleave: (...[$event]) => {
                if (!(__VLS_ctx.trash.length))
                    return;
                __VLS_ctx.isDragOver = false;
                // @ts-ignore
                [isDragOver,];
            } },
        ...{ onDrop: (__VLS_ctx.onDropToTrash) },
        ...{ class: "trash-container trash-zone" },
        ...{ class: ({ 'drag-over': __VLS_ctx.isDragOver }) },
    });
    // @ts-ignore
    [isDragOver, onDropToTrash,];
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
        ...{ class: "trash-clear" },
    });
    __VLS_asFunctionalElement(__VLS_elements.h2, __VLS_elements.h2)({});
    /** @type {[typeof BaseBtn, typeof BaseBtn, ]} */ ;
    // @ts-ignore
    const __VLS_0 = __VLS_asFunctionalComponent(BaseBtn, new BaseBtn({
        ...{ 'onClick': {} },
    }));
    const __VLS_1 = __VLS_0({
        ...{ 'onClick': {} },
    }, ...__VLS_functionalComponentArgsRest(__VLS_0));
    let __VLS_3;
    let __VLS_4;
    const __VLS_5 = ({ click: {} },
        { onClick: (...[$event]) => {
                if (!(__VLS_ctx.trash.length))
                    return;
                __VLS_ctx.clearTrash();
                // @ts-ignore
                [clearTrash,];
            } });
    const { default: __VLS_6 } = __VLS_2.slots;
    var __VLS_2;
    if (__VLS_ctx.trash.length) {
        // @ts-ignore
        [trash,];
        __VLS_asFunctionalElement(__VLS_elements.ul, __VLS_elements.ul)({});
        for (const [item, index] of __VLS_getVForSourceType((__VLS_ctx.trash))) {
            // @ts-ignore
            [trash,];
            __VLS_asFunctionalElement(__VLS_elements.li, __VLS_elements.li)({
                key: (item.id),
            });
            __VLS_asFunctionalElement(__VLS_elements.span, __VLS_elements.span)({});
            (item.title);
            __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
                ...{ class: "actions" },
            });
            /** @type {[typeof BaseBtn, typeof BaseBtn, ]} */ ;
            // @ts-ignore
            const __VLS_7 = __VLS_asFunctionalComponent(BaseBtn, new BaseBtn({
                ...{ 'onClick': {} },
                variant: "save",
            }));
            const __VLS_8 = __VLS_7({
                ...{ 'onClick': {} },
                variant: "save",
            }, ...__VLS_functionalComponentArgsRest(__VLS_7));
            let __VLS_10;
            let __VLS_11;
            const __VLS_12 = ({ click: {} },
                { onClick: (...[$event]) => {
                        if (!(__VLS_ctx.trash.length))
                            return;
                        if (!(__VLS_ctx.trash.length))
                            return;
                        __VLS_ctx.restore(item.id);
                        // @ts-ignore
                        [restore,];
                    } });
            const { default: __VLS_13 } = __VLS_9.slots;
            var __VLS_9;
            /** @type {[typeof BaseBtn, typeof BaseBtn, ]} */ ;
            // @ts-ignore
            const __VLS_14 = __VLS_asFunctionalComponent(BaseBtn, new BaseBtn({
                ...{ 'onClick': {} },
                variant: "danger",
            }));
            const __VLS_15 = __VLS_14({
                ...{ 'onClick': {} },
                variant: "danger",
            }, ...__VLS_functionalComponentArgsRest(__VLS_14));
            let __VLS_17;
            let __VLS_18;
            const __VLS_19 = ({ click: {} },
                { onClick: (...[$event]) => {
                        if (!(__VLS_ctx.trash.length))
                            return;
                        if (!(__VLS_ctx.trash.length))
                            return;
                        __VLS_ctx.remove(item.id);
                        // @ts-ignore
                        [remove,];
                    } });
            const { default: __VLS_20 } = __VLS_16.slots;
            var __VLS_16;
        }
    }
    if (__VLS_ctx.dropHere) {
        // @ts-ignore
        [dropHere,];
        __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
            ...{ class: "empty-zone" },
        });
    }
}
/** @type {__VLS_StyleScopedClasses['trash-container']} */ ;
/** @type {__VLS_StyleScopedClasses['trash-zone']} */ ;
/** @type {__VLS_StyleScopedClasses['drag-over']} */ ;
/** @type {__VLS_StyleScopedClasses['trash-clear']} */ ;
/** @type {__VLS_StyleScopedClasses['actions']} */ ;
/** @type {__VLS_StyleScopedClasses['empty-zone']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup: () => ({
        BaseBtn: BaseBtn,
        dropHere: dropHere,
        trash: trash,
        isDragOver: isDragOver,
        restore: restore,
        remove: remove,
        clearTrash: clearTrash,
        onDropToTrash: onDropToTrash,
    }),
});
export default (await import('vue')).defineComponent({});
; /* PartiallyEnd: #4569/main.vue */
