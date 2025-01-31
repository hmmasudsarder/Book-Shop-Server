import QueryBuilder from '../../builder/QueryBuilder';
import { ProductSearchableFields } from './product.constant';
import { Iproduct } from './product.interface';
import { ProductModel } from './product.model';

const addProductInToDB = async (product: Iproduct) => {
  const result = await ProductModel.create(product);
  return result;
};

const  getAllProductToDB = async (query: Record<string, unknown>) => {
  console.log(query);
  const productQuery = new QueryBuilder(
    ProductModel.find(),
    query,
  )
    .search(ProductSearchableFields)
    .filter()
    .sort()
    .fields()
    .paginate()

  const result = await  productQuery.modelQuery.exec();
  console.log('Query Result:', result);

  return result;
};

const getProductById = async (id: string) => {
  const result = await ProductModel.findById(id);

  return result;
};

const updatedProduct = async (id: string, productData: Partial<Iproduct>) => {
  const result = await ProductModel.findByIdAndUpdate(id, productData, {
    new: true,
  });
  return result;
};

const deletedProduct = async (id: string) => {
  const result = await ProductModel.findByIdAndDelete(id);
  return result;
};

export const ProductServices = {
  addProductInToDB,
  getAllProductToDB,
  getProductById,
  updatedProduct,
  deletedProduct,
};