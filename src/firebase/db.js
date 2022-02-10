import { initializeApp } from 'firebase/app';
import {getAuth, signOut} from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyD85wI1kaNR28rkXMZ04z1A5Ez3c4G1Cbc",
    authDomain: "login-72768.firebaseapp.com",
    projectId: "login-72768",
    storageBucket: "login-72768.appspot.com",
    messagingSenderId: "328185407927",
    appId: "1:328185407927:web:73c6ffdc3c7b1a49fb6032"
};

const app = initializeApp(firebaseConfig);


export const authentication= getAuth(app);


