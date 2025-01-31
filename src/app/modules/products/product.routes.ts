import express from 'express'
import { ProductControllers } from './product.controller';
const router =express.Router()

// api ai route here 

// router.post('/create-product',StudentControllers.createStudent);
router.post('/',ProductControllers.createProduct);
router.get('/',ProductControllers.getAllProducts)
router.get('/:id', ProductControllers.getProductById);
router.put('/:id', ProductControllers.updatedVProduct);
router.delete('/:id', ProductControllers.deleteProduct);



export const ProductRoutes= router;