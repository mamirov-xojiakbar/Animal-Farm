import { Module } from '@nestjs/common';
import { AnimalsService } from './animals.service';
import { AnimalsController } from './animals.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Animal, AnimalSchema } from './entities/animal.entity';

@Module({
  imports: [MongooseModule.forFeature([
    {name: Animal.name, schema: AnimalSchema}
  ])],
  controllers: [AnimalsController],
  providers: [AnimalsService],
})
export class AnimalsModule {}
