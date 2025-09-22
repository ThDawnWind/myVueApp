import axios from "axios";
const API_KEY = "687ce33a9a-eacca9f43a-t2nax5";
const BASE_RATES_URL = "https://api.primeapi.io/fetch-multi";
const BASE_ALL_CURR_URL = `https://api.primeapi.io/fx/currencies?api_key=${API_KEY}`;
export const getRates = async (from = "USD", to = "RUB") => {
    try {
        const res = await axios.get(BASE_RATES_URL, {
            params: {
                from,
                to,
                api_key: API_KEY,
            },
        });
        return res.data;
    }
    catch (err) {
        console.error("Ошибка при получении курсов валют", err);
        return {};
    }
};
export const getAllCurrencies = async () => {
    try {
        const res = await axios.get(BASE_ALL_CURR_URL);
        return res.data.currencies;
    }
    catch (err) {
        console.error("Ошибка при получении списка валют", err);
        return [];
    }
};
