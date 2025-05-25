import { createContext, useContext, useState, ReactNode } from 'react';
import { loginRequest } from "../integrations/api";

interface AuthContextType {
    user: any;
    login: (username: string, password: string) => Promise<void>;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<string | object | null>(null);

    const login = async (username: string, password: string) => {
        try {
            const response = await loginRequest(username, password);
            if (!response) {
                throw new Error("Login falhou");
            }
            localStorage.setItem("user", JSON.stringify(response));
            setUser(response);
        } catch (error) {
            console.error("Erro ao fazer login:", error);
            throw error;
        }
    };

    const logout = () => {
        localStorage.removeItem("user");
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};


