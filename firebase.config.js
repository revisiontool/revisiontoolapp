import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection, doc, setDoc } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDtHdGMnqmZbmp_kE-wttYyGozEQ170btA",
  authDomain: "revision-tool-test.firebaseapp.com",
  projectId: "revision-tool-test",
  storageBucket: "revision-tool-test.appspot.com",
  messagingSenderId: "932542289406",
  appId: "1:932542289406:web:d145ba414dba261dc45caf",
  measurementId: "G-0V1Y6ZNG9M",
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const db = getFirestore(app);

const storage = getStorage(app);

const auth = getAuth(app);

export { app, db, storage, auth };
