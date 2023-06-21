// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: `AIzaSyBzchJNACW3QzMFZva-WcBvhiJMnTSYNNw`,
  authDomain: `house-market-place-9200d.firebaseapp.com`,
  projectId: `house-market-place-9200d`,
  storageBucket: `house-market-place-9200d.appspot.com`,
  messagingSenderId: `117937877892`,
  appId: `1:117937877892:web:0c31504c2b9fda789ae3d1`
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db= getFirestore()