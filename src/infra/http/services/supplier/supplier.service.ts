import { SupplieRepository } from '@app/repositories/Supplie/supplie';
import { Injectable } from '@nestjs/common';

@Injectable()
export class SupplieService {
  constructor(private productRepository: SupplieRepository) {}

  async findSupplier(): Promise<any[]> {
    return await this.productRepository.getSupplier();
  }

  async findSupplieById(id: string): Promise<any> {
    return await this.productRepository.getSupplieById(id);
  }

  async create(product: any): Promise<any> {
    return await this.productRepository.createSupplie(product);
  }

  async updateSupplie(id: string, product: any): Promise<any> {
    return await this.productRepository.updateSupplie(id, product);
  }

  async deleteSupplie(id: string): Promise<any> {
    return await this.productRepository.deleteSupplie(id);
  }
}
