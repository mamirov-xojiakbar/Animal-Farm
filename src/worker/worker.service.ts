import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateWorkerDto } from './dto/create-worker.dto';
import { UpdateWorkerDto } from './dto/update-worker.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Worker } from './schemas/worker.schema';
import { Model } from 'mongoose';
import { Speciality } from '../speciality/schemas/speciality.schema';

@Injectable()
export class WorkerService {
  constructor(
    @InjectModel(Worker.name) private workerModel: Model<Worker>,
    @InjectModel(Speciality.name) private specModel: Model<Speciality>,
  ) {}

  async create(createWorkerDto: CreateWorkerDto) {
    const { speciality_id } = createWorkerDto;
    const spec = await this.specModel.findById(speciality_id);

    if (!spec) {
      throw new BadRequestException('Bunday spec yoq');
    }

    const worker = await this.workerModel.create(createWorkerDto);

    return worker;
  }

  findAll() {
    return this.workerModel.find().populate('speciality_id');
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
