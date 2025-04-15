// services/zohoService.js
const axios = require('axios');

let accessToken = null;
let tokenExpiry = null;

async function refreshAccessToken() {
  try {
    const response = await axios.post('https://accounts.zoho.com/oauth/v2/token', null, {
      params: {
        refresh_token: process.env.ZOHO_REFRESH_TOKEN,
        client_id: process.env.ZOHO_CLIENT_ID,
        client_secret: process.env.ZOHO_CLIENT_SECRET,
        grant_type: 'refresh_token'
      }
    });

    accessToken = response.data.access_token;
    tokenExpiry = Date.now() + (response.data.expires_in * 1000);
    return accessToken;

  } catch (error) {
    console.error('Token refresh failed:', error.response?.data || error.message);
    throw new Error('Failed to refresh Zoho token');
  }
}

module.exports = {
  refreshAccessToken,
  getAccessToken: () => accessToken,
  isTokenValid: () => tokenExpiry && Date.now() < tokenExpiry
};