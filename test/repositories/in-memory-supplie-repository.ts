import { SupplieRepository } from "@app/repositories/Supplie/supplie";


export class inMemorySupplierRepository implements SupplieRepository{
     supplies: any[] = [];

     async createSupplie(supplie: any): Promise<any> {
          this.supplies.push(supplie);
          return supplie;
     }

     async getSupplier(): Promise<any[]> {
          return this.supplies;
     }

     async getSupplieById(id: string): Promise<any> {
          return this.supplies.find((supplie) => supplie.id === id);
     }

     async updateSupplie(id: string, supplie: any): Promise<any> {
          const index = this.supplies.findIndex((supplie) => supplie.id === id);
          this.supplies[index] = supplie;
          return supplie;
     }

     async deleteSupplie(id: string): Promise<any> {
          const index = this.supplies.findIndex((supplie) => supplie.id === id);
          this.supplies.splice(index, 1);
          return true;
     }

     
}