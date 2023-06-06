import { PartialType } from '@nestjs/swagger';
import { CreateCocktailDto } from './create-cocktail.dto';
import { IsNotEmpty, MaxLength, MinLength } from 'class-validator';

export class UpdateCocktailDto extends PartialType(CreateCocktailDto) {
    @IsNotEmpty()
    @MinLength(3)
    name: String;
    @IsNotEmpty()
    @MinLength(10)
    @MaxLength(120)
    instructions: String;
    additional_notes: String;
}
