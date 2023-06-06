import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, HttpException } from '@nestjs/common';
import { IngredientsService } from './ingredients.service';
import { CreateIngredientDto } from './dto/create-ingredient.dto';
import { UpdateIngredientDto } from './dto/update-ingredient.dto';
import { AuthGuard } from 'src/auth/auth.guard';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
@ApiBearerAuth()
@ApiTags('ingredients')
@Controller('ingredients')
export class IngredientsController {
  constructor(private readonly ingredientsService: IngredientsService) {}
  @UseGuards(AuthGuard)
  @Post()
  create(@Body() createIngredientDto: CreateIngredientDto) {
    return this.ingredientsService.create(createIngredientDto);
  }
  @UseGuards(AuthGuard)
  @Get()
  findAll() {
    return this.ingredientsService.findAll();
  }
  @UseGuards(AuthGuard)
  @Get(':id')
  async findOne(@Param('id') id: string) {
    const response = await this.ingredientsService.findOne(+id);
    if ( response.length === 0) throw new HttpException('COCKTAIL_NOT_FOUND', 404)
    else return response
  }
  @UseGuards(AuthGuard)
  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateIngredientDto: UpdateIngredientDto) {
    const response = await this.ingredientsService.update(+id, updateIngredientDto);
    if (response[1] === 0) throw new HttpException('INCORRECT_PARAMETER', 403)
    else return { response: 'record successfully modified'}
  }
  @UseGuards(AuthGuard)
  @Delete(':id')
  async remove(@Param('id') id: string) {
    const response = await this.ingredientsService.remove(+id);
    if (response[1] === 0) throw new HttpException('INCORRECT_PARAMETER', 403)
    else return { response: 'record successfully deleted'}
  }
}
