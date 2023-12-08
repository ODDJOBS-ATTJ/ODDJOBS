import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export const useAuth = () => {
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        // Function to handle changes in local storage
        const handleStorageChange = () => {
            const userIdFromStorage = localStorage.getItem('userID');

            // Redirect to login if userID is not present in local storage
            if (!userIdFromStorage) {
                navigate('/login');
            }
        };

        // Add event listener for storage changes
        window.addEventListener('storage', handleStorageChange);

        // Cleanup function to remove the event listener when the component is unmounted
        return () => {
            window.removeEventListener('storage', handleStorageChange);
        };
    }, [navigate]);

    useEffect(() => {
        // Check if userID is already in local storage
        const userIdFromStorage = localStorage.getItem('userID');

        // Get userID from query parameters
        const params = new URLSearchParams(location.search);
        const userIdFromUrl = params.get('userID');

        // If userID is not present in local storage but is in the URL, store it
        if (!userIdFromStorage && userIdFromUrl) {
            localStorage.setItem('userID', userIdFromUrl);
        }

        // If userID is not present in local storage and not in the URL, redirect to login
        if (!userIdFromStorage && !userIdFromUrl) {
            navigate('/login');
        }
    }, [location, navigate]);
};
