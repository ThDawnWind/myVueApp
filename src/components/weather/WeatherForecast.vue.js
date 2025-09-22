import { ContentLoader } from 'vue-content-loader';
import { formatDateWeather } from '../../utils/formatDate';
const props = defineProps();
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_elements;
let __VLS_components;
let __VLS_directives;
/** @type {__VLS_StyleScopedClasses['forecast-container']} */ ;
/** @type {__VLS_StyleScopedClasses['forecast-card']} */ ;
/** @type {__VLS_StyleScopedClasses['forecast-card']} */ ;
/** @type {__VLS_StyleScopedClasses['weather-skeleton']} */ ;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "forecast-container" },
});
__VLS_asFunctionalElement(__VLS_elements.h2, __VLS_elements.h2)({});
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "forecast-cards" },
});
if (props.loading) {
    for (const [n] of __VLS_getVForSourceType((5))) {
        __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
            key: (n),
            ...{ class: "forecast-card" },
        });
        const __VLS_0 = {}.ContentLoader;
        /** @type {[typeof __VLS_components.ContentLoader, typeof __VLS_components.ContentLoader, ]} */ ;
        // @ts-ignore
        ContentLoader;
        // @ts-ignore
        const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
            speed: (2),
            width: (200),
            height: (260),
            backgroundColor: ('#ffffff'),
            foregroundColor: ('#f5f5f5'),
            ...{ class: "weather-skeleton" },
        }));
        const __VLS_2 = __VLS_1({
            speed: (2),
            width: (200),
            height: (260),
            backgroundColor: ('#ffffff'),
            foregroundColor: ('#f5f5f5'),
            ...{ class: "weather-skeleton" },
        }, ...__VLS_functionalComponentArgsRest(__VLS_1));
        const { default: __VLS_4 } = __VLS_3.slots;
        __VLS_asFunctionalElement(__VLS_elements.rect)({
            x: "40",
            y: "10",
            rx: "6",
            ry: "6",
            width: "120",
            height: "14",
        });
        __VLS_asFunctionalElement(__VLS_elements.circle)({
            cx: "100",
            cy: "70",
            r: "30",
        });
        __VLS_asFunctionalElement(__VLS_elements.rect)({
            x: "40",
            y: "110",
            rx: "6",
            ry: "6",
            width: "120",
            height: "14",
        });
        __VLS_asFunctionalElement(__VLS_elements.rect)({
            x: "40",
            y: "140",
            rx: "6",
            ry: "6",
            width: "120",
            height: "14",
        });
        __VLS_asFunctionalElement(__VLS_elements.rect)({
            x: "40",
            y: "170",
            rx: "6",
            ry: "6",
            width: "120",
            height: "14",
        });
        __VLS_asFunctionalElement(__VLS_elements.rect)({
            x: "40",
            y: "200",
            rx: "6",
            ry: "6",
            width: "120",
            height: "14",
        });
        __VLS_asFunctionalElement(__VLS_elements.rect)({
            x: "40",
            y: "230",
            rx: "6",
            ry: "6",
            width: "120",
            height: "14",
        });
        var __VLS_3;
    }
}
else {
    for (const [day] of __VLS_getVForSourceType((props.forecast))) {
        __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
            key: (day.dt),
            ...{ class: "forecast-card" },
        });
        __VLS_asFunctionalElement(__VLS_elements.p, __VLS_elements.p)({
            ...{ class: "forecast-date" },
        });
        (__VLS_ctx.formatDateWeather(day.dt_txt));
        // @ts-ignore
        [formatDateWeather,];
        __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
            ...{ class: "forecast-icon" },
        });
        __VLS_asFunctionalElement(__VLS_elements.img)({
            ...{ class: "icon" },
            src: (`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`),
            alt: (day.weather[0].description),
        });
        __VLS_asFunctionalElement(__VLS_elements.p, __VLS_elements.p)({
            ...{ class: "forecast-temp" },
        });
        (Math.round(day.main.temp));
        __VLS_asFunctionalElement(__VLS_elements.p, __VLS_elements.p)({
            ...{ class: "forecast-feels" },
        });
        (Math.round(day.main.feels_like));
        __VLS_asFunctionalElement(__VLS_elements.p, __VLS_elements.p)({
            ...{ class: "forecast-desc" },
        });
        (day.weather[0].description);
        __VLS_asFunctionalElement(__VLS_elements.p, __VLS_elements.p)({
            ...{ class: "forecast-humidity" },
        });
        (day.main.humidity);
        __VLS_asFunctionalElement(__VLS_elements.p, __VLS_elements.p)({
            ...{ class: "forecast-pressure" },
        });
        (day.main.pressure);
    }
}
/** @type {__VLS_StyleScopedClasses['forecast-container']} */ ;
/** @type {__VLS_StyleScopedClasses['forecast-cards']} */ ;
/** @type {__VLS_StyleScopedClasses['forecast-card']} */ ;
/** @type {__VLS_StyleScopedClasses['weather-skeleton']} */ ;
/** @type {__VLS_StyleScopedClasses['forecast-card']} */ ;
/** @type {__VLS_StyleScopedClasses['forecast-date']} */ ;
/** @type {__VLS_StyleScopedClasses['forecast-icon']} */ ;
/** @type {__VLS_StyleScopedClasses['icon']} */ ;
/** @type {__VLS_StyleScopedClasses['forecast-temp']} */ ;
/** @type {__VLS_StyleScopedClasses['forecast-feels']} */ ;
/** @type {__VLS_StyleScopedClasses['forecast-desc']} */ ;
/** @type {__VLS_StyleScopedClasses['forecast-humidity']} */ ;
/** @type {__VLS_StyleScopedClasses['forecast-pressure']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup: () => ({
        ContentLoader: ContentLoader,
        formatDateWeather: formatDateWeather,
    }),
    __typeProps: {},
});
export default (await import('vue')).defineComponent({
    __typeProps: {},
});
; /* PartiallyEnd: #4569/main.vue */
