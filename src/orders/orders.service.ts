import { Injectable } from '@nestjs/common';
import { Order } from './interfaces/order.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
@Injectable()
export class OrdersService {
    constructor(@InjectModel('Order') private readonly oderModel: Model<Order>){}

    async findall(): Promise<Order[]>{
        return await this.oderModel.find().populate("id_client")
    }

    async findone(id: String): Promise<Order>{
        return await this.oderModel.findById({_id: id})
    }

    async create(order: Order): Promise<Order>{
        return await this.oderModel.create(order)
    }
}
