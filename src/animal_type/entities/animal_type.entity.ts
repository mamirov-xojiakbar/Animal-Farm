import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type AnimalTypeDocument = HydratedDocument<AnimalType>;

@Schema()
export class AnimalType {
  @Prop({ required: true })
  name: string;

  @Prop()
  description: string;
}

export const AnimalTypeSchema = SchemaFactory.createForClass(AnimalType);
