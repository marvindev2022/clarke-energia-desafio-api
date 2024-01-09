import { createSupplieDTO } from '@infra/http/models/Supplie/create';
import { EditSupplieDTO } from '@infra/http/models/Supplie/edit';
import { SupplieService } from '@infra/http/services/supplier/supplier.service';
import {
  BadRequestException,
  Body,
  Controller,
  Param,
  Post,
  Put,
  Get,
  Delete,
} from '@nestjs/common';

@Controller('supplies')
export class SupplieController {
  constructor(private productService: SupplieService) {}

  @Post('create')
  async create(@Body() createSupplieDTO: createSupplieDTO) {
    const id = await this.productService.create(createSupplieDTO);

    if (id instanceof Error) throw new BadRequestException(id.message);

    return { message: 'Produto cadastrado com sucesso!' };
  }

  @Get(':id/find')
  async findSupplieById(@Param('id') id: string) {
    const product = await this.productService.findSupplieById(id);

    return product;
  }

  @Get('find')
  async findSupplier() {
    const supplies = await this.productService.findSupplier();

    return supplies;
  }

  @Put(':id/edit')
  async edit(@Param('id') id: string, @Body() editSupplieDTO: EditSupplieDTO) {
    const product = await this.productService.updateSupplie(id, editSupplieDTO);

    return product;
  }

  @Delete(':id/delete')
  async delete(@Param('id') id: string) {
    const product = await this.productService.deleteSupplie(id);

    return product;
  }
}
