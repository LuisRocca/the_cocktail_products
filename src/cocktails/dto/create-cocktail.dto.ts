import { IsNotEmpty, MaxLength, MinLength } from "class-validator";

export class CreateCocktailDto {
    @IsNotEmpty()
    @MinLength(3)
    name: String;
    @IsNotEmpty()
    @MinLength(10)
    @MaxLength(120)
    instructions: String;
    additional_notes: String;
}
