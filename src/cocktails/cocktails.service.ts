import { Injectable } from '@nestjs/common';
import { CreateCocktailDto } from './dto/create-cocktail.dto';
import { UpdateCocktailDto } from './dto/update-cocktail.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { CocktailRespository } from './cocktails.repository';

@Injectable()
export class CocktailsService {
  constructor(@InjectRepository(CocktailRespository) private cocktailRespository: CocktailRespository){}

  db = this.cocktailRespository.manager;

  async create(createCocktailDto: CreateCocktailDto) {
    const {name,
      instructions,
      additional_notes} = createCocktailDto;
    return await this.db.query(`INSERT INTO cocktail (name, instructions,additional_notes) VALUES ('${name}', '${instructions}', '${additional_notes}');`);
  }

  async findAll() {
    return await this.db.query('SELECT * FROM cocktail WHERE is_deleted = true');
  }
  async findAllByOrder(order) {
    return await this.db.query(`SELECT * FROM cocktail ORDER BY name ${order.toUpperCase()};`)
  }

  async findOne(id: number) {
    return await this.db.query(`SELECT * FROM cocktail WHERE id = ${id}`);
  }

  async update(id: number, updateCocktailDto: UpdateCocktailDto) {
    const {name,
      instructions,
      additional_notes} = updateCocktailDto;
    return await this.db.query(`UPDATE  cocktail SET name='${name}', instructions ='${instructions}', additional_notes = '${additional_notes}' WHERE id = ${id};`);
  }

  async remove(id: number) {
    return await this.db.query(`UPDATE  cocktail SET is_deleted = false WHERE id = ${id};`);
  }
}
