import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyC71moc6SFOIKyHuEB-haRlQut6FXhqLM8",
  authDomain: "hotel-management-8ba1e.firebaseapp.com",
  databaseURL: "https://hotel-management-8ba1e-default-rtdb.firebaseio.com",
  projectId: "hotel-management-8ba1e",
  storageBucket: "hotel-management-8ba1e.appspot.com",
  messagingSenderId: "588903595070",
  appId: "1:588903595070:web:224588a80df5deca3ca56f"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);