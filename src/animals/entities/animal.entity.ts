import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { AnimalType } from '../../animal_type/entities/animal_type.entity';

export type AnimalDocument = HydratedDocument<Animal>;

@Schema()
export class Animal {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'AnimalType' })
  animalType_id: AnimalType;

  @Prop()
  photos: string[];

  @Prop()
  unique_id: string
}

export const AnimalSchema = SchemaFactory.createForClass(Animal);
