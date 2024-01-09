import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { SupplieRepository } from '@app/repositories/supplie';
import { PrismaSupplierRepository } from './prisma-supplier-repository';

@Module({
  providers: [
    PrismaService,
    { provide: SupplieRepository, useClass: PrismaSupplierRepository },
  ],
  exports: [{ provide: SupplieRepository, useClass: PrismaSupplierRepository }],
})
export class SupplierDatabaseModule {}
