import {Entity, model, property} from '@loopback/repository';

@model()
export class TitemMaso extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  ItemMasoid?: number;

  @property({
    type: 'string',
    required: true,
  })
  CodItem: string;

  @property({
    type: 'string',
  })
  Descripcion?: string;

  @property({
    type: 'number',
  })
  Usuarioid?: number;


  constructor(data?: Partial<TitemMaso>) {
    super(data);
  }
}

export interface TitemMasoRelations {
  // describe navigational properties here
}

export type TitemMasoWithRelations = TitemMaso & TitemMasoRelations;
