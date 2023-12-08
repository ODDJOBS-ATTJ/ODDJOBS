// logout.js

const logout = () => {
    try {
        // Remove the userId from local storage
        localStorage.removeItem('userId');
    } catch (error) {
        console.error('Error during logout:', error);
    }
};

export default logout;
