import { Injectable } from '@nestjs/common';
import { CreateSpecialityDto } from './dto/create-speciality.dto';
import { UpdateSpecialityDto } from './dto/update-speciality.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Speciality } from './schemas/speciality.schema';
import { Model } from 'mongoose';

@Injectable()
export class SpecialityService {
  constructor(@InjectModel(Speciality.name) private specModel: Model<Speciality>){}

  create(createSpecialityDto: CreateSpecialityDto) {
    return this.specModel.create(createSpecialityDto);
  }

  findAll() {
    return `This action returns all speciality`;
  }

  findOne(id: number) {
    return `This action returns a #${id} speciality`;
  }

  update(id: number, updateSpecialityDto: UpdateSpecialityDto) {
    return `This action updates a #${id} speciality`;
  }

  remove(id: number) {
    return `This action removes a #${id} speciality`;
  }
}
