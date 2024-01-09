import { Module } from '@nestjs/common';
import { SupplieModule } from './controllers/supplie.module';
@Module({
  imports: [
    SupplieModule
  ],
})
export class HttpModule {}
