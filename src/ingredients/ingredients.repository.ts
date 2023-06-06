import { EntityRepository, Repository } from "typeorm";
import { Ingredient } from "./entities/ingredient.entity";

@EntityRepository(Ingredient)
export class IngredientRespository extends Repository<Ingredient> {}