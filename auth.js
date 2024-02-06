
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



// sign in id:s
const signInEmail = document.querySelector("#signIn");
const signInPassword = document.querySelector("#signInPassword");
const signInForm = document.querySelector("#signInForm");
const signInBtn = document.querySelector("#signInBtn");

// let count = 0;



function join(){
    // if(count<1)
    // {
    //     const joinEmail= document.querySelector("#joinEmail");
    //     const joinPassword = document.querySelector("#joinPassword");
    //     const joinForm = document.querySelector("#joinForm");   
    //     const joinBtn = document.querySelector("#registerBtn");
    
        
    //     joinBtn.addEventListener("click",userJoin(joinEmail,joinPassword)); 
    //     count++
    // }
    
    const joinBtn = document.querySelector("#registerBtn");

    console.log("join function loaded");
    
    joinBtn.addEventListener("click",(e)=>{
        e.preventDefault();
        const joinEmail= document.querySelector("#joinEmail");
        const joinPassword = document.querySelector("#joinPassword");
        const joinForm = document.querySelector("#joinForm");  
        userJoin(joinEmail,joinPassword)
        console.log("email: "+ joinEmail.value);
        console.log("password: "+ joinPassword.value);
    }); 
        
 
}

// auth content
// const secretContent = document.querySelector("#article");

// secretContent.style.display = "none";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const userJoin = async(joinEmail,joinPassword) =>
{
    console.log("inside userJoin");
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



export {join,userJoin}