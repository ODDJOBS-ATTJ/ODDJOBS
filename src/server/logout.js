// logout.js

const logout = () => {
    try {
        // Remove the userID from local storage
        localStorage.removeItem('userID');
    } catch (error) {
        console.error('Error during logout:', error);
    }
};

export default logout;
