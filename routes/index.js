var express = require('express');
var router = express.Router();
const userController = require('../controllers/user');

/* Get all users */
router.get('/',userController.getAll);
/* GET create page. */
router.get('/create', (req, res, next) => userController.getView(req,res,'create'));
/* create new user */
router.post('/',userController.createUser);
/* update view page */
router.get('/update/:id',(req,res)=> userController.getUserView(req,res,'update'));
/*Post update */
router.post('/update/:id',userController.updateUser);
/* Delete view */
router.get('/delete/:id',(req,res) => userController.getUserView(req,res, 'delete'));
/* Delete user */
router.post('/delete/:id',userController.deleteUser);

module.exports = router;
