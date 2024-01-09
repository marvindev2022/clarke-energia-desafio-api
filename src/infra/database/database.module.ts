import { Module } from '@nestjs/common';
import { SupplierDatabaseModule } from './prisma/repositories/prisma-supplies-database.module';

@Module({
  imports: [
    SupplierDatabaseModule,
  ],
})
export class DatabaseModule {}
