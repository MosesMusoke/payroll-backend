const express = require('express');
const router = express.Router();
const {
  storeEmployees,
  getEmployees,
} = require('../controllers/employeeController');


router.post('/', storeEmployees);
router.get('/', getEmployees);

module.exports = router;
