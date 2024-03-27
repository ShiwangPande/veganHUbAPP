import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [authenticated, setAuthenticated] = useState(false);

    const signIn = () => {
        // You can implement your sign-in logic here
        setAuthenticated(true);
    };

    const signOut = () => {
        // You can implement your sign-out logic here
        setAuthenticated(false);
    };

    return (
        <AuthContext.Provider value={{ authenticated, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
