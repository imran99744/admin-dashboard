import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC4PAGd9LY-QG-W0LnLwECMrghpAqRNeYQ",
  authDomain: "admin-dashboard-c52f2.firebaseapp.com",
  projectId: "admin-dashboard-c52f2",
  storageBucket: "admin-dashboard-c52f2.appspot.com",
  messagingSenderId: "70323162036",
  appId: "1:70323162036:web:9b9bd81e702f90210fc0e1",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
