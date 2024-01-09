import { inMemorySupplierRepository } from '@test/repositories/in-memory-supplie-repository';
import { SupplieService } from './supplier.service';

describe('Supplie', () => {
  it('should register a new supplie', async () => {
    const supplieRepository = new inMemorySupplierRepository();
    const supplieService = new SupplieService(supplieRepository);

    const newSupplie = {
      name: 'any_name',
      price: 10,
      description: 'any_description',
      image: 'any_image',
      quantity: 10,
    };

    const supplie = await supplieService.create(newSupplie);

    expect(supplieRepository.supplies[0]).toBe(supplie);
  });
});
