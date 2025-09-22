// stores/currency.ts
import { defineStore } from "pinia";
import { getAllCurrencies, getRates } from "../services/currencyService";
import { toLocalDateFromUTC } from "../utils/formatDate";
export const useCurrencyStore = defineStore("currency", {
    state: () => ({
        currencies: {},
        from: "USD",
        to: "RUB",
        rate: null,
        updated: "",
        loading: false,
        error: null,
    }),
    actions: {
        async fetchCurrencies() {
            this.loading = true;
            try {
                const res = await getAllCurrencies();
                this.currencies = res;
            }
            catch (err) {
                this.error = "Не удалось загрузить список валют";
            }
            finally {
                this.loading = false;
            }
        },
        async fetchRate(from, to) {
            this.loading = true;
            try {
                const res = await getRates(from, to);
                this.rate = Object.values(res.results) ? Number(Object.values(res.results)) : null;
                this.updated = toLocalDateFromUTC(res.updated);
                this.loading = false;
            }
            catch (err) {
                this.error = "Не удалось получить курс валют";
            }
            finally {
                this.loading = false;
            }
        },
    },
});
