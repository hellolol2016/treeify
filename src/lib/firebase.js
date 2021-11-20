import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDgzTgoxxX4IlG5kfHRovpbj8pJaQnShVg",
  authDomain: "treeify-88ff8.firebaseapp.com",
  projectId: "treeify-88ff8",
  messagingSenderId: "325938476338",
  appId: "1:325938476338:web:d67d129bb4acc1ad21532b",
  measurementId: "G-1C4F6ZK3HX",
  databaseURL: "https://treeify-88ff8-default-rtdb.firebaseio.com",
  storageBucket: "treeify-88ff8.appspot.com",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);