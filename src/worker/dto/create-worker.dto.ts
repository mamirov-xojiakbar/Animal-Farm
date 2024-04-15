import mongoose from 'mongoose';

export class CreateWorkerDto {
  name: string;

  age: number;

  experience: number;

  phone_number: string;

  username: string;

  password: string;

  worker_schedule: string[];

  specialty_id: mongoose.Schema.Types.ObjectId;
}
