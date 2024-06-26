import { Module } from '@nestjs/common';
import { VaccineService } from './vaccine.service';
import { VaccineController } from './vaccine.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Vaccine, VaccineSchema } from './entities/vaccine.entity';

@Module({
  imports: [MongooseModule.forFeature([
    {name: Vaccine.name, schema: VaccineSchema}
  ])],
  controllers: [VaccineController],
  providers: [VaccineService],
})
export class VaccineModule {}
