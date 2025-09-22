import { ref } from "vue";
import { useCityStore } from "../../stores/city";
import { searchCitiesByName } from "../../services/weatherService";
const cityStore = useCityStore();
const query = ref('');
const results = ref([]);
const selectedIndex = ref(-1);
async function searchCity() {
    if (query.value.length < 2) {
        results.value = [];
        selectedIndex.value = -1;
        return;
    }
    results.value = await searchCitiesByName(query.value);
    selectedIndex.value = -1;
}
function selectCity(city) {
    cityStore.setCity(city);
    query.value = city.name;
    query.value = '';
    results.value = [];
    selectedIndex.value = -1;
}
function moveUp() {
    if (selectedIndex.value > 0) {
        selectedIndex.value--;
    }
}
function moveDown() {
    if (selectedIndex.value < results.value.length - 1) {
        selectedIndex.value++;
    }
}
function chooseSelected() {
    if (selectedIndex.value >= 0) {
        selectCity(results.value[selectedIndex.value]);
    }
}
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_elements;
let __VLS_components;
let __VLS_directives;
/** @type {__VLS_StyleScopedClasses['header-input']} */ ;
/** @type {__VLS_StyleScopedClasses['suggestions']} */ ;
/** @type {__VLS_StyleScopedClasses['suggestions']} */ ;
/** @type {__VLS_StyleScopedClasses['suggestions']} */ ;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_elements.header, __VLS_elements.header)({
    ...{ class: "header" },
});
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "header-title" },
});
__VLS_asFunctionalElement(__VLS_elements.h1, __VLS_elements.h1)({});
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "city-selector" },
});
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "header-icon" },
});
__VLS_asFunctionalElement(__VLS_elements.img)({
    src: "../../assets/search.svg",
    alt: "search",
    ...{ class: "search-img" },
});
__VLS_asFunctionalElement(__VLS_elements.input)({
    ...{ onInput: (__VLS_ctx.searchCity) },
    ...{ onKeydown: (__VLS_ctx.moveDown) },
    ...{ onKeydown: (__VLS_ctx.moveUp) },
    ...{ onKeydown: (__VLS_ctx.chooseSelected) },
    value: (__VLS_ctx.query),
    ...{ class: "header-input" },
    type: "text",
    placeholder: "Введите город...",
});
// @ts-ignore
[searchCity, moveDown, moveUp, chooseSelected, query,];
if (__VLS_ctx.results.length) {
    // @ts-ignore
    [results,];
    __VLS_asFunctionalElement(__VLS_elements.ul, __VLS_elements.ul)({
        ...{ class: "suggestions" },
    });
    for (const [city, id] of __VLS_getVForSourceType((__VLS_ctx.results))) {
        // @ts-ignore
        [results,];
        __VLS_asFunctionalElement(__VLS_elements.li, __VLS_elements.li)({
            ...{ onClick: (...[$event]) => {
                    if (!(__VLS_ctx.results.length))
                        return;
                    __VLS_ctx.selectCity(city);
                    // @ts-ignore
                    [selectCity,];
                } },
            key: (city.lat + city.lon),
            ...{ class: ({ active: id === __VLS_ctx.selectedIndex }) },
        });
        // @ts-ignore
        [selectedIndex,];
        (city.name);
        (city.country);
    }
}
/** @type {__VLS_StyleScopedClasses['header']} */ ;
/** @type {__VLS_StyleScopedClasses['header-title']} */ ;
/** @type {__VLS_StyleScopedClasses['city-selector']} */ ;
/** @type {__VLS_StyleScopedClasses['header-icon']} */ ;
/** @type {__VLS_StyleScopedClasses['search-img']} */ ;
/** @type {__VLS_StyleScopedClasses['header-input']} */ ;
/** @type {__VLS_StyleScopedClasses['suggestions']} */ ;
/** @type {__VLS_StyleScopedClasses['active']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup: () => ({
        query: query,
        results: results,
        selectedIndex: selectedIndex,
        searchCity: searchCity,
        selectCity: selectCity,
        moveUp: moveUp,
        moveDown: moveDown,
        chooseSelected: chooseSelected,
    }),
});
export default (await import('vue')).defineComponent({});
; /* PartiallyEnd: #4569/main.vue */
