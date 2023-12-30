const express = require('express');
const router = express()
const controllers = require('../controller/appControllers.js');
const auth = require('../middleware/auth')

router.post('/login_user',controllers.LoginPage);
router.post('/insert_data',auth,controllers.AddData);
router.get('/get_data',auth,controllers.GetData);

module.exports = router;