
// Import the functions you need from the SDKs you need
import {firebaseConfig} from "./configApi";
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
getAuth,
createUserWithEmailAndPassword,
signInWithEmailAndPassword,
onAuthStateChanged,
signOut
} from "https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js";



function registerNewUser(){
    const joinBtn = document.querySelector("#registerBtn");
    
    joinBtn.addEventListener("click",(e)=>{
        e.preventDefault();
        const joinEmail= document.querySelector("#joinEmail");
        const joinPassword = document.querySelector("#joinPassword");

        registerUserToFirebase(joinEmail,joinPassword)
        console.log("email: "+ joinEmail.value);
        console.log("password: "+ joinPassword.value);
    }); 
        
}

function signInUser(){
    const signInBtn = document.querySelector("#signInBtn");
    
    signInBtn.addEventListener("click",(e)=>{
        e.preventDefault();
        const signInEmail = document.querySelector("#signInEmail");
        const signInPassword = document.querySelector("#signInPassword");

        authenticatUserInFirebase(signInEmail,signInPassword);
        console.log("email: "+ signInEmail.value);
        console.log("password: "+ signInPassword.value);
    }); 
        
}

function signOutUser(){
    const signOutBtn = document.querySelector("#signOutBtn");
    
    signOutBtn.addEventListener("click",(e)=>{
        e.preventDefault();
        logoutUser();
    }); 
        
}

// auth content
// const secretContent = document.querySelector("#article");

// secretContent.style.display = "none";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const signInBtn = document.querySelector('#signInModalBtn');
const joinBtn = document.querySelector('#joinModalBtn');
const signOutBtn = document.querySelector('#signOutBtn');

const registerUserToFirebase = async(joinEmail,joinPassword) =>
{
    console.log("inside registerUserToFirebase");
    const userEmail = joinEmail.value;
    const userPassword = joinPassword.value;

    createUserWithEmailAndPassword(auth,userEmail,userPassword)
    .then((userCredential)=>{
        const user = userCredential.user;
        console.log(user);
        alert("Your account has been created!")
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode + errorMessage)
    });
}

const authenticatUserInFirebase = async(signInEmail,signInPassword) =>
{
    const userEmail = signInEmail.value;
    const userPassword = signInPassword.value;
    signInWithEmailAndPassword(auth,userEmail,userPassword)
    .then((userCredential)=>{
        const user = userCredential.user;
        console.log(user);
        alert("User logged in: ", user.email);

        signInBtn.classList.add("d-none");
        joinBtn.classList.add("d-none");
        signOutBtn.classList.remove("d-none");
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode + errorMessage)
    });

}

const logoutUser = ()=>
{   
    

    signOut(auth)
    .then(()=>
    {
        alert('you signed out')
        signInBtn.classList.remove("d-none");
        joinBtn.classList.remove("d-none");
        signOutBtn.classList.add("d-none");
    })
    .catch((err)=>{
        console.log(err.message)
    })
}

function authentication(){
    registerNewUser();
    signInUser();
    signOutUser();
}



export default authentication