// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBkdGH9FC7S5nmAC_J9KMYiZQg6pQyDx0w",
  authDomain: "dragon-news-f26c1.firebaseapp.com",
  projectId: "dragon-news-f26c1",
  storageBucket: "dragon-news-f26c1.appspot.com",
  messagingSenderId: "1053548260354",
  appId: "1:1053548260354:web:d07f83dc53a189d98ccb1b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;