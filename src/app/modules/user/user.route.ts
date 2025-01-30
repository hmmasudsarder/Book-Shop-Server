import express from 'express';
import auth from '../../middlewares/auth';
import { userController } from './user.controller';

const router = express.Router();

// router.post('/register',validateRequest(UserValidation.userValidationSchema), userController.newUserRegistration)

// router.post('/login',validateRequest(AuthValidation.loginValidationSchema), AuthControllers.loginUser)
// router.post(
//   '/create-student',
//   auth(USER_ROLE.admin),
//   validateRequest(createStudentValidationSchema),
//   UserControllers.createStudent,
// );
// router.patch('/admin/users/:userId/block', auth('admin'),
router.patch('/users/:userId/block',auth('admin'), userController.blockUser)
// router.delete('/blogs/:id', auth('admin'), BlogControllers.deleteBlogByAdmin);

export const userRoutes = router;