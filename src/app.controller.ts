import { Controller, Get, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @Get()
  // getHello(): string {
  //   return this.appService.getHello();
  // }

  // @Get('products')
  // getProducts(@Res() res: Response) {
  //   const vtexProducts = this.appService.getProducts();

  //   res.status(200).json({});
  // }
}
