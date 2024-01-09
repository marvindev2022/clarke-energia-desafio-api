import { Module } from '@nestjs/common';
import { SupplieModule } from './controllers/supplie/supplie.module';
@Module({
  imports: [
    SupplieModule
  ],
})
export class HttpModule {}
