import { Module } from '@nestjs/common';
import { CarsController } from './cars.controller';
import { CarsService } from './cars.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CarsSchema } from './schemas/cars.schemas';


@Module({
  imports: [MongooseModule.forFeature([{ name: 'Cars', schema: CarsSchema }])],   
  controllers: [CarsController],  
  providers: [CarsService],
})
export class CarsModule {}
