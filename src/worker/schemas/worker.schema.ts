import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Speciality } from '../../speciality/schemas/speciality.schema';

export type WorkerDocument = HydratedDocument<Worker>;

@Schema({ versionKey: false })
export class Worker {
  @Prop()
  name: string;

  @Prop({ required: true })
  age: number;

  @Prop()
  experience: number;

  @Prop()
  phone_number: string;

  @Prop()
  username: string;

  @Prop()
  password: string;

  @Prop([String])
  worker_schedule: string[];

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Speciality',
  })
  speciality_id: Speciality;

  @Prop()
  hashed_token: string;
}

export const WorkerSchema = SchemaFactory.createForClass(Worker);
