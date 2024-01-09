import { SupplieRepository } from '@app/repositories/supplie';

export class inMemorySupplierRepository implements SupplieRepository {
  supplies: any[] = [];

  async createSupplie(supplie: any): Promise<any> {
    this.supplies.push(supplie);
    if (supplie instanceof Error) {
      throw new Error(supplie.message);
    }
    return supplie;
  }

  async getSupplier(): Promise<any[]> {
    return this.supplies;
  }

  async getSupplieById(id: string): Promise<any> {
    if (!id) {
      throw new Error('Id não informado');
    }
    return this.supplies.find((supplie) => supplie.id === id);
  }

  async updateSupplie(id: string, supplie: any): Promise<any> {
    const index = this.supplies.findIndex((supplie) => supplie.id === id);
    this.supplies[index] = supplie;
    return supplie;
  }

  async deleteSupplie(id: string): Promise<any> {
    const index = this.supplies.findIndex((supplie) => supplie.id === id);
    if (index === -1) {
      throw new Error('Id não encontrado');
    }

    this.supplies.splice(index, 1);
    return true;
  }
}
