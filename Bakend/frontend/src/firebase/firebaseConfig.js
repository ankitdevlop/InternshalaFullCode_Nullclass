import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth,GoogleAuthProvider} from "firebase/auth"

  const firebaseConfig = {
    apiKey: "AIzaSyBeq5uY4ly8zyI5xoCsYJV6-lSeLi9_LRo",
    authDomain: "demointernshala.firebaseapp.com",
    projectId: "demointernshala",
    storageBucket: "demointernshala.appspot.com",
    messagingSenderId: "156568512891",
    appId: "1:156568512891:web:c058c0a44256bb0fd635de",
    measurementId: "G-YC41SBSZ2S"
  };


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
const provider=new GoogleAuthProvider();
export {auth,provider};