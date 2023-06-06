
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CocktailsModule } from './cocktails/cocktails.module';
import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { IngredientsModule } from './ingredients/ingredients.module';

require('dotenv').config();
@Module({
  imports: [TypeOrmModule.forRoot(
    {
    type: 'postgres',
    host: process.env.HOST,
    port: 5432,
    username: process.env.USER_NAME,
    password: process.env.PASWORD_DB,
    database: 'postgres',
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize: true,
    logging: true,
  }
  ), CocktailsModule, AuthModule, IngredientsModule, ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
