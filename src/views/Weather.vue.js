import { computed, onMounted, watch } from 'vue';
import { storeToRefs } from 'pinia';
import WeatherHeader from '../components/weather/WeatherHeader.vue';
import WeatherCurrent from '../components/weather/WeatherCurrent.vue';
import WeatherDetails from '../components/weather/WeatherDetails.vue';
import WeatherForecast from '../components/weather/WeatherForecast.vue';
import CurrencyBunner from '../components/weather/CurrencyBunner.vue';
import { useCityStore } from '../stores/city';
import { useWeatherStore } from '../stores/weather';
const cityStore = useCityStore();
const weatherStore = useWeatherStore();
const { current, forecast, loading } = storeToRefs(weatherStore);
const { selectedCity } = storeToRefs(cityStore);
const loadData = (lat, lon) => {
    weatherStore.loadWeather(lat, lon);
    weatherStore.loadForecast(lat, lon);
};
onMounted(async () => {
    const lat = selectedCity.value?.lat ?? 55.7558;
    const lon = selectedCity.value?.lon ?? 37.6176;
    loadData(lat, lon);
});
watch(selectedCity, (newCity) => {
    if (newCity) {
        weatherStore.loadWeather(newCity.lat, newCity.lon);
        weatherStore.loadForecast(newCity.lat, newCity.lon);
    }
});
const dailyForecast = computed(() => {
    if (!forecast.value)
        return [];
    return forecast.value.slice(0, 5);
});
const hasCurrent = computed(() => !!current.value);
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_elements;
let __VLS_components;
let __VLS_directives;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "weather-page" },
});
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "conteiner" },
});
/** @type {[typeof WeatherHeader, ]} */ ;
// @ts-ignore
const __VLS_0 = __VLS_asFunctionalComponent(WeatherHeader, new WeatherHeader({}));
const __VLS_1 = __VLS_0({}, ...__VLS_functionalComponentArgsRest(__VLS_0));
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "current-temp" },
});
if (__VLS_ctx.hasCurrent) {
    // @ts-ignore
    [hasCurrent,];
    /** @type {[typeof WeatherCurrent, ]} */ ;
    // @ts-ignore
    const __VLS_4 = __VLS_asFunctionalComponent(WeatherCurrent, new WeatherCurrent({
        city: (__VLS_ctx.current.name),
        temp: (__VLS_ctx.current.main.temp),
        descr: (__VLS_ctx.current.weather[0].description),
        feelsLike: (__VLS_ctx.current.main.feels_like),
        loading: (__VLS_ctx.loading),
    }));
    const __VLS_5 = __VLS_4({
        city: (__VLS_ctx.current.name),
        temp: (__VLS_ctx.current.main.temp),
        descr: (__VLS_ctx.current.weather[0].description),
        feelsLike: (__VLS_ctx.current.main.feels_like),
        loading: (__VLS_ctx.loading),
    }, ...__VLS_functionalComponentArgsRest(__VLS_4));
    // @ts-ignore
    [current, current, current, current, loading,];
}
if (__VLS_ctx.hasCurrent) {
    // @ts-ignore
    [hasCurrent,];
    /** @type {[typeof WeatherDetails, ]} */ ;
    // @ts-ignore
    const __VLS_8 = __VLS_asFunctionalComponent(WeatherDetails, new WeatherDetails({
        loading: (__VLS_ctx.loading),
        maxTemp: (__VLS_ctx.current.main.temp_max),
        pressure: (__VLS_ctx.current.main.pressure),
        humidity: (__VLS_ctx.current.main.humidity),
        wind: (__VLS_ctx.current.wind.speed),
    }));
    const __VLS_9 = __VLS_8({
        loading: (__VLS_ctx.loading),
        maxTemp: (__VLS_ctx.current.main.temp_max),
        pressure: (__VLS_ctx.current.main.pressure),
        humidity: (__VLS_ctx.current.main.humidity),
        wind: (__VLS_ctx.current.wind.speed),
    }, ...__VLS_functionalComponentArgsRest(__VLS_8));
    // @ts-ignore
    [current, current, current, current, loading,];
}
/** @type {[typeof WeatherForecast, ]} */ ;
// @ts-ignore
const __VLS_12 = __VLS_asFunctionalComponent(WeatherForecast, new WeatherForecast({
    forecast: (__VLS_ctx.dailyForecast),
    loading: (__VLS_ctx.loading),
}));
const __VLS_13 = __VLS_12({
    forecast: (__VLS_ctx.dailyForecast),
    loading: (__VLS_ctx.loading),
}, ...__VLS_functionalComponentArgsRest(__VLS_12));
// @ts-ignore
[loading, dailyForecast,];
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "sidebar" },
});
/** @type {[typeof CurrencyBunner, ]} */ ;
// @ts-ignore
const __VLS_16 = __VLS_asFunctionalComponent(CurrencyBunner, new CurrencyBunner({}));
const __VLS_17 = __VLS_16({}, ...__VLS_functionalComponentArgsRest(__VLS_16));
/** @type {__VLS_StyleScopedClasses['weather-page']} */ ;
/** @type {__VLS_StyleScopedClasses['conteiner']} */ ;
/** @type {__VLS_StyleScopedClasses['current-temp']} */ ;
/** @type {__VLS_StyleScopedClasses['sidebar']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup: () => ({
        WeatherHeader: WeatherHeader,
        WeatherCurrent: WeatherCurrent,
        WeatherDetails: WeatherDetails,
        WeatherForecast: WeatherForecast,
        CurrencyBunner: CurrencyBunner,
        current: current,
        loading: loading,
        dailyForecast: dailyForecast,
        hasCurrent: hasCurrent,
    }),
});
export default (await import('vue')).defineComponent({});
; /* PartiallyEnd: #4569/main.vue */
