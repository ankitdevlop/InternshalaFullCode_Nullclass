import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth,GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyCfhQc5ekDc4yoaLr5rJu3fZWOK6wKR_QM",
  authDomain: "internshala-a3397.firebaseapp.com",
  projectId: "internshala-a3397",
  storageBucket: "internshala-a3397.appspot.com",
  messagingSenderId: "488150698672",
  appId: "1:488150698672:web:0149e68591bd5330aec975",
  measurementId: "G-JXN9ZMC473"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
const provider=new GoogleAuthProvider();
export {auth,provider};