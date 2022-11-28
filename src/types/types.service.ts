import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Type } from './interfaces/type.interface';

@Injectable()
export class TypesService {
    constructor(@InjectModel("Types") private readonly typeModel: Model<Type>){}

    async findall(): Promise<Type[]>{
        return await this.typeModel.find();
    }

    async findone(id): Promise<Type>{
        return await this.typeModel.findById(id)
    }
    
    async create(data): Promise<Type>{
        return await this.typeModel.create(data);
    }

    async delete(id): Promise<{message: String}>{
        await this.typeModel.findByIdAndDelete(id);
        return {message: "deleted success"};
    }

    async update(id,data): Promise<Type>{
        return await this.typeModel.findByIdAndUpdate(id,data)
    }
}
