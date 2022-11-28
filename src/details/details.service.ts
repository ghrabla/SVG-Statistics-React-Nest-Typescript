import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Detail } from './interfaces/details.interface';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class DetailsService {
    constructor(@InjectModel("Details") private readonly detailsModel: Model<Detail>){}

    async findall(): Promise<Detail[]>{
        return await this.detailsModel.find();
    }

    async create(data): Promise<Detail>{
        return await this.detailsModel.create(data);
    }

    async findone(id): Promise<Detail>{
        return await this.detailsModel.findById({_id: id})
    }

    async delete(id): Promise<{message: String}>{
        await this.detailsModel.findOneAndDelete(id)
        return {message: "deleted succesfully"}
    }

    async update(id,data): Promise<Detail>{
        return this.detailsModel.findByIdAndUpdate(id,data)
    }
}
