import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {Titemnuevo} from '../models';
import {TitemnuevoRepository} from '../repositories';

export class TitemNuevoCtrlController {
  constructor(
    @repository(TitemnuevoRepository)
    public titemnuevoRepository : TitemnuevoRepository,
  ) {}

  @post('/titemnuevos')
  @response(200, {
    description: 'Titemnuevo model instance',
    content: {'application/json': {schema: getModelSchemaRef(Titemnuevo)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Titemnuevo, {
            title: 'NewTitemnuevo',
            exclude: ['ItemNuevoid'],
          }),
        },
      },
    })
    titemnuevo: Omit<Titemnuevo, 'ItemNuevoid'>,
  ): Promise<Titemnuevo> {
    return this.titemnuevoRepository.create(titemnuevo);
  }

  @get('/titemnuevos/count')
  @response(200, {
    description: 'Titemnuevo model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Titemnuevo) where?: Where<Titemnuevo>,
  ): Promise<Count> {
    return this.titemnuevoRepository.count(where);
  }

  @get('/titemnuevos')
  @response(200, {
    description: 'Array of Titemnuevo model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Titemnuevo, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Titemnuevo) filter?: Filter<Titemnuevo>,
  ): Promise<Titemnuevo[]> {
    return this.titemnuevoRepository.find(filter);
  }

  @patch('/titemnuevos')
  @response(200, {
    description: 'Titemnuevo PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Titemnuevo, {partial: true}),
        },
      },
    })
    titemnuevo: Titemnuevo,
    @param.where(Titemnuevo) where?: Where<Titemnuevo>,
  ): Promise<Count> {
    return this.titemnuevoRepository.updateAll(titemnuevo, where);
  }

  @get('/titemnuevos/{id}')
  @response(200, {
    description: 'Titemnuevo model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Titemnuevo, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Titemnuevo, {exclude: 'where'}) filter?: FilterExcludingWhere<Titemnuevo>
  ): Promise<Titemnuevo> {
    return this.titemnuevoRepository.findById(id, filter);
  }

  @patch('/titemnuevos/{id}')
  @response(204, {
    description: 'Titemnuevo PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Titemnuevo, {partial: true}),
        },
      },
    })
    titemnuevo: Titemnuevo,
  ): Promise<void> {
    await this.titemnuevoRepository.updateById(id, titemnuevo);
  }

  @put('/titemnuevos/{id}')
  @response(204, {
    description: 'Titemnuevo PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() titemnuevo: Titemnuevo,
  ): Promise<void> {
    await this.titemnuevoRepository.replaceById(id, titemnuevo);
  }

  @del('/titemnuevos/{id}')
  @response(204, {
    description: 'Titemnuevo DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.titemnuevoRepository.deleteById(id);
  }


  @post('/titemnuevos/pIns_ItemNuevo01')
  @response(200, {
    description: 'call procedure pIns_ItemNuevo01'
  })
  async execute_pIns_ItemNuevo01(): Promise<object> {       
    return this.titemnuevoRepository.execute_pIns_ItemNuevo01();
  }

  @post('/titemnuevos/pIns_ItemNuevo02')
  @response(200, {
    description: 'call procedure pIns_ItemNuevo02'

  })
  async execute_pIns_ItemNuevo02(
    @requestBody({
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              code: {
                type: 'string'
              },
              desc: {
                type: 'string'
              },
              user: {
                type: 'number'
              }
            },
          },
        }
      },
    })
    objectInfo: {code : string, desc:string, user:number},
  ): Promise<object> {       
    return this.titemnuevoRepository.execute_pIns_ItemNuevo02(objectInfo.code, objectInfo.desc, objectInfo.user);
  }


  @post('/titemnuevos/pIns_ItemNuevo03')
  @response(200, {
    description: 'call procedure pIns_ItemNuevo03'

  })
  async execute_pIns_ItemNuevo03(
    @requestBody({
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              code: {
                type: 'string'
              },
              desc: {
                type: 'string'
              },
              user: {
                type: 'number'
              }
            },
          },
        }
      },
    })
    objectInfo: {code : string, desc:string, user:number},
  ): Promise<object> {       
    return this.titemnuevoRepository.execute_pIns_ItemNuevo03(objectInfo.code, objectInfo.desc, objectInfo.user);
  }
}
