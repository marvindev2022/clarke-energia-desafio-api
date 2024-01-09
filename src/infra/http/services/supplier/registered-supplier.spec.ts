import { inMemorySupplierRepository } from '@test/repositories/in-memory-supplie-repository';
import { SupplieService } from './supplier.service';

describe('Supplie', () => {
  it('should register a new product', async () => {
    const productRepository = new inMemorySupplierRepository();
    const productService = new SupplieService(productRepository);

    const newSupplie = {
      name: 'any_name',
      price: 10,
      description: 'any_description',
      image: 'any_image',
      quantity: 10,
    };

    const product = await productService.create(newSupplie);

    expect(productRepository.supplies[0]).toBe(product);
  });
});
