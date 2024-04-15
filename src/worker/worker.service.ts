import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateWorkerDto } from './dto/create-worker.dto';
import { UpdateWorkerDto } from './dto/update-worker.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Worker } from './entities/worker.entity';
import { Model } from 'mongoose';
import { Specialty } from '../speciality/entities/speciality.entity';

@Injectable()
export class WorkerService {
  constructor(
    @InjectModel(Worker.name) private workerModel: Model<Worker>,
    @InjectModel(Specialty.name) private specModel: Model<Specialty>,
  ) {}

  async create(createWorkerDto: CreateWorkerDto) {
    const { specialty_id } = createWorkerDto;
    const spec = await this.specModel.findById(specialty_id);

    if (!spec) {
      throw new BadRequestException('no specialty');
    }

    const worker = await this.workerModel.create(createWorkerDto);
    return worker;
  }

  findAll() {
    return this.workerModel.find().populate('specialty_id');
  }

  findOne(id: number) {
    return `This action returns a #${id} worker`;
  }

  update(id: number, updateWorkerDto: UpdateWorkerDto) {
    return `This action updates a #${id} worker`;
  }

  remove(id: number) {
    return `This action removes a #${id} worker`;
  }
}
