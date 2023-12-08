// useAuth.js
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

export const useAuth = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const checkAuth = () => {
            const userIdFromCookie = Cookies.get('userID');

            // Redirect to login if userID is not present in cookies
            if (!userIdFromCookie) {
                navigate('/login');
            }
        };

        // Check auth status on mount
        checkAuth();

        // Add event listener for storage changes
        window.addEventListener('storage', checkAuth);

        // Clean up event listener on unmount
        return () => {
            window.removeEventListener('storage', checkAuth);
        };
    }, [navigate]);
};