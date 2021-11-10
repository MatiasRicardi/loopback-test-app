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
import {ProductModel} from '../models';
import {ProductModelRepository} from '../repositories';

export class ProductControllerController {
  constructor(
    @repository(ProductModelRepository)
    public productModelRepository : ProductModelRepository,
  ) {}

  @post('/product-models')
  @response(200, {
    description: 'ProductModel model instance',
    content: {'application/json': {schema: getModelSchemaRef(ProductModel)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ProductModel, {
            title: 'NewProductModel',
            exclude: ['id'],
          }),
        },
      },
    })
    productModel: Omit<ProductModel, 'id'>,
  ): Promise<ProductModel> {
    return this.productModelRepository.create(productModel);
  }

  @get('/product-models/count')
  @response(200, {
    description: 'ProductModel model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(ProductModel) where?: Where<ProductModel>,
  ): Promise<Count> {
    return this.productModelRepository.count(where);
  }

  @get('/product-models')
  @response(200, {
    description: 'Array of ProductModel model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(ProductModel, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(ProductModel) filter?: Filter<ProductModel>,
  ): Promise<ProductModel[]> {
    return this.productModelRepository.find(filter);
  }

  @patch('/product-models')
  @response(200, {
    description: 'ProductModel PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ProductModel, {partial: true}),
        },
      },
    })
    productModel: ProductModel,
    @param.where(ProductModel) where?: Where<ProductModel>,
  ): Promise<Count> {
    return this.productModelRepository.updateAll(productModel, where);
  }

  @get('/product-models/{id}')
  @response(200, {
    description: 'ProductModel model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(ProductModel, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(ProductModel, {exclude: 'where'}) filter?: FilterExcludingWhere<ProductModel>
  ): Promise<ProductModel> {
    return this.productModelRepository.findById(id, filter);
  }

  @patch('/product-models/{id}')
  @response(204, {
    description: 'ProductModel PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ProductModel, {partial: true}),
        },
      },
    })
    productModel: ProductModel,
  ): Promise<void> {
    await this.productModelRepository.updateById(id, productModel);
  }

  @put('/product-models/{id}')
  @response(204, {
    description: 'ProductModel PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() productModel: ProductModel,
  ): Promise<void> {
    await this.productModelRepository.replaceById(id, productModel);
  }

  @del('/product-models/{id}')
  @response(204, {
    description: 'ProductModel DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.productModelRepository.deleteById(id);
  }
}
