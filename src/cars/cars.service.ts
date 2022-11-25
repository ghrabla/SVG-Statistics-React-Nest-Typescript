import { Injectable } from '@nestjs/common';
import { Cars } from './interfaces/cars.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';


@Injectable()
export class CarsService {

    constructor(@InjectModel('Cars') private readonly carsModel: Model<Cars>) {}

   async findAll(): Promise<Cars[]> {
        return await this.carsModel.find();
    }

    async findOne(id: string): Promise<Cars> {
        return await this.carsModel.findOne({ _id: id });  
    }

    async create(cars: Cars): Promise<Cars> {
        const newCars = new this.carsModel(cars);
        return await newCars.save();
    }

    async delete(id: string): Promise<Cars> {
        return await this.carsModel.findByIdAndRemove(id);
    }

    async update(id: string, cars: Cars): Promise<Cars> {
        return await this.carsModel.findByIdAndUpdate(id, cars, { new: true });
    }

}
