import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZVZ-ewnPqn0LPbq6yl7lg1Z7sA99PEBY",
  authDomain: "house-marketplace-app-6e053.firebaseapp.com",
  projectId: "house-marketplace-app-6e053",
  storageBucket: "house-marketplace-app-6e053.appspot.com",
  messagingSenderId: "186837069588",
  appId: "1:186837069588:web:d5a474c49be06751ee1c01"
}

// Initialize Firebase
initializeApp(firebaseConfig)
export const db = getFirestore()