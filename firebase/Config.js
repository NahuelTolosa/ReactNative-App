import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAnbjnerH4Cu3aHNua2zSMKzzn_hqx3tZQ",
    authDomain: "react-native-app-d42bc.firebaseapp.com",
    projectId: "react-native-app-d42bc",
    storageBucket: "react-native-app-d42bc.appspot.com",
    messagingSenderId: "421294859787",
    appId: "1:421294859787:web:3c09a7bea57b6344ae490e"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth()