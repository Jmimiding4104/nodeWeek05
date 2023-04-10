var express = require('express');
var router = express.Router();

const UsersControllers = require('../controllers/users')

/* GET users listing. */
router.get('/', UsersControllers.getUsers);

router.post('/', UsersControllers.createUsers);

module.exports = router;
