import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBnvTRAzKcMJkPO3Qm3o-ILJhtKVWvdfkw",
    authDomain: "school-6b756.firebaseapp.com",
    databaseURL: "https://school-6b756.firebaseio.com",
    projectId: "school-6b756",
    storageBucket: "school-6b756.appspot.com",
    messagingSenderId: "423607813732",
    appId: "1:423607813732:web:081b9f44723a829bd00171",
    measurementId: "G-N2E7NM979Q"
  };

  // Initialize Firebase and Firestore
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
export {db}