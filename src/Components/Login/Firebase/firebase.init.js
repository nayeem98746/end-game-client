import firebaseConfig from "./firebase.config"
import { initializeApp } from "firebase/app";

const initializeaFirebase = () => {
    initializeApp(firebaseConfig)
}

export default initializeaFirebase;