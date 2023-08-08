// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    
  } from 'firebase/auth';

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3k6LO1gW707-VMvJ0vn1tsShNXCNFau4",
  authDomain: "crowndb-98361.firebaseapp.com",
  projectId: "crowndb-98361",
  storageBucket: "crowndb-98361.appspot.com",
  messagingSenderId: "992407619772",
  appId: "1:992407619772:web:0ac355bf048173d13268b9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account',
});

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  console.log(userAuth);
};

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);



// Firestore
export const db = getFirestore();

export const createUserDocumentFromAuth = async(userAuth) => {
  const userRef = doc(db,'users',userAuth.uid); //Path to the document
  // console.log(userRef);
  const userData = await getDoc(userRef);
  // console.log (userData);
  if (!userData.exists()){
    const {displayName, email, password} = userAuth;
    const createdAt = new Date();

    try{
      await setDoc (userRef, {
        displayName,
        email,
        password,
        createdAt,
      });
    }catch (error){
      console.log('error creating the user', error.message);
    }
  }
  return userData;
  
  
}

export const signUpForm = async (displayName, email, password) =>
await createUserWithEmailAndPassword(auth, displayName, email, password);


export const SignInForm = async (displayName, email, password)=>{
   await signInWithEmailAndPassword(auth, displayName, email, password)
  
}