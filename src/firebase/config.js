import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyA4YWkiQPVH1ZprU9ivwBrWUaqolooJgXc",
  authDomain: "tabaqueria-rodriguez-romano.firebaseapp.com",
  projectId: "tabaqueria-rodriguez-romano",
  storageBucket: "tabaqueria-rodriguez-romano.firebasestorage.app",
  messagingSenderId: "952089829294",
  appId: "1:952089829294:web:2088e024e0c9abecf0723f",
  measurementId: "G-FW11F3LPGK",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
