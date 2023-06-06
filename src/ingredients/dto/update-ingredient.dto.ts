import { PartialType } from '@nestjs/swagger';
import { CreateIngredientDto } from './create-ingredient.dto';
import { IsNotEmpty, MaxLength, MinLength } from 'class-validator';

export class UpdateIngredientDto extends PartialType(CreateIngredientDto) {
    @IsNotEmpty()
    @MinLength(3)
    @MaxLength(15)
    name: String;
}
