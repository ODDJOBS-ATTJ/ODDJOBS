// logout.js
import axios from 'axios';
import Cookies from 'js-cookie';

const logout = async () => {
    try {
        // Send a request to the server to clear the session
        await axios.post('http://localhost:3000/accounts/logout');

        // Remove the userID cookie
        // (optional, you can keep it if needed for some purpose)
        Cookies.remove('userID');
    } catch (error) {
        console.error('Error during logout:', error);
    }
};

export default logout;
