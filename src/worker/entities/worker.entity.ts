import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Specialty } from '../../speciality/entities/speciality.entity';

export type WorkerDocument = HydratedDocument<Worker>;

@Schema({ versionKey: false })
export class Worker {
  @Prop({ required: true })
  name: string;

  @Prop()
  age: number;

  @Prop()
  experience: number;

  @Prop()
  phone_number: string;

  @Prop()
  username: string;

  @Prop()
  password: string;

  @Prop()
  worker_schedule: string[];

  @Prop()
  token: string;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Specialty',
  })
  specialty_id: Specialty;
}

export const WorkerSchema = SchemaFactory.createForClass(Worker);
