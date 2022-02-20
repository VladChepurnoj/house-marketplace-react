import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQUXXIU8tZs18StSJTtvhsjkoWfURSGEU",
  authDomain: "house-marketplace-app-67c67.firebaseapp.com",
  projectId: "house-marketplace-app-67c67",
  storageBucket: "house-marketplace-app-67c67.appspot.com",
  messagingSenderId: "102919287287",
  appId: "1:102919287287:web:2297979cbede80381f3ef2",
};

export const db = getFirestore();
