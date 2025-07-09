import express from 'express';
import auth from '../../middlewares/auth';
import { userController } from './user.controller';
import { USER_ROLE } from './user.constant';

const router = express.Router();


router.get('/', auth(USER_ROLE.admin), userController.getAllUser)
router.patch('/:userId/block', auth(USER_ROLE.admin), userController.blockUser)

export const userRoutes = router;