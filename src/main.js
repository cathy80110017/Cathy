import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase'
import "firebase/firestore"

const app = createApp(App)

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAqx6UK7jqeLKel0D46uVsc2IW_7JNQYYE",
    authDomain: "todolist-51339.firebaseapp.com",
    // databaseURL: "https://todolist-51339.firebaseio.com",
    projectId: "todolist-51339",
    storageBucket: "todolist-51339.appspot.com",
    messagingSenderId: "105802979582",
    appId: "1:105802979582:web:c84e5b8a61ed97ce656daf",
    // measurementId: "G-M479K19MD8"
  };

firebase.initializeApp(firebaseConfig)
export const db = firebase.firestore()
export default firebase;

app.use(router)
app.mount('#app')