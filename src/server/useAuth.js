import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const useAuth = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const userId = localStorage.getItem('userId');

        // Redirect to login if userId is not present (user not authenticated)
        if (!userId) {
            navigate('/login');
        }
    }, [navigate]);
};
