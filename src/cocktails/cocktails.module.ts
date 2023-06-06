import { Module } from '@nestjs/common';
import { CocktailsService } from './cocktails.service';
import { CocktailsController } from './cocktails.controller';

import { TypeOrmModule } from '@nestjs/typeorm';
import { CocktailRespository } from './cocktails.repository';
import { Cocktail } from './entities/cocktail.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CocktailRespository, Cocktail])],
  controllers: [CocktailsController],
  providers: [CocktailsService]
})
export class CocktailsModule {}
