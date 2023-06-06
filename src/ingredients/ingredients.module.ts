import { Module } from '@nestjs/common';
import { IngredientsService } from './ingredients.service';
import { IngredientsController } from './ingredients.controller';

import { TypeOrmModule } from '@nestjs/typeorm';
import { IngredientRespository } from './ingredients.repository';
import { Ingredient } from './entities/ingredient.entity';

@Module({
  imports:[TypeOrmModule.forFeature([IngredientRespository, Ingredient])],
  controllers: [IngredientsController],
  providers: [IngredientsService]
})
export class IngredientsModule {}
