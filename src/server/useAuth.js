import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Cookies from 'js-cookie';

export const useAuth = () => {
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const userIdFromCookie = Cookies.get('userID');

        // Redirect to login if userID is not present in cookies
        if (!userIdFromCookie) {
            navigate('/login');
        }

        // Add event listener for storage changes (optional)
        const handleStorageChange = () => {
            const userIdFromStorage = localStorage.getItem('userID');
            if (!userIdFromStorage) {
                navigate('/login');
            }
        };

        window.addEventListener('storage', handleStorageChange);

        return () => {
            window.removeEventListener('storage', handleStorageChange);
        };
    }, [navigate]);

    useEffect(() => {
        const userIdFromCookie = Cookies.get('userID');
        const userIdFromUrl = new URLSearchParams(location.search).get('userID');

        if (!userIdFromCookie && userIdFromUrl) {
            Cookies.set('userID', userIdFromUrl);
        }

        if (!userIdFromCookie && !userIdFromUrl) {
            navigate('/login');
        }
    }, [location, navigate]);
};
