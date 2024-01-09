import { SupplieRepository } from '@app/repositories/Supplie/supplie';
import Supplie from '@domain/Supplier/supplie';
import { Injectable } from '@nestjs/common';

@Injectable()
export class SupplieService {
  constructor(private supplieRepository: SupplieRepository) {}

  async findSupplier(): Promise<any[]> {
    return await this.supplieRepository.getSupplier();
  }

  async findSupplieById(id: string): Promise<any> {
    return await this.supplieRepository.getSupplieById(id);
  }

  async create(supplie: any ): Promise<any> {
    const newSupplie = new Supplie(supplie)
    return await this.supplieRepository.createSupplie(newSupplie);
  }

  async updateSupplie(id: string, supplie: any): Promise<any> {
    return await this.supplieRepository.updateSupplie(id, supplie);
  }

  async deleteSupplie(id: string): Promise<any> {
    return await this.supplieRepository.deleteSupplie(id);
  }
}
