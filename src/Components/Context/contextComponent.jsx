import { createContext, useEffect, useState } from "react";
import {onAuthStateChanged} from "firebase/auth";
import { auth, createUserDocumentFromAuth} from "../Utility/Firebase/firebaseDB";

export const  UserContext = createContext({
        CurrentUser: null, 
        setCurrentUser: null
    });

export const  UserProvider = ({children})=>{
    const[CurrentUser, setCurrentUser] = useState();

    useEffect((user)=>{
        const unsubscribe = onAuthStateChanged(auth, (user)=>{
            if (user) {
                createUserDocumentFromAuth(user)
            }
        })
        
        setCurrentUser(user);
        return unsubscribe;
    },[])

   return <UserContext.Provider value={{CurrentUser, setCurrentUser}}>
        {children}
    </UserContext.Provider>
}