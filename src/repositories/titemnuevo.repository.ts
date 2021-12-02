import {inject} from '@loopback/core';
import {DefaultCrudRepository, IsolationLevel,} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Titemnuevo, TitemnuevoRelations} from '../models';

export class TitemnuevoRepository extends DefaultCrudRepository<
  Titemnuevo,
  typeof Titemnuevo.prototype.ItemNuevoid,
  TitemnuevoRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Titemnuevo, dataSource);
  }

  async execute_pIns_ItemNuevo01(): Promise<any> {
    const transaction = await this.dataSource.beginTransaction(IsolationLevel.SERIALIZABLE);  

    try {
      const result = await this.execute(`pIns_ItemNuevo01;`, [], {transaction});
      transaction.commit();
      return result;
    } catch (error) {
      transaction.rollback();
      throw error;
    }
  }

  async execute_pIns_ItemNuevo02(code:string, desc:string, user:number): Promise<any> {  
    const transaction = await this.dataSource.beginTransaction(IsolationLevel.SERIALIZABLE);  

    try {
      const result = await this.execute(`pIns_ItemNuevo02 @param1,@param2,@param3`, [code, desc, user], {transaction});
      transaction.commit();
      return result;
    } catch (error) {
      transaction.rollback();
      throw error;
    }
  }

  async execute_pIns_ItemNuevo03(code:string, desc:string, user:number): Promise<any> {  
    const transaction = await this.dataSource.beginTransaction(IsolationLevel.SERIALIZABLE);  

    try {
      const result = await this.execute(`pIns_ItemNuevo03 @param1,@param2,@param3`, [code, desc, user], {transaction});
      transaction.commit();
      return result;
    } catch (error) {
      transaction.rollback();
      throw error;
    }
  }
}
 