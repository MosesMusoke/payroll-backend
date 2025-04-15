const express = require('express');
const router = express.Router();
const {
  zohoAuth,
  zohoCallback,
  zohoRefreshToken,
  recordExpenses,
  createZohoExpense
} = require('../controllers/zohoController');

router.get('/auth', zohoAuth);
router.get('/callback', zohoCallback);
router.get('/refresh', zohoRefreshToken);
router.post('/record-expenses', recordExpenses);
// router.post('/expenses', createZohoExpense);

module.exports = router;
