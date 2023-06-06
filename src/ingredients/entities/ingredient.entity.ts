import { TypeOrmModule } from "@nestjs/typeorm";
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from "typeorm";
TypeOrmModule.forRoot()

@Entity()
export class Ingredient {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    name: String;

    @Column({ default: true })
    is_deleted: Boolean;

    @Column()
    created_at: String;

    @CreateDateColumn()
    updated_at: Date;
}
