// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyCKYEbkJsFt1_FlHTegEMF0vM20hvpYNl0",

  authDomain: "trello-login-80c4b.firebaseapp.com",

  projectId: "trello-login-80c4b",

  storageBucket: "trello-login-80c4b.appspot.com",

  messagingSenderId: "471160231302",

  appId: "1:471160231302:web:a0f8699b173b9991778807"

};


  
 
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;