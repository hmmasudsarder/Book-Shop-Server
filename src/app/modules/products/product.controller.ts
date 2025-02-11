/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from 'express';
import { ProductServices } from './product.service';
import sendResponse from '../../utils/sendResponse';
import catchAsync from '../../utils/catchAsync';
import httpStatus from 'http-status';

const createProduct = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const product = req.body;
    const result = await ProductServices.addProductInToDB(product);
    res.status(200).json({
      success: true,
      message: 'book is created successfully',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};


const getAllProducts = catchAsync(async (req: Request, res: Response,) => {
  const result = await ProductServices.getAllProductToDB(req.query)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'book are retrieved successfully',
    data: result,
  });
});
// get single product by id
const getProductById = async (req: Request, res: Response, next: NextFunction,): Promise<void> => {
  try {
    const productId = req.params.id;
    const product = await ProductServices.getProductById(productId);
    // console.log("log from controlar",product);

    // If product is not found, return 404 error
    if (!product) {
      const error = new Error('Product not found');
      (error as any).status = 404;
      (error as any).success = false;
      return next(error);
    }
    res.json({
      message: 'Product retrieved successfully',
      success: true,
      data: product,
    });
  } catch (error) {
    // res.status(500).json({ message: 'server error', success: false, error });
    next(error);
  }
};

// updated single product by id
const updatedVProduct = async (req: Request, res: Response, next: NextFunction,): Promise<void> => {
  try {
    const productId = req.params.id;
    const productData = req.body;
    const product = await ProductServices.updatedProduct(
      productId,
      productData,
    );
    if (!product) {
      // res.status(404).json({ message: 'Product not found', success: false });
      // throw new Error('Product not found');
      const error = new Error('Product not found');
      (error as any).status = 404;
      (error as any).success = false;
      return next(error);

    }
    res.json({
      message: 'product updated successfully',
      success: true,
      data: product,
    });
  } catch (error) {
    next(error);
  }
};

const deleteProduct = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const productId = req.params.id;
    const product = await ProductServices.deletedProduct(productId);
    if (!product) {
      const error = new Error('Product not found');
      (error as any).status = 404;
      (error as any).success = false;
      return next(error);

    }
    res.json({
      message: 'product deleted successfully',
      success: true,
      data: product,
    });
  } catch (error) {
    next(error);
  }
};

export const ProductControllers = {
  createProduct,
  getAllProducts,
  getProductById,
  updatedVProduct,
  deleteProduct,
};