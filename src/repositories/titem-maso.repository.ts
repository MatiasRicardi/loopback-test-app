import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {TitemMaso, TitemMasoRelations} from '../models';

export class TitemMasoRepository extends DefaultCrudRepository<
  TitemMaso,
  typeof TitemMaso.prototype.ItemMasoid,
  TitemMasoRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(TitemMaso, dataSource);
  }
}
