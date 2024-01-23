const {getAllUsers,createNewUser,getCurrentUser,loginUser } = require('./../controllers/userController')

const express = require('express');


const router = express.Router();

router.route('/users').get(getAllUsers);

router.route('/register').post(createNewUser);

router.route('/login').post(loginUser);

router.route('/:id').get(getCurrentUser)


module.exports = router;