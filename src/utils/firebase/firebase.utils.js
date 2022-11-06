import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCTbM2URjJ8vjknb7AVL6abYkv0B_MsN_M",
  authDomain: "crown-clothing-db-f0d2b.firebaseapp.com",
  projectId: "crown-clothing-db-f0d2b",
  storageBucket: "crown-clothing-db-f0d2b.appspot.com",
  messagingSenderId: "1058899424230",
  appId: "1:1058899424230:web:b5e248e1fda84b4c261c27",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
