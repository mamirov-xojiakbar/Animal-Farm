import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument, now } from 'mongoose';
import { Animal } from '../../animals/entities/animal.entity';
import { Vaccine } from '../../vaccine/entities/vaccine.entity';
import { Worker } from '../../worker/entities/worker.entity';

export type VaccinationHistoryDocument = HydratedDocument<VaccinationHistory>;

@Schema()
export class VaccinationHistory {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Animal' })
  animal_id: Animal;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Vaccine' })
  vaccine_id: Vaccine;

  @Prop()
  vaccinated_date: Date;

  @Prop()
  next_vaccination_date: Date;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Worker' })
  worker_id: Worker;
}

export const VaccinationHistorySchema =
  SchemaFactory.createForClass(VaccinationHistory);
