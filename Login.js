
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";



const firebaseConfig = {
    apiKey: "AIzaSyDuPH086ljO4pkxWEhGkGLPD0mHOmzIshw",
    authDomain: "ecom-d317e.firebaseapp.com",
    projectId: "ecom-d317e",
    storageBucket: "ecom-d317e.appspot.com",
    messagingSenderId: "9570313314",
    appId: "1:9570313314:web:bbac208ee2f49fc016dd3b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


const submit = document.getElementById('submit')


submit.addEventListener('click', (event) => {
    event.preventDefault()
    const email = document.getElementById('Email').value
    const password = document.getElementById('Password').value

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Logging in 
            const user = userCredential.user;
            window.location.href = 'Home.html';
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });
})