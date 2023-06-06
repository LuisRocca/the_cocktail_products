
export class User {}
import { TypeOrmModule } from '@nestjs/typeorm';
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn  } from 'typeorm';
TypeOrmModule.forRoot()
@Entity()
export class Cocktail {
    
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    name: String;

    @Column()
    instructions: String;

    @Column()
    additional_notes: String;

    @Column({ default: true })
    is_deleted: Boolean;
    
    @CreateDateColumn()
    updated_at: Date;

}

