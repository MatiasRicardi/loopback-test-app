import {Entity, model, property} from '@loopback/repository';

@model()
export class Titemnuevo extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  ItemNuevoid?: number;

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


  constructor(data?: Partial<Titemnuevo>) {
    super(data);
  }
}

export interface TitemnuevoRelations {
  // describe navigational properties here
}

export type TitemnuevoWithRelations = Titemnuevo & TitemnuevoRelations;
