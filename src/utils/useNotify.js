import { useToast, POSITION } from "vue-toastification";
const toast = useToast();
export function notify(type, message) {
    toast[type](message, {
        position: POSITION.TOP_CENTER,
        timeout: 2000,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        draggablePercent: 0.6,
        hideProgressBar: true,
    });
}
