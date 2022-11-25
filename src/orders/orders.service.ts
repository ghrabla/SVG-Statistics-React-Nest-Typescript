import { Injectable } from '@nestjs/common';
import { Order } from './interfaces/order.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
@Injectable()
export class OrdersService {
    constructor(@InjectModel('Order') private readonly oderModel: Model<Order>){}

    async findall(): Promise<Order[]>{
        return await this.oderModel.find().populate("id_client").populate("id_car")
    }

    async findone(id: String): Promise<Order>{
        return await this.oderModel.findById({_id: id})
    }

    async create(order: Order): Promise<Order>{
        return await this.oderModel.create(order)
    }

    async remove(_id: String): Promise<{message: String}>{
        await this.oderModel.findByIdAndRemove(_id)
        return {message: "deleted succesfully"}
    }

    async update(_id: String,order:Order): Promise<Order>{
        return this.oderModel.findByIdAndUpdate(_id,order);
    }
}
