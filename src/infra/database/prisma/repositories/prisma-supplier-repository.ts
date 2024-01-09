import { SupplieRepository } from "@app/repositories/Supplie/supplie";
import { BadRequestException, Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma.service";





@Injectable()
export class PrismaSupplierRepository implements SupplieRepository{
  constructor(private prisma: PrismaService) {}

   async createSupplie(supplie: any): Promise<any> {
       if (supplie instanceof Error) {
           throw new BadRequestException(supplie.message, {
               cause: supplie,
               description: supplie.stack,
           });
       }
   const { ...supplieProps } = supplie.props;

    const { id } = await this.prisma.supplier.create({
         data: {
              ...supplieProps,
         },
         select: {
              id: true,
         },
    });

    return id;

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
              data: supplie,
         });
    }

    async deleteSupplie(id: string): Promise<any> {
         return await this.prisma.supplier.delete({
              where: { id },
         });
    }

    
}