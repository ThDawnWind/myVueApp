import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
const firebaseConfig = {
    apiKey: "AIzaSyDs8gZtFcwYy5MYt8Nyit8lnABxtO1FIIo",
    authDomain: "vue-todo-app-908bd.firebaseapp.com",
    databaseURL: "https://vue-todo-app-908bd-default-rtdb.firebaseio.com",
    projectId: "vue-todo-app-908bd",
    storageBucket: "vue-todo-app-908bd.firebasestorage.app",
    messagingSenderId: "676550370947",
    appId: "1:676550370947:web:58660d2470633a28ca9db6"
};
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
