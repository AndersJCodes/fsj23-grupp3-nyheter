
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
import validation,{removeValidation} from "./validation";


function registerNewUser(){
    const joinBtn = document.querySelector("#registerBtn");
    
    joinBtn.addEventListener("click",(e)=>{
        e.preventDefault();
        const joinEmail= document.querySelector("#joinEmail");
        const joinPassword = document.querySelector("#joinPassword");

        registerUserToFirebase(joinEmail,joinPassword)

    }); 
        
}

function signInUser(){
    const signInBtn = document.querySelector("#signInBtn");
    
    signInBtn.addEventListener("click",(e)=>{
        e.preventDefault();
        const signInEmail = document.querySelector("#signInEmail");
        const signInPassword = document.querySelector("#signInPassword");

        authenticatUserInFirebase(signInEmail,signInPassword);
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

const registerUserToFirebase = async(joinEmail,joinPassword) =>
{
    const userEmail = joinEmail.value;
    const userPassword = joinPassword.value;

    createUserWithEmailAndPassword(auth,userEmail,userPassword)
    .then(()=>{
        alert("Your account has been created!")
    })
    .catch((error) => {
        validation('joinForm',error.message);
        console.log(error.message);
        
    });
}

const authenticatUserInFirebase = async(signInEmail,signInPassword) =>
{
    const userEmail = signInEmail.value;
    const userPassword = signInPassword.value;
    signInWithEmailAndPassword(auth,userEmail,userPassword)
    .then(()=>{
        removeValidation(document.querySelector(`#signInForm`));
    })
    .catch((error) => {

        validation('signInForm',error.message);
        console.log(errorCode + errorMessage);
    });

}

const logoutUser = ()=>
{   
    

    signOut(auth)
    .then(()=>
    {
        alert('You signed out')
        
    })
    .catch((err)=>{
        console.log(err.message)
    })
}

onAuthStateChanged(auth,(user)=>{
    const signInBtn = document.querySelector('#signInModalBtn');
    const joinBtn = document.querySelector('#joinModalBtn');
    const signOutBtn = document.querySelector('#signOutBtn');
    const savedNews = document.querySelector('#savedNews');
    if(user===null)
    {
        
        signInBtn.classList.remove("d-none");
        joinBtn.classList.remove("d-none");
        signOutBtn.classList.add("d-none");
        savedNews.classList.add("d-none");
        
    }
    if(user!==null)
    {
        savedNews.classList.remove("d-none");
        signInBtn.classList.add("d-none");
        joinBtn.classList.add("d-none");
        signOutBtn.classList.remove("d-none");
    }
})

function authentication(){
    registerNewUser();
    signInUser();
    signOutUser();
}



export default authentication