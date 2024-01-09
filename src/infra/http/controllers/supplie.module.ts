import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { SupplieController } from './supplie.controller';
import { SupplieService } from '@infra/http/services/supplier.service';
import { SupplierDatabaseModule } from '@infra/database/prisma/repositories/prisma-supplies-database.module';

@Module({
  imports: [SupplierDatabaseModule],
  controllers: [SupplieController],
  providers: [SupplieService],
})
export class SupplieModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply()
      .exclude(
        { path: '', method: RequestMethod.POST },
        { path: '', method: RequestMethod.PUT },
        { path: '', method: RequestMethod.PATCH },
        { path: '', method: RequestMethod.DELETE },
      )
      .forRoutes('*');
  }
}
