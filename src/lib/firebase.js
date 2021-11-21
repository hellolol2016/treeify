import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyADF9Kr0JEfMH6Ztv6cgYHyagpAaZW5xhs",
  authDomain: "treeify-103a1.firebaseapp.com",
  projectId: "treeify-103a1",
  messagingSenderId: "1037652291454",
  appId: "1:1037652291454:web:ae572390061ae7a9594d2f",
  measurementId: "G-FP5R36THGY",
  databaseURL: "https://treeify-88ff8-default-rtdb.firebaseio.com",
  storageBucket: "treeify-103a1.appspot.com",
};



const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);