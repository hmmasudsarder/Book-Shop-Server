import { Request, Response } from 'express';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';
import { userServices } from './user.service';

const blockUser = catchAsync(async (req: Request, res: Response) => {
  const { userId } = req.params;
  await userServices.blockUserByAdmin(userId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'user blocked successfully!',
    data: '',
  });
});

const getAllUser= catchAsync(async (req: Request, res: Response) => {
 
  const result= await userServices.getAllUserFromDb();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'user  retrieved  successfully!',
    data:result,
  });
});

export const userController = {
  blockUser,
  getAllUser
};