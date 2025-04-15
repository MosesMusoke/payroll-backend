const axios = require('axios');
require('dotenv').config();

const ZOHO_API = "https://www.zohoapis.com/books/v3";
const ORG_ID = "884681928";
const ACCESS_TOKEN = '1000.bafc68f05e10ccb1c4ed621907304e53.ce75cf0b9bae52c789ae7f9c9f22be49';

const HEADERS = {
  Authorization: `Zoho-oauthtoken ${ACCESS_TOKEN}`,
  'Content-Type': 'application/json'
};

const recordZohoExpense = async ({ amount, accountId, description, paidThroughAccountId, vendorId }) => {
  const data = {
    date: new Date().toISOString().split('T')[0],
    account_id: accountId,
    amount: 2000000,
    description,
    is_inclusive_tax: false,
    payment_mode: 'cash',
    paid_through_account_id: paidThroughAccountId || undefined,
    vendor_id: vendorId || undefined
  };

  try {
    const url = `${ZOHO_API}/expenses?organization_id=${ORG_ID}`;
    const response = await axios.post(url, data, { headers: HEADERS });
    console.log(`✅ Expense recorded successfully: ${description}`);
    return response.data;
  } catch (error) {
    console.error("❌ Error recording expense:", error.response?.data || error.message);
    throw error;
  }
};

module.exports = { recordZohoExpense };
