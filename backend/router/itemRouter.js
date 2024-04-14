const express = require('express');
const router = express.Router();

const itemController = require('../controller/itemController');
const userauthentication = require('../middleware/auth')

router.post('/addItem', userauthentication.authenticate, itemController.addItem);
router.get('/getCartItems', userauthentication.authenticate, itemController.getCartItems);

module.exports = router;