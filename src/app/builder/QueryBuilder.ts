import { FilterQuery, Query } from 'mongoose';
class QueryBuilder<T> {
  public modelQuery: Query<T[], T>;
  public query: Record<string, unknown>;

  constructor(modelQuery: Query<T[], T>, query: Record<string, unknown>) {
    this.modelQuery = modelQuery;
    this.query = query;
  }

  // //   search method
  search(searchableFields: string[]) {
    // const searchTerm = this?.query?.searchTerm;
    const searchTerm = this?.query?.search || this?.query?.searchTerm;
    // console.log("thiss",this.query);
    // console.log("search term:", searchTerm);
    // console.log("searchable fields:", searchableFields);
    if (searchTerm) {
      this.modelQuery = this.modelQuery.find({
        $or: searchableFields.map(
          (field) =>
            ({
              [field]: { $regex: searchTerm, $options: 'i' },
            }) as FilterQuery<T>,
        ),
      });
    }

    return this;
  }

 /*
 Developer note
 1.nicer filter ta akta ta field ar opor kj korbe 

*/
// ----------------------------
  // filter() {
  //   const queryObj = { ...this.query };
  //   console.log('constructed query object:', queryObj);

  //   // Filtering
  //   const excludeFields = ['category','search','sortBy','sortOrder','author','searchTerm','sort','limit','page','fields',
  //   ]; //ignore korar jonno akhane add korte hbe

  //   excludeFields.forEach((el) => delete queryObj[el]);

  //   if (queryObj.filter) {
  //     queryObj['category'] = queryObj.filter;
  //     delete queryObj.filter;
  //   }
  //   // console.log("final query object filter", queryObj)
  //   this.modelQuery = this.modelQuery.find(queryObj as FilterQuery<T>);

  //   return this;
  // }

  // -----------------------
 /*
 Developer note
 1.nicer filter ta dui ta field ar opor kj korbe 
  2.field baraite caile 

*/
  filter() {
    const queryObj = { ...this.query };
    
  
    // Fields to exclude from filtering
    const excludeFields = [
      'search', 'sortBy', 'sortOrder', 'author', 'searchTerm', 'sort', 'limit', 'page', 'fields',
    ];
    excludeFields.forEach((el) => delete queryObj[el]);
  
    const filters: Record<string, unknown> = {};
  
    // Handle filter as an array or an single value
    if (queryObj.filter) {
      const filterValues = Array.isArray(queryObj.filter)
        ? queryObj.filter
        : [queryObj.filter]; // normalize single value to an array
  
      filterValues.forEach((value) => {
        if (typeof value === 'string') {
          if (value.toLowerCase() === 'instock') {
            filters['inStock'] = true; // Handle `instock filter db te thakte hbe
          } else {
            filters['category'] = value; // hondle category filter
          }
        }
      });
  
      delete queryObj.filter; // clean up `filter` field
    }
  
    // add remaining fields to filters
    Object.assign(filters, queryObj);
  
    console.log('Final filters for query:', filters);
  
    // Apply filters to the MongoDB query
    this.modelQuery = this.modelQuery.find(filters as FilterQuery<T>);
    return this;
  }
  
  
  



  sort() {
    const sortBy = (this.query.sortBy as string) || 'createdAt';
    const sortOrder =
      (this.query.sortOrder as string)?.toLowerCase() === 'asc' ? '' : '-';
    this.modelQuery = this.modelQuery.sort(`${sortOrder}${sortBy}`);
    return this;
  }


  //   pagination method
  paginate() {
    const page = Number(this?.query?.page) || 1;
    const limit = Number(this?.query?.limit) || 20;
    const skip = (page - 1) * limit;

    this.modelQuery = this.modelQuery.skip(skip).limit(limit);

    return this;
  }

  //   fields filtaring
  fields() {
    const fields =
      (this?.query?.fields as string)?.split(',')?.join(' ') || '-__v';

    this.modelQuery = this.modelQuery.select(fields);
    return this;
  }
  async countTotal() {
    const totalQueries = this.modelQuery.getFilter();
    const total = await this.modelQuery.model.countDocuments(totalQueries);
    const page = Number(this?.query?.page) || 1;
    const limit = Number(this?.query?.limit) || 10;
    const totalPage = Math.ceil(total / limit);

    return {
      page,
      limit,
      total,
      totalPage,
    };
  }
}

export default QueryBuilder;