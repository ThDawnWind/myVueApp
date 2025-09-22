import { computed } from 'vue';
import { ContentLoader } from 'vue-content-loader';
import TempIcon from '../../assets/temp.svg';
import PressureIcon from '../../assets/pressure.svg';
import RainIcon from '../../assets/rain.svg';
import WindIcon from '../../assets/wind.svg';
const props = defineProps();
const details = computed(() => [
    { title: 'Максимальная температура', value: `${props.maxTemp}°C`, icon: TempIcon },
    { title: 'Давление', value: `${props.pressure} мм ртутного столба`, icon: PressureIcon },
    { title: 'Влажность', value: `${props.humidity}%`, icon: RainIcon },
    { title: 'Ветер', value: `${props.wind} м/с`, icon: WindIcon }
]);
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_elements;
let __VLS_components;
let __VLS_directives;
/** @type {__VLS_StyleScopedClasses['temp']} */ ;
/** @type {__VLS_StyleScopedClasses['weather-skeleton']} */ ;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "details" },
});
if (__VLS_ctx.loading) {
    // @ts-ignore
    [loading,];
    for (const [n] of __VLS_getVForSourceType((4))) {
        __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
            ...{ class: "skeleton-cont" },
            key: (n),
        });
        const __VLS_0 = {}.ContentLoader;
        /** @type {[typeof __VLS_components.ContentLoader, typeof __VLS_components.ContentLoader, ]} */ ;
        // @ts-ignore
        ContentLoader;
        // @ts-ignore
        const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
            speed: (2),
            width: (160),
            height: (140),
            backgroundColor: ('#ffffff'),
            foregroundColor: ('#f5f5f5'),
            ...{ class: "weather-skeleton" },
        }));
        const __VLS_2 = __VLS_1({
            speed: (2),
            width: (160),
            height: (140),
            backgroundColor: ('#ffffff'),
            foregroundColor: ('#f5f5f5'),
            ...{ class: "weather-skeleton" },
        }, ...__VLS_functionalComponentArgsRest(__VLS_1));
        const { default: __VLS_4 } = __VLS_3.slots;
        __VLS_asFunctionalElement(__VLS_elements.circle)({
            cx: "80",
            cy: "25",
            r: "25",
        });
        __VLS_asFunctionalElement(__VLS_elements.rect)({
            x: "20",
            y: "70",
            rx: "6",
            ry: "6",
            width: "120",
            height: "14",
        });
        __VLS_asFunctionalElement(__VLS_elements.rect)({
            x: "20",
            y: "100",
            rx: "6",
            ry: "6",
            width: "120",
            height: "14",
        });
        var __VLS_3;
    }
}
else {
    for (const [item] of __VLS_getVForSourceType((__VLS_ctx.details))) {
        // @ts-ignore
        [details,];
        __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
            ...{ class: "temp" },
            key: (item.title),
        });
        __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
            ...{ class: "icon-bg" },
        });
        const __VLS_5 = ((item.icon));
        // @ts-ignore
        const __VLS_6 = __VLS_asFunctionalComponent(__VLS_5, new __VLS_5({
            ...{ class: "icon" },
        }));
        const __VLS_7 = __VLS_6({
            ...{ class: "icon" },
        }, ...__VLS_functionalComponentArgsRest(__VLS_6));
        __VLS_asFunctionalElement(__VLS_elements.h3, __VLS_elements.h3)({
            ...{ class: "title" },
        });
        (item.title);
        __VLS_asFunctionalElement(__VLS_elements.h3, __VLS_elements.h3)({
            ...{ class: "temp-descr" },
        });
        (item.value);
    }
}
/** @type {__VLS_StyleScopedClasses['details']} */ ;
/** @type {__VLS_StyleScopedClasses['skeleton-cont']} */ ;
/** @type {__VLS_StyleScopedClasses['weather-skeleton']} */ ;
/** @type {__VLS_StyleScopedClasses['temp']} */ ;
/** @type {__VLS_StyleScopedClasses['icon-bg']} */ ;
/** @type {__VLS_StyleScopedClasses['icon']} */ ;
/** @type {__VLS_StyleScopedClasses['title']} */ ;
/** @type {__VLS_StyleScopedClasses['temp-descr']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup: () => ({
        ContentLoader: ContentLoader,
        details: details,
    }),
    __typeProps: {},
});
export default (await import('vue')).defineComponent({
    __typeProps: {},
});
; /* PartiallyEnd: #4569/main.vue */
