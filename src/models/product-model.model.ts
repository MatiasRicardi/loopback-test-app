import {Entity, model, property} from '@loopback/repository';

@model({
  name: 'test_table'
})
export class ProductModel extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'string',
  })
  description?: string;

  @property({
    type: 'date',
    required: true,
    mysql: {
      columnName: 'dt_created'
    }
  })
  dateCreated: string;


  constructor(data?: Partial<ProductModel>) {
    super(data);
  }
}

export interface ProductModelRelations {
  // describe navigational properties here
}

export type ProductModelWithRelations = ProductModel & ProductModelRelations;
