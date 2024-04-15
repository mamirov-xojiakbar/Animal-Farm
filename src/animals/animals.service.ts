import { Injectable } from '@nestjs/common';
import { CreateAnimalDto } from './dto/create-animal.dto';
import { UpdateAnimalDto } from './dto/update-animal.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Animal } from './entities/animal.entity';
import { Model } from 'mongoose';

@Injectable()
export class AnimalsService {
  constructor(@InjectModel(Animal.name) private animalModel: Model<Animal>) {}

  create(createAnimalDto: CreateAnimalDto) {
    return this.animalModel.create(createAnimalDto);
  }

  findAll() {
    return this.animalModel.find();
  }

  findOne(id: number) {
    return this.animalModel.findById(id);
  }

  update(id: number, updateAnimalDto: UpdateAnimalDto) {
    return this.animalModel.findByIdAndUpdate(id, updateAnimalDto);
  }

  remove(id: number) {
    return this.animalModel.deleteOne({ _id: id });
  }
}
