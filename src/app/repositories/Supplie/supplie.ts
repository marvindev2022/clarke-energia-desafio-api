export abstract class SupplieRepository {
  abstract getSupplier(): Promise<any[]>;
  abstract getSupplieById(id: string): Promise<any>;
  abstract createSupplie(product: any): Promise<any>;
  abstract updateSupplie(id: string, product: any): Promise<any>;
  abstract deleteSupplie(id: string): Promise<any>;
}
