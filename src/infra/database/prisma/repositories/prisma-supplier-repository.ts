import { SupplieRepository } from '@app/repositories/Supplie/supplie';
import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import Supplie from '@domain/Supplier/supplie';
export interface SupplieGet {
  id: string;
  name: string;
  logo: string;
  state_abbreviation: string;
  cost_per_kwh: number;
  min_kwh_limit: number;
  total_customers: number;
  average_customer_rating: number;
}

@Injectable()
export class PrismaSupplierRepository implements SupplieRepository {
  constructor(private prisma: PrismaService) {}

  async createSupplie(supplie: Supplie): Promise<string> {
    try {
      if (supplie instanceof Error) {
        throw new BadRequestException(supplie.message, {
          cause: supplie,
          description: supplie.stack,
        });
      }
      const data = {
        name: supplie.props.name,
        logo: supplie.props.logo,
        state_abbreviation: supplie.props.stateAbbreviation,
        cost_per_kwh: supplie.props.costPerKwh,
        min_kwh_limit: supplie.props.minKwhLimit,
        total_customers: supplie.props.totalCustomers,
        average_customer_rating: supplie.props.averageCustomerRating,
      };

      const { id } = await this.prisma.supplier.create({
        data,
        select: {
          id: true,
        },
      });

      return id;
    } catch (error: any) {
      throw new BadRequestException(error.message);
    }
  }

  async getSupplier(): Promise<any[]> {
    return await this.prisma.supplier.findMany();
  }

  async getSupplieById(id: string): Promise<any> {
    try{
    const supplie = await this.prisma.supplier.findUnique({
      where: { id },
    });

    if(!supplie?.id){
     return []
    }
   return supplie
  
  }catch(error:any){
      throw new BadRequestException('Fornecedor não encontrado!')
    }
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
    try {
      return await this.prisma.supplier.delete({
        where: { id },
      });
    } catch (error: any) {
      throw new BadRequestException("Erro ao deletar fornecedor!");
    }
  }
}
