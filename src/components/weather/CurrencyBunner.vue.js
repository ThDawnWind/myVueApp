import { onMounted, watch } from 'vue';
import { storeToRefs } from 'pinia';
import { useCurrencyStore } from '../../stores/currency';
const currencyStore = useCurrencyStore();
const { currencies, from, to, rate, updated, loading, error } = storeToRefs(currencyStore);
onMounted(() => {
    currencyStore.fetchCurrencies();
});
const fetchRate = () => {
    if (from.value && to.value) {
        currencyStore.fetchRate(from.value, to.value);
    }
};
watch([from, to], fetchRate, { immediate: true });
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_elements;
let __VLS_components;
let __VLS_directives;
/** @type {__VLS_StyleScopedClasses['rate-value']} */ ;
/** @type {__VLS_StyleScopedClasses['curr-info']} */ ;
/** @type {__VLS_StyleScopedClasses['rate-value']} */ ;
/** @type {__VLS_StyleScopedClasses['rate-date']} */ ;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "banner" },
});
__VLS_asFunctionalElement(__VLS_elements.h1, __VLS_elements.h1)({});
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "currency-list" },
});
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "curr-choice" },
});
__VLS_asFunctionalElement(__VLS_elements.label, __VLS_elements.label)({
    for: "fromCurrency",
});
__VLS_asFunctionalElement(__VLS_elements.select, __VLS_elements.select)({
    ...{ onChange: (__VLS_ctx.fetchRate) },
    id: "fromCurrency",
    value: (__VLS_ctx.from),
});
// @ts-ignore
[fetchRate, from,];
for (const [name, code] of __VLS_getVForSourceType((__VLS_ctx.currencies))) {
    // @ts-ignore
    [currencies,];
    __VLS_asFunctionalElement(__VLS_elements.option, __VLS_elements.option)({
        key: ('from-' + code),
        value: (code),
    });
    (code);
    (name);
}
__VLS_asFunctionalElement(__VLS_elements.label, __VLS_elements.label)({
    for: "toCurrency",
});
__VLS_asFunctionalElement(__VLS_elements.select, __VLS_elements.select)({
    ...{ onChange: (__VLS_ctx.fetchRate) },
    id: "toCurrency",
    value: (__VLS_ctx.to),
});
// @ts-ignore
[fetchRate, to,];
for (const [name, code] of __VLS_getVForSourceType((__VLS_ctx.currencies))) {
    // @ts-ignore
    [currencies,];
    __VLS_asFunctionalElement(__VLS_elements.option, __VLS_elements.option)({
        key: ('to-' + code),
        value: (code),
    });
    (code);
    (name);
}
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "curr-info" },
});
if (__VLS_ctx.rate && !__VLS_ctx.loading) {
    // @ts-ignore
    [rate, loading,];
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
        ...{ class: "rate-display" },
    });
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
        ...{ class: "rate-value" },
    });
    __VLS_asFunctionalElement(__VLS_elements.span, __VLS_elements.span)({
        ...{ class: "rate-arrow" },
    });
    __VLS_asFunctionalElement(__VLS_elements.span, __VLS_elements.span)({
        ...{ class: "from-currency" },
    });
    (__VLS_ctx.from);
    // @ts-ignore
    [from,];
    __VLS_asFunctionalElement(__VLS_elements.span, __VLS_elements.span)({
        ...{ class: "equals" },
    });
    __VLS_asFunctionalElement(__VLS_elements.span, __VLS_elements.span)({
        ...{ class: "to-currency" },
    });
    (__VLS_ctx.rate);
    (__VLS_ctx.to);
    // @ts-ignore
    [to, rate,];
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
        ...{ class: "rate-date" },
    });
    __VLS_asFunctionalElement(__VLS_elements.span, __VLS_elements.span)({
        ...{ class: "update-icon" },
    });
    (__VLS_ctx.updated);
    // @ts-ignore
    [updated,];
}
if (__VLS_ctx.loading) {
    // @ts-ignore
    [loading,];
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
        ...{ class: "loading-state" },
    });
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
        ...{ class: "spinner" },
    });
    __VLS_asFunctionalElement(__VLS_elements.span, __VLS_elements.span)({});
}
if (__VLS_ctx.error) {
    // @ts-ignore
    [error,];
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
        ...{ class: "error-state" },
    });
    __VLS_asFunctionalElement(__VLS_elements.span, __VLS_elements.span)({
        ...{ class: "error-icon" },
    });
    __VLS_asFunctionalElement(__VLS_elements.span, __VLS_elements.span)({
        ...{ class: "error-message" },
    });
    (__VLS_ctx.error);
    // @ts-ignore
    [error,];
}
/** @type {__VLS_StyleScopedClasses['banner']} */ ;
/** @type {__VLS_StyleScopedClasses['currency-list']} */ ;
/** @type {__VLS_StyleScopedClasses['curr-choice']} */ ;
/** @type {__VLS_StyleScopedClasses['curr-info']} */ ;
/** @type {__VLS_StyleScopedClasses['rate-display']} */ ;
/** @type {__VLS_StyleScopedClasses['rate-value']} */ ;
/** @type {__VLS_StyleScopedClasses['rate-arrow']} */ ;
/** @type {__VLS_StyleScopedClasses['from-currency']} */ ;
/** @type {__VLS_StyleScopedClasses['equals']} */ ;
/** @type {__VLS_StyleScopedClasses['to-currency']} */ ;
/** @type {__VLS_StyleScopedClasses['rate-date']} */ ;
/** @type {__VLS_StyleScopedClasses['update-icon']} */ ;
/** @type {__VLS_StyleScopedClasses['loading-state']} */ ;
/** @type {__VLS_StyleScopedClasses['spinner']} */ ;
/** @type {__VLS_StyleScopedClasses['error-state']} */ ;
/** @type {__VLS_StyleScopedClasses['error-icon']} */ ;
/** @type {__VLS_StyleScopedClasses['error-message']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup: () => ({
        currencies: currencies,
        from: from,
        to: to,
        rate: rate,
        updated: updated,
        loading: loading,
        error: error,
        fetchRate: fetchRate,
    }),
});
export default (await import('vue')).defineComponent({});
; /* PartiallyEnd: #4569/main.vue */
