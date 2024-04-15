import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type VaccineDocument = HydratedDocument<Vaccine>;

@Schema()
export class Vaccine {
  @Prop()
  type: string;

  @Prop()
  name: string;
}

export const VaccineSchema = SchemaFactory.createForClass(Vaccine);
