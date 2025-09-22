import { ContentLoader } from 'vue-content-loader';
const __VLS_props = defineProps();
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_elements;
let __VLS_components;
let __VLS_directives;
/** @type {__VLS_StyleScopedClasses['current-weather']} */ ;
/** @type {__VLS_StyleScopedClasses['current-weather']} */ ;
/** @type {__VLS_StyleScopedClasses['current-weather']} */ ;
/** @type {__VLS_StyleScopedClasses['current-weather']} */ ;
/** @type {__VLS_StyleScopedClasses['current-weather']} */ ;
/** @type {__VLS_StyleScopedClasses['current-weather']} */ ;
/** @type {__VLS_StyleScopedClasses['current-weather']} */ ;
/** @type {__VLS_StyleScopedClasses['weather-skeleton']} */ ;
/** @type {__VLS_StyleScopedClasses['no-data']} */ ;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "current-weather" },
});
__VLS_asFunctionalElement(__VLS_elements.h2, __VLS_elements.h2)({});
if (__VLS_ctx.loading) {
    // @ts-ignore
    [loading,];
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({});
    const __VLS_0 = {}.ContentLoader;
    /** @type {[typeof __VLS_components.ContentLoader, typeof __VLS_components.ContentLoader, ]} */ ;
    // @ts-ignore
    ContentLoader;
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
        speed: (2),
        width: (320),
        height: (125),
        primaryColor: "#f0f0ff",
        secondaryColor: "#e0e0ff",
        ...{ class: "weather-skeleton" },
    }));
    const __VLS_2 = __VLS_1({
        speed: (2),
        width: (320),
        height: (125),
        primaryColor: "#f0f0ff",
        secondaryColor: "#e0e0ff",
        ...{ class: "weather-skeleton" },
    }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    const { default: __VLS_4 } = __VLS_3.slots;
    __VLS_asFunctionalElement(__VLS_elements.rect)({
        x: "0",
        y: "0",
        rx: "8",
        ry: "8",
        width: "120",
        height: "20",
    });
    __VLS_asFunctionalElement(__VLS_elements.rect)({
        x: "0",
        y: "30",
        rx: "6",
        ry: "6",
        width: "320",
        height: "16",
    });
    __VLS_asFunctionalElement(__VLS_elements.rect)({
        x: "0",
        y: "55",
        rx: "6",
        ry: "6",
        width: "320",
        height: "16",
    });
    __VLS_asFunctionalElement(__VLS_elements.rect)({
        x: "0",
        y: "80",
        rx: "6",
        ry: "6",
        width: "320",
        height: "16",
    });
    __VLS_asFunctionalElement(__VLS_elements.rect)({
        x: "0",
        y: "105",
        rx: "6",
        ry: "6",
        width: "200",
        height: "16",
    });
    var __VLS_3;
}
else if (__VLS_ctx.city && __VLS_ctx.temp && __VLS_ctx.descr && __VLS_ctx.feelsLike) {
    // @ts-ignore
    [city, temp, descr, feelsLike,];
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({});
    __VLS_asFunctionalElement(__VLS_elements.p, __VLS_elements.p)({});
    __VLS_asFunctionalElement(__VLS_elements.strong, __VLS_elements.strong)({});
    (__VLS_ctx.city);
    // @ts-ignore
    [city,];
    __VLS_asFunctionalElement(__VLS_elements.p, __VLS_elements.p)({});
    (Math.round(__VLS_ctx.temp));
    // @ts-ignore
    [temp,];
    __VLS_asFunctionalElement(__VLS_elements.p, __VLS_elements.p)({});
    (Math.round(__VLS_ctx.feelsLike));
    // @ts-ignore
    [feelsLike,];
    __VLS_asFunctionalElement(__VLS_elements.p, __VLS_elements.p)({});
    (__VLS_ctx.descr);
    // @ts-ignore
    [descr,];
}
else if (!__VLS_ctx.loading) {
    // @ts-ignore
    [loading,];
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
        ...{ class: "no-data" },
    });
    __VLS_asFunctionalElement(__VLS_elements.p, __VLS_elements.p)({});
}
/** @type {__VLS_StyleScopedClasses['current-weather']} */ ;
/** @type {__VLS_StyleScopedClasses['weather-skeleton']} */ ;
/** @type {__VLS_StyleScopedClasses['no-data']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup: () => ({
        ContentLoader: ContentLoader,
    }),
    __typeProps: {},
});
export default (await import('vue')).defineComponent({
    __typeProps: {},
});
; /* PartiallyEnd: #4569/main.vue */
