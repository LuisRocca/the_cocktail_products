import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Query, HttpException } from '@nestjs/common';
import { CocktailsService } from './cocktails.service';
import { CreateCocktailDto } from './dto/create-cocktail.dto';
import { UpdateCocktailDto } from './dto/update-cocktail.dto';
import { AuthGuard } from 'src/auth/auth.guard';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
@ApiBearerAuth()
@ApiTags('cocktails')
@Controller('cocktails')
export class CocktailsController {
  
  constructor(private readonly cocktailsService: CocktailsService) {}
  @UseGuards(AuthGuard)
  @Post()
  create(@Body() createCocktailDto: CreateCocktailDto) {
    this.cocktailsService.create(createCocktailDto);
    return {response : "Cocktail successfully create"}
  }
  @UseGuards(AuthGuard)
  @Get()
  findAll(@Query('order') order: string,@Query('search') search: string) {
    if (order && search) {
      if (order === 'asc' || order === 'desc') return this.cocktailsService.findAllByOrderAndSearch(order,search);
      else throw new HttpException('INCORRECT_PARAMETER', 403)   
   } else if ( order ){
     if (order === 'asc' || order === 'desc') return this.cocktailsService.findAllByOrder(order);
     else throw new HttpException('INCORRECT_PARAMETER', 403)
   } else if (search ){
    return this.cocktailsService.findAllBySearch(search);
   } else return this.cocktailsService.findAll();
  }

  @UseGuards(AuthGuard)
  @Get(':id')
  async findOne(@Param('id') id: string) {
     const response = await this.cocktailsService.findOne(+id)
     if ( response.length === 0) throw new HttpException('COCKTAIL_NOT_FOUND', 404)
     else return response 
    
    
  }
  @UseGuards(AuthGuard)
  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateCocktailDto: UpdateCocktailDto) {
    const response = await this.cocktailsService.update(+id, updateCocktailDto);
    if (response[1] === 0) throw new HttpException('INCORRECT_PARAMETER', 403)
    else return { response: 'record successfully modified'}
    
  }
  @UseGuards(AuthGuard)
  @Delete(':id')
  async remove(@Param('id') id: string) {
    const response = this.cocktailsService.remove(+id);
    if (response[1] === 0) throw new HttpException('INCORRECT_PARAMETER', 403)
    else return { response: 'record successfully deleted'}
  }
}
