import React, { createContext, useContext, useState } from 'react';

interface AuthContextType {
    token: string | null;
    setToken: (token: string | null) => void;
    login: (token: string) => void;
    isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [token, setToken] = useState<string | null>(null);

    const login = (token: string) => {
        setToken(token);
        localStorage.setItem('token', token);
    };

    const isAuthenticated = Boolean(token);

    return (
        <AuthContext.Provider value={{ token, setToken, login, isAuthenticated }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}