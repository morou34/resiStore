import { initializeApp, getApps, firebase } from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBa9p_zf9YbRW6O32bY4i51XMxddthMU-I",
  authDomain: "resistore-d02ed.firebaseapp.com",
  projectId: "resistore-d02ed",
  storageBucket: "resistore-d02ed.appspot.com",
  messagingSenderId: "567386956475",
  appId: "1:567386956475:web:485fe4c1d5a583627e3f9e",
  measurementId: "G-LF41PBJRZQ",
};

if (!getApps().length) {
}

const app = initializeApp(firebaseConfig);
// Auth exports
export const auth = getAuth(app);
export const googleAuthPro = new GoogleAuthProvider();

// // Firestore exports
// export const firestore = firebase.firestore();

// // Storage exports
// export const storage = firebase.storage();
