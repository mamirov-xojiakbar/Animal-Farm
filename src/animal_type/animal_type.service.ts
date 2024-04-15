import { Injectable } from '@nestjs/common';
import { CreateAnimalTypeDto } from './dto/create-animal_type.dto';
import { UpdateAnimalTypeDto } from './dto/update-animal_type.dto';
import { InjectModel } from '@nestjs/mongoose';
import { AnimalType } from './entities/animal_type.entity';
import { Model } from 'mongoose';

@Injectable()
export class AnimalTypeService {
  constructor(
    @InjectModel(AnimalType.name) private animalTypeModel: Model<AnimalType>,
  ) {}

  create(createAnimalTypeDto: CreateAnimalTypeDto) {
    return this.animalTypeModel.create(createAnimalTypeDto);
  }

  findAll() {
    return this.animalTypeModel.find();
  }

  findOne(id: number) {
    return this.animalTypeModel.findById(id);
  }

  update(id: number, updateAnimalTypeDto: UpdateAnimalTypeDto) {
    return this.animalTypeModel.findByIdAndUpdate(id, updateAnimalTypeDto);
  }

  remove(id: number) {
    return this.animalTypeModel.deleteOne({ _id: id });
  }
}
