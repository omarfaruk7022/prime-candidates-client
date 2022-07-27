import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDz93kQRdUjprARoPVapXTepFj6at_kyMU",
  authDomain: "prime-candidates-000.firebaseapp.com",
  projectId: "prime-candidates-000",
  storageBucket: "prime-candidates-000.appspot.com",
  messagingSenderId: "608369417294",
  appId: "1:608369417294:web:f3743fb6859359b97eb71f"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;