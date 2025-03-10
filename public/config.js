const API_KEY = 'YOUR_API_KEY';
const API_SECRET = 'YOUR_API_SECRET';

async function getAccessToken() {
    const response = await fetch('https://test.api.amadeus.com/v1/security/oauth2/token', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams({
            'grant_type': 'client_credentials',
            'hJh4hnEqesHbbG4DwFCJSR9A2H72B8iJ': API_KEY, 
            'eGPNGmTKDlh12gID': API_SECRET  
        })
    });

    const data = await response.json();
    return data.access_token;
}