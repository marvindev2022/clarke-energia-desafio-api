import { SupplieRepository } from '@app/repositories/Supplie/supplie';
import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class PrismaSupplierRepository implements SupplieRepository {
  constructor(private prisma: PrismaService) {}

  async createSupplie(supplie: any): Promise<any> {
    try {
      if (supplie instanceof Error) {
        throw new BadRequestException(supplie.message, {
          cause: supplie,
          description: supplie.stack,
        });
      }

      const { id } = await this.prisma.supplier.create({
        data: {
          name: supplie.name,
          logo: supplie.logo,
          state_abbreviation: supplie.stateAbbreviation,
          cost_per_kwh: supplie.costPerKwh,
          min_kwh_limit: supplie.minKwhLimit,
          total_customers: supplie.totalCustomers,
          average_customer_rating: supplie.averageCustomerRating,
        },
        select: {
          id: true,
        },
      });

      return id;
    } catch (error: any) {
      console.error('Erro ao criar um fornecedor:', error);
      throw new BadRequestException(error.message);
    }
  }

  async getSupplier(): Promise<any[]> {
    return await this.prisma.supplier.findMany();
  }

  async getSupplieById(id: string): Promise<any> {
    return await this.prisma.supplier.findUnique({
      where: { id },
    });
  }

  async updateSupplie(id: string, supplie: any): Promise<any> {
    return await this.prisma.supplier.update({
      where: { id },
      data: {
          name: supplie.name,
          logo: supplie.logo,
          state_abbreviation: supplie.stateAbbreviation,
          cost_per_kwh: supplie.costPerKwh,
          min_kwh_limit: supplie.minKwhLimit,
          total_customers: supplie.totalCustomers,
          average_customer_rating: supplie.averageCustomerRating,
      },
    });
  }

  async deleteSupplie(id: string): Promise<any> {
    return await this.prisma.supplier.delete({
      where: { id },
    });
  }
}
