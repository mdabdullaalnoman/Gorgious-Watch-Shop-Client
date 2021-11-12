import { initializeApp } from "firebase/app";
import firebaseConfig from "./FirebaseConfig";

const firebaseInitialize = () => {
    initializeApp(firebaseConfig)
}

export default firebaseInitialize;