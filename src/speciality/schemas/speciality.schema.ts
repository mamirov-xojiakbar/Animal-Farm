import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type SpecialityDocument = HydratedDocument<Speciality>;

@Schema()
export class Speciality {
  @Prop({ required: true })
  title: string;

  @Prop()
  description: string;
}

export const SpecialitySchema = SchemaFactory.createForClass(Speciality);
