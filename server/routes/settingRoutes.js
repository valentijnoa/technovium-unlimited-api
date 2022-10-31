const express = require('express');
const router = express.Router();
const settingController = require('../controller/settingController');

/*
* APP Routes
*/
router.get('/api/users/settings/', settingController.listSettings);
router.put('/api/users/settings/:id', settingController.updateAllSettings);

module.exports = router;