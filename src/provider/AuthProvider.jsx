import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";


export const authContext = createContext();

const AuthProvider = ({children}) => {
    const[loading, setLoading] = useState(true)
    const [myUser, setMyUSer] = useState(null)
    const googleProvider = new GoogleAuthProvider()
    const googleSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
        .then(result => {
            const user = result.user;
            return updateProfile(user, {
                displayName : user.displayName,
            })
        })
    }
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email,password)
    }
    const updateUserProfile = (updateData) => {
        setLoading(true)
        return updateProfile(auth.currentUser, updateData)
    }
    const signInWithEmail = (email,password) => {
        setLoading(true) 
        return signInWithEmailAndPassword(auth, email, password)
    }
    const accountOut = () => {
        setLoading(true)
        return signOut(auth);
    }
    useEffect(() => {
        const unsubs =  onAuthStateChanged(auth, currentUser => {
            // console.log(currentUser)
            setMyUSer(currentUser)
            setLoading(false)
        })
        return () => unsubs()
    },[auth])
    const value = {
        createUser,
        signInWithEmail,
        myUser,
        setMyUSer,
        accountOut,
        loading,
        updateUserProfile,
        googleSignIn
        
    }
    return (
        <authContext.Provider value={value}>
            {
                children
            }
        </authContext.Provider>
    );
};

export default AuthProvider;