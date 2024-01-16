const express = require('express');
const {getAllUsers,createAllUsers} = require('../controllers/userController')
const sampleMiddleware = require('../middlewares/sampleMiddleware')
const router = express.Router();

router.post('/',sampleMiddleware,createAllUsers);
router.get('/',getAllUsers);

module.exports = router;
