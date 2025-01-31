import { model, Schema } from 'mongoose';
import { Iproduct } from './product.interface';

const productSchema = new Schema({
  name: { type: String, required: true },
  brand: { type: String, required: true },
  model: { type: String,  },
  price: { type: Number, required: true, min: 0 },
  productImg: { type: String },
  category: {
    type: String,
    required: true,
    enum: ['Mountain', 'Road', 'Hybrid', 'Electric','Gravel'],
  },
  description: { type: String, required: true },
  quantity: { type: Number, required: true, min: 0 },
  inStock: { type: Boolean, default: true },
  
},{ timestamps: true }
);

export const ProductModel = model<Iproduct>('Product', productSchema);