import { model, Schema } from 'mongoose';
import { Iproduct } from './product.interface';

const productSchema = new Schema({
  name: { type: String, required: true },
  author: { type: String, required: true },
  price: { type: Number, required: true, min: 0 },
  productImg: { type: String },
  category: {
    type: String,
    required: true,
    enum: [
      'Fantasy',
      'Science Fiction',
      'Romance',
      'Self-Help',
      'History',
      'Science',
      'Business',
      'Technology',
      'Design',
    ],
  },
  description: { type: String, required: true },
  quantity: { type: Number, required: true, min: 0 },
  inStock: { type: Boolean, default: true },

}, { timestamps: true }
);

export const ProductModel = model<Iproduct>('Product', productSchema);