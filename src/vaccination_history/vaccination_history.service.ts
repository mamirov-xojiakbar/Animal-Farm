import { Injectable } from '@nestjs/common';
import { CreateVaccinationHistoryDto } from './dto/create-vaccination_history.dto';
import { UpdateVaccinationHistoryDto } from './dto/update-vaccination_history.dto';
import { InjectModel } from '@nestjs/mongoose';
import { VaccinationHistory } from './entities/vaccination_history.entity';
import { Model } from 'mongoose';

@Injectable()
export class VaccinationHistoryService {
  constructor(
    @InjectModel(VaccinationHistory.name)
    private vaccinationHistoryModel: Model<VaccinationHistory>,
  ) {}

  create(createVaccinationHistoryDto: CreateVaccinationHistoryDto) {
    return this.vaccinationHistoryModel.create(createVaccinationHistoryDto);
  }

  findAll() {
    return this.vaccinationHistoryModel.find();
  }

  findOne(id: number) {
    return this.vaccinationHistoryModel.findById(id);
  }

  update(id: number, updateVaccinationHistoryDto: UpdateVaccinationHistoryDto) {
    return this.vaccinationHistoryModel.findByIdAndUpdate(
      id,
      updateVaccinationHistoryDto,
    );
  }

  remove(id: number) {
    return this.vaccinationHistoryModel.deleteOne({ _id: id });
  }
}
