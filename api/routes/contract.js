
var express = require('express');
var router = express.Router();

var contracts = require('../controllers/contracts');

router.post('/post-contracts', contracts.postContracts);
router.get('/get-contracts',contracts.getContracts);
module.exports = router;