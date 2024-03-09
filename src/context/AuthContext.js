import React, { useEffect, createContext, usestate } from 'react'
import { auth } from '../firebase'
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";


const AuthContext = React.createContext()
export const provider = new GoogleAuthProvider();

export function useAuth() {
    return React.useContext(AuthContext)
}

export function AuthProvider({ children }) {

    const [currentUser, setCurrentUser] = React.useState()
    const [loading, setLoading] = React.useState(true)

    function signup(email, password) {
        return auth.createUserWithEmailAndPassword(email, password)
    }
    function login(email, password) {
        return auth.signInWithEmailAndPassword(email, password)
    }
    function logout() {
        return auth.signOut()
    }
    function resetPassword(email) {
        return auth.sendPasswordResetEmail(email)
    }
    function updateEmail(email) {
        return currentUser.updateEmail(email)
    }
    function updatePassword(password) {
        return currentUser.updatePassword(password)
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
            setLoading(false)
        })

        return unsubscribe

    }, [])




    const value = {
        currentUser,
        login,
        signup,
        logout,
        resetPassword,
        updateEmail,
        updatePassword
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}

export const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
        const name = result.user.displayName;
        const email = result.user.email;
        const profilePic = result.user.photoURL;
        localStorage.setItem("user", JSON.stringify(auth.currentUser));
        localStorage.setItem("name", name);
        localStorage.setItem("email", email);
        localStorage.setItem("profilePic", profilePic);

    }).catch((error) => {
        console.log(error);
    });
}

export const signOutwithGoogle = () => {
    signOut(auth)
        .then(() => {
            localStorage.removeItem("user")
            localStorage.removeItem("name");
            localStorage.removeItem("email");
            localStorage.removeItem("profilePic");
        })
        .catch(error => {
            localStorage.removeItem("user")
            localStorage.removeItem("name");
            localStorage.removeItem("email");
            localStorage.removeItem("profilePic");
        })
}
