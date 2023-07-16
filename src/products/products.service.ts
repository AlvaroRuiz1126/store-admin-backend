import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom, lastValueFrom, map } from 'rxjs';

@Injectable()
export class ProductsService {
  constructor(private readonly htppService: HttpService) {}

  getProducts() {}

  public async getProductById(productId: string) {
    return await firstValueFrom(
      this.htppService.get(
        `https://itglobers.myvtex.com/api/catalog/pvt/product/${productId}`,
        {
          headers: {
            'X-VTEX-API-AppKey': 'vtexappkey-itglobers-EHXEVD',
            'X-VTEX-API-AppToken':
              'CTGNJDXMOSOPVYTTVIYPUIYRZRAWBWKKGNWVYLVCFKXJMJDKIKQCSIMUUONRDBKSIEJIBYVJMWJJKOFQOPORGHSXACAJYDYEZFBIZVIKPGQVZCJGJXDNNTMBMLHZXLLJ',
          },
        },
      ),
    );
  }

  public async getCollectionById(
    collectionId: string,
    queryParams: { page: string; pageSize: string },
  ) {
    const { page, pageSize } = queryParams;
    return await firstValueFrom(
      this.htppService.get(
        `https://itglobers.myvtex.com/api/catalog/pvt/collection/${collectionId}/products?page=${page}&pageSize=${pageSize}`,
        {
          headers: {
            'X-VTEX-API-AppKey': 'vtexappkey-itglobers-EHXEVD',
            'X-VTEX-API-AppToken':
              'CTGNJDXMOSOPVYTTVIYPUIYRZRAWBWKKGNWVYLVCFKXJMJDKIKQCSIMUUONRDBKSIEJIBYVJMWJJKOFQOPORGHSXACAJYDYEZFBIZVIKPGQVZCJGJXDNNTMBMLHZXLLJ',
          },
        },
      ),
    );
  }
}
