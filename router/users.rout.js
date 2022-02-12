const { getUser, saveUser }= require( '../controllers/users.controllers');

const express = require('express');
const router = express.Router();



router.get('/users', getUser)

router.post('/users',saveUser)
module.exports = router;