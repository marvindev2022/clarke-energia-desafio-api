import { inMemorySupplierRepository } from '@test/repositories/in-memory-supplie-repository';
import { SupplieService } from './supplier.service';

describe('Supplie', () => {
  it('should register a new supplie', async () => {
    const supplieRepository = new inMemorySupplierRepository();
    const supplieService = new SupplieService(supplieRepository);

    const newSupplie = {
      name: "any_string",
      logo: "any_string",
      stateAbbreviation: "sp",
      costPerKwh: 3,
      minKwhLimit: 3,
      totalCustomers: 3,
      averageCustomerRating: 3,
    };

    const supplie = await supplieService.create(newSupplie);

    expect(supplieRepository.supplies[0]).toBe(supplie);
  });
});
