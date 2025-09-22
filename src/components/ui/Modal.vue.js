import BaseBtn from '../ui/BaseBtn.vue';
const __VLS_props = defineProps();
const emit = defineEmits();
const close = () => emit('close');
const confirm = () => emit('confirm');
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_elements;
let __VLS_components;
let __VLS_directives;
/** @type {__VLS_StyleScopedClasses['modal']} */ ;
/** @type {__VLS_StyleScopedClasses['modal']} */ ;
// CSS variable injection 
// CSS variable injection end 
const __VLS_0 = {}.teleport;
/** @type {[typeof __VLS_components.Teleport, typeof __VLS_components.teleport, typeof __VLS_components.Teleport, typeof __VLS_components.teleport, ]} */ ;
// @ts-ignore
Teleport;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
    to: "body",
}));
const __VLS_2 = __VLS_1({
    to: "body",
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
const { default: __VLS_4 } = __VLS_3.slots;
if (__VLS_ctx.show) {
    // @ts-ignore
    [show,];
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
        ...{ onClick: (__VLS_ctx.close) },
        ...{ class: "modal-backdrop" },
    });
    // @ts-ignore
    [close,];
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
        ...{ class: "modal" },
    });
    __VLS_asFunctionalElement(__VLS_elements.h1, __VLS_elements.h1)({});
    (__VLS_ctx.title);
    // @ts-ignore
    [title,];
    __VLS_asFunctionalElement(__VLS_elements.p, __VLS_elements.p)({});
    (__VLS_ctx.message);
    // @ts-ignore
    [message,];
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
        ...{ class: "actions" },
    });
    /** @type {[typeof BaseBtn, typeof BaseBtn, ]} */ ;
    // @ts-ignore
    const __VLS_5 = __VLS_asFunctionalComponent(BaseBtn, new BaseBtn({
        ...{ 'onClick': {} },
    }));
    const __VLS_6 = __VLS_5({
        ...{ 'onClick': {} },
    }, ...__VLS_functionalComponentArgsRest(__VLS_5));
    let __VLS_8;
    let __VLS_9;
    const __VLS_10 = ({ click: {} },
        { onClick: (__VLS_ctx.confirm) });
    const { default: __VLS_11 } = __VLS_7.slots;
    // @ts-ignore
    [confirm,];
    var __VLS_7;
    /** @type {[typeof BaseBtn, typeof BaseBtn, ]} */ ;
    // @ts-ignore
    const __VLS_12 = __VLS_asFunctionalComponent(BaseBtn, new BaseBtn({
        ...{ 'onClick': {} },
        variant: "danger",
    }));
    const __VLS_13 = __VLS_12({
        ...{ 'onClick': {} },
        variant: "danger",
    }, ...__VLS_functionalComponentArgsRest(__VLS_12));
    let __VLS_15;
    let __VLS_16;
    const __VLS_17 = ({ click: {} },
        { onClick: (__VLS_ctx.close) });
    const { default: __VLS_18 } = __VLS_14.slots;
    // @ts-ignore
    [close,];
    var __VLS_14;
}
var __VLS_3;
/** @type {__VLS_StyleScopedClasses['modal-backdrop']} */ ;
/** @type {__VLS_StyleScopedClasses['modal']} */ ;
/** @type {__VLS_StyleScopedClasses['actions']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup: () => ({
        BaseBtn: BaseBtn,
        close: close,
        confirm: confirm,
    }),
    __typeEmits: {},
    __typeProps: {},
});
export default (await import('vue')).defineComponent({
    __typeEmits: {},
    __typeProps: {},
});
; /* PartiallyEnd: #4569/main.vue */
