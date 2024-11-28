import {getFirestore} from '@firebase/firestore'
import { getApp, getApps, initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyDa2uQD7Fw6v1aYxLGDGgR8scls38vqv_8",
  authDomain: "my-gpt-24477.firebaseapp.com",
  projectId: "my-gpt-24477",
  storageBucket: "my-gpt-24477.firebasestorage.app",
  messagingSenderId: "802744485426",
  appId: "1:802744485426:web:43ba81f5621f14c3fede2b"
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);
export {db};