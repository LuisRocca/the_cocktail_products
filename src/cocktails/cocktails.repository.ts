import { EntityRepository, Repository } from 'typeorm';
import { Cocktail } from './entities/cocktail.entity';

@EntityRepository(Cocktail)
export class CocktailRespository extends Repository<Cocktail> {}