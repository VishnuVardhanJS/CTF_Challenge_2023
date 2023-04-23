import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

// const firebaseConfig = {
//   apiKey: process.env.react_app_apiKey,
//   authDomain: process.env.react_app_authDomain,
//   projectId: process.env.react_app_projectId,
//   storageBucket: process.env.react_app_storageBucket,
//   messagingSenderId: process.env.react_app_messagingSenderId,
//   appId: process.env.react_app_appId,
//   measurementId: process.env.react_app_measurementId
// };


const firebaseConfig = {
  apiKey: "AIzaSyA6U5QNJjNsVhY8ZWaRbs1BwsaRHyUI6Yo",
  authDomain: "web-hackathon-8c7b2.firebaseapp.com",
  projectId: "web-hackathon-8c7b2",
  storageBucket: "web-hackathon-8c7b2.appspot.com",
  messagingSenderId: "1033120757846",
  appId: "1:1033120757846:web:b7753f7ce5fe9d93c7e3f7",
  measurementId: "G-FWQ7MYC2FB"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export default db