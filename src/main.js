import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAm3AUTNsc-zjn4Tsz6hBylM_kmhmXVX74",
  authDomain: "login-43710.firebaseapp.com",
  projectId: "login-43710",
  storageBucket: "login-43710.firebasestorage.app",
  messagingSenderId: "192237363446",
  appId: "1:192237363446:web:a7d03b977b7b4944c50cd7"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const app = createApp(App)
app.use(router)

app.mount('#app')