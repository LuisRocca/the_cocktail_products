import { Injectable } from '@nestjs/common';
import { CreateIngredientDto } from './dto/create-ingredient.dto';
import { UpdateIngredientDto } from './dto/update-ingredient.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { IngredientRespository } from './ingredients.repository';

@Injectable()
export class IngredientsService {

  constructor(@InjectRepository(IngredientRespository) private ingredientRepository: IngredientRespository){}
 
  db = this.ingredientRepository.manager;

  async create(createIngredientDto: CreateIngredientDto) {
    const today = new Date(); // esto facilmente podria ser un trigger 
    const year = today.getFullYear(); // pero tendria que ser creado en la db directamente 
    const month = today.getMonth() + 1; 
    const day = today.getDate()
    const {name} = createIngredientDto
    return await this.db.query(`INSERT INTO ingredient (name, created_at) VALUES ('${name}', '${year}-${month}-${day}');`);
  }

  async findAll() {
    return await this.db.query('SELECT * FROM ingredient');
  }

  async findOne(id: number) {
    return await this.db.query(`SELECT * FROM ingredient WHERE id = ${id}`);
  }

  async update(id: number, updateIngredientDto: UpdateIngredientDto) {
    const { name } = updateIngredientDto;
    return await this.db.query(`UPDATE ingredient SET name='${name}' WHERE id = ${id};`);
  }

  async remove(id: number) {
    return await this.db.query(`UPDATE  ingredient SET is_deleted = false WHERE id = ${id};`);
  }
}
