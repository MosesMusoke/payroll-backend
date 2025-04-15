const axios = require('axios');
const http = require("https");

const { recordZohoExpense } = require('../zohoService');
const { refreshAccessToken, getAccessToken, isTokenValid } = require('../services/zohoService');

let zohoTokens = { access_token: null, refresh_token: null };

const ZOHO_CLIENT_ID = '1000.JIQELZ079UOV394HCO0CNYMZZTJJ0Q';
const ZOHO_CLIENT_SECRET = '14482eaee524121306662b0e4b45e88263faba4029';
const ZOHO_REDIRECT_URI = 'http://localhost:3000/zoho/callback';

exports.zohoAuth = (req, res) => {
  const authUrl = `https://accounts.zoho.com/oauth/v2/auth?scope=ZohoBooks.fullaccess.all&client_id=${ZOHO_CLIENT_ID}&response_type=code&access_type=offline&redirect_uri=${ZOHO_REDIRECT_URI}`;
  res.redirect(authUrl);
};

exports.zohoCallback = async (req, res) => {
  const code = req.query.code;
  try {
    const response = await axios.post('https://accounts.zoho.com/oauth/v2/token', null, {
      params: {
        code,
        client_id: ZOHO_CLIENT_ID,
        client_secret: ZOHO_CLIENT_SECRET,
        redirect_uri: ZOHO_REDIRECT_URI,
        grant_type: 'authorization_code',
      }
    });

    console.log("response")
    console.log(response)

    zohoTokens.access_token = response.data.access_token;
    zohoTokens.refresh_token = response.data.refresh_token;
    console.log(zohoTokens)

    res.send("✅ Zoho Books connected!");
  } catch (error) {
    console.error("❌ Error exchanging token:", error.response?.data || error.message);
    res.status(500).send("Failed to connect to Zoho.");
  }
};

exports.zohoRefreshToken = async (req, res) => {
  try {
    const response = await axios.post('https://accounts.zoho.com/oauth/v2/token', null, {
      params: {
        refresh_token: zohoTokens.refresh_token,
        client_id: process.env.ZOHO_CLIENT_ID,
        client_secret: process.env.ZOHO_CLIENT_SECRET,
        grant_type: 'refresh_token',
      }
    });

    zohoTokens.access_token = response.data.access_token;
    
    // Add expiration time (usually 1 hour)
    zohoTokens.expires_at = Date.now() + (response.data.expires_in * 1000);
    
    res.json({
      success: true,
      message: "✅ Token refreshed successfully",
      expires_at: new Date(zohoTokens.expires_at).toLocaleString()
    });
  } catch (error) {
    console.error("Token refresh error:", error.response?.data || error.message);
    res.status(500).json({
      success: false,
      error: "Failed to refresh token. Check server logs."
    });
  }
};

exports.recordExpenses = async (req, res) => {
  const { employees } = req.body;

  if (!employees || !Array.isArray(employees)) {
    return res.status(400).send("Invalid employees data");
  }

  const totalGross = employees.reduce((sum, emp) => sum + (emp.staffBasicPay || 0), 0);
  const totalContributions = employees.reduce((sum, emp) => sum + (emp.PAYE || 0), 0);

  try {
    await recordZohoExpense({
      amount: 5000,
      accountId: '6189498000000093035',
      description: "Payroll - Total Gross Salaries",
      accessToken: zohoTokens.access_token,
    });

    await recordZohoExpense({
      amount: 5000,
      accountId: '6189498000000093041',
      description: "Payroll - Total Contributions",
      accessToken: zohoTokens.access_token,
    });

    res.send({ message: "✅ Expenses recorded in Zoho Books" });
  } catch (error) {
    console.error("❌ Error recording expense:", error);
    res.status(500).send({ error: "❌ Failed to record expenses" });
  }
};

// exports.createZohoExpense = async (req, res) => {
//   try {
//     // Get data from request body
//     const { description, amount } = req.body;

//     // Construct payload
//     const expensePayload = {
//       account_id: 6189498000000093035,
//       date: new Date().toISOString().split('T')[0],
//       amount: 250000,
//       description: description,
//       date: "2025-09-01",
//     };

//     // Get fresh access token
//     // const accessToken = await refreshAccessToken();

//     const options = {
//       method: 'POST',
//       headers: {
//         Authorization: 'Zoho-oauthtoken 1000.6c5005fa82308217a5c97ef6a0fd81bf.3da3f494e5268b1fc8c86e0a8d57be63',
//         'content-type': 'application/json'
//       },
//       body: req.body
//     };
    
//     fetch('https://www.zohoapis.com/books/v3/expenses?organization_id=884681928', options)
//       .then(response => response.json())
//       .then(response => console.log(response))
//       .catch(err => console.error(err));

//     // const options = {
//     //   method: 'POST',
//     //   headers: {
//     //     Authorization: 'Zoho-oauthtoken 1000.10c34ca821630b79468ecb69874d292d.4eee1715f6ea93d55f50b85a3dff9945',
//     //     'content-type': 'application/json'
//     //   },
//     //   body: JSON.stringify(expensePayload)
//     // };
    
//     // fetch('https://www.zohoapis.com/books/v3/expenses?organization_id=884681928', options)
//     //   .then(response => response.json())
//     //   .then(response => console.log(response))
//     //   .catch(err => console.error(err));

//     // res.json({
//     //   success: true,
//     //   data: response.data,
//     //   message: 'Expense created successfully'
//     // });

//   } catch (error) {
//     console.error('Expense creation error:', error.response?.data || error.message);
//     res.status(500).json({
//       success: false,
//       error: 'Failed to create expense',
//       details: error.response?.data || error.message
//     });
//   }
// };
