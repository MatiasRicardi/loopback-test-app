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
import {TitemMaso} from '../models';
import {TitemMasoRepository} from '../repositories';

export class TitemMasoCtrlController {
  constructor(
    @repository(TitemMasoRepository)
    public titemMasoRepository : TitemMasoRepository,
  ) {}

  @post('/titemmaso')
  @response(200, {
    description: 'TitemMaso model instance',
    content: {'application/json': {schema: getModelSchemaRef(TitemMaso)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(TitemMaso, {
            title: 'NewTitemMaso',
            exclude: ['ItemMasoid'],
          }),
        },
      },
    })
    titemMaso: Omit<TitemMaso, 'ItemMasoid'>,
  ): Promise<TitemMaso> {
    return this.titemMasoRepository.create(titemMaso);
  }

  @get('/titemmaso/count')
  @response(200, {
    description: 'TitemMaso model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(TitemMaso) where?: Where<TitemMaso>,
  ): Promise<Count> {
    return this.titemMasoRepository.count(where);
  }

  @get('/titemmaso')
  @response(200, {
    description: 'Array of TitemMaso model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(TitemMaso, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(TitemMaso) filter?: Filter<TitemMaso>,
  ): Promise<TitemMaso[]> {
    return this.titemMasoRepository.find(filter);
  }

  @patch('/titemmaso')
  @response(200, {
    description: 'TitemMaso PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(TitemMaso, {partial: true}),
        },
      },
    })
    titemMaso: TitemMaso,
    @param.where(TitemMaso) where?: Where<TitemMaso>,
  ): Promise<Count> {
    return this.titemMasoRepository.updateAll(titemMaso, where);
  }

  @get('/titemmaso/{id}')
  @response(200, {
    description: 'TitemMaso model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(TitemMaso, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(TitemMaso, {exclude: 'where'}) filter?: FilterExcludingWhere<TitemMaso>
  ): Promise<TitemMaso> {
    return this.titemMasoRepository.findById(id, filter);
  }

  @patch('/titemmaso/{id}')
  @response(204, {
    description: 'TitemMaso PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(TitemMaso, {partial: true}),
        },
      },
    })
    titemMaso: TitemMaso,
  ): Promise<void> {
    await this.titemMasoRepository.updateById(id, titemMaso);
  }

  @put('/titemmaso/{id}')
  @response(204, {
    description: 'TitemMaso PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() titemMaso: TitemMaso,
  ): Promise<void> {
    await this.titemMasoRepository.replaceById(id, titemMaso);
  }

  @del('/titemmaso/{id}')
  @response(204, {
    description: 'TitemMaso DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.titemMasoRepository.deleteById(id);
  }
}
