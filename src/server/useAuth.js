import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export const useAuth = () => {
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        // Check if userID is already in local storage
        const userIdFromStorage = localStorage.getItem('userId');

        // If userID is present in local storage, do nothing
        if (userIdFromStorage) {
            return;
        }

        // Get userID from query parameters
        const params = new URLSearchParams(location.search);
        const userIdFromUrl = params.get('userID');

        // If userID is present in the URL, store it in local storage
        if (userIdFromUrl) {
            localStorage.setItem('userId', userIdFromUrl);
        } else {
            // Redirect to login if userID is not present (user not authenticated)
            navigate('/login');
        }
    }, [location, navigate]);
};
