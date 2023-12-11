const logoutButtonEl = document.getElementById('logout-button');

//----------------------------//
//- Event Listener - Log Out -//
//----------------------------//

document.addEventListener('DOMContentLoaded', () => {

    // if (logologoutButtonElutButton) {
        logoutButtonEl.addEventListener('click', async () => {
        try {
        const response = await fetch('/api/users/logout', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            console.log('Logout successful');
            document.location.replace('/');
        } else {
            console.log('Logout failed');
            alert('Failed to log out');
        }
        } catch (error) {
        console.error('Failed to log out:', error);
        }
    });
    // }
});