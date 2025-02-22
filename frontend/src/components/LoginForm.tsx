const login = async (credentials: { username: string; password: string }) => {
    try {
        // First get CSRF token
        const tokenResponse = await fetch('http://localhost:3001/api/csrf-token', {
            credentials: 'include'
        });
        const { csrfToken } = await tokenResponse.json();

        // Then make login request with token
        const response = await fetch('http://localhost:3001/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'CSRF-Token': csrfToken
            },
            credentials: 'include',
            body: JSON.stringify(credentials)
        });

        if (!response.ok) {
            throw new Error('Login failed');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Login error:', error);
        throw error;
    }
};