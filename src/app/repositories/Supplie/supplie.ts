import { EditSupplieDTO } from "@infra/http/models/Supplie/edit";
import Supplie from "@domain/Supplier/supplie";

export abstract class SupplieRepository {
  abstract createSupplie(supplie: Supplie): Promise<string>;
  abstract getSupplier(): Promise<Supplie[]>;
  abstract getSupplieById(id: string): Promise<Supplie>;
  abstract updateSupplie(id: string, supplie: EditSupplieDTO): Promise<EditSupplieDTO>;
  abstract deleteSupplie(id: string): Promise<string>;
}
