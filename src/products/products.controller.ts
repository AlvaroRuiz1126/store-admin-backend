import { Controller, Get, Param, Put, Query, Res } from '@nestjs/common';
import { Response } from 'express';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get(':productId')
  public async getProductById(
    @Param('productId') productId: string,
    @Res() res: Response,
  ) {
    const { data } = await this.productsService.getProductById(productId);

    res.status(200).json({
      ok: true,
      product: data,
    });
  }

  @Get('collections/:collectionId')
  public async getCollectionById(
    @Param('collectionId') collectionId: string,
    @Query()
    { page = '1', pageSize = '10' }: { page: string; pageSize: string },
    @Res() res: Response,
  ) {
    const { data } = await this.productsService.getCollectionById(
      collectionId,
      { page, pageSize },
    );

    res.status(200).json({
      ok: true,
      collection: data,
    });
  }

  @Put(':productId')
  public async updateProductById() {}
}
