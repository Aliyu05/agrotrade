
import { initializeApp,getApp,getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDH0XQ0hgRhmZXsVrvf2tsr-zTvhPm-PV0",
    authDomain: "dotted-memory-400221.firebaseapp.com",
    projectId: "dotted-memory-400221",
    storageBucket: "dotted-memory-400221.appspot.com",
    messagingSenderId: "149599523621",
    appId: "1:149599523621:web:ec38401d08e795d9bd00cc"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);
const storage = getStorage(app);

export { db,storage }