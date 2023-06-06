import { IsNotEmpty, MaxLength, MinLength } from "class-validator";

export class CreateIngredientDto {
    @IsNotEmpty()
    @MinLength(3)
    @MaxLength(15)
    name: String;
}
