import { useState, useEffect } from 'react';

export const useAuth = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const auth = localStorage.getItem('auth') === 'true';
        setIsAuthenticated(auth);
    }, []);

    return { isAuthenticated };
};