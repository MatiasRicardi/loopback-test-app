import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {ProductModel, ProductModelRelations} from '../models';

export class ProductModelRepository extends DefaultCrudRepository<
  ProductModel,
  typeof ProductModel.prototype.id,
  ProductModelRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(ProductModel, dataSource);
  }
}
