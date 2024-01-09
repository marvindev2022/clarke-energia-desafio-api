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

@Controller('supplier')
export class SupplieController {
  constructor(private supplieService: SupplieService) {}

  @Post('create')
  async create(@Body() createSupplieDTO: createSupplieDTO) {
    const supplie = await this.supplieService.create(createSupplieDTO);
    if (supplie instanceof Error)
      throw new BadRequestException(supplie.message);

    return { message: 'Produto cadastrado com sucesso!' };
  }

  @Get(':id/find')
  async findSupplieById(@Param('id') id: string) {
    const supplie = await this.supplieService.findSupplieById(id);

    return supplie;
  }

  @Get('find')
  async findSupplier() {
    const supplies = await this.supplieService.findSupplier();

    return supplies;
  }

  @Put(':id/edit')
  async edit(@Param('id') id: string, @Body() editSupplieDTO: EditSupplieDTO) {
    const supplie = await this.supplieService.updateSupplie(id, editSupplieDTO);

    return supplie;
  }

  @Delete(':id/delete')
  async delete(@Param('id') id: string) {
    const supplie = await this.supplieService.deleteSupplie(id);
    if (supplie instanceof Error)
      throw new BadRequestException('Erro ao deletar produto!');
    return 'Produto deletado com sucesso!';
  }
}
