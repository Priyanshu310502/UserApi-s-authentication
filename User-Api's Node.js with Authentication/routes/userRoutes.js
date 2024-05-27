import express from 'express';
const router = express.Router();
import UserController from '../controllers/userController.js';
import checkUserAuth from '../middlewares/auth-middleware.js';

router.use('/changepassword', checkUserAuth)

router.post('/register', UserController.userRegistration)
router.post('/login', UserController.userLogin)
router.post('/changepassword', UserController.changeUserPassword)


export default router;