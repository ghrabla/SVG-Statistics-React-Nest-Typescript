import { Controller,Post,Get, Param, Body, Delete, Put } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { Order } from './interfaces/order.interface';
import { CreateOrderDto } from './dto/create-order.dto';

@Controller('orders')
export class OrdersController {
    constructor(private readonly serviceOrder: OrdersService){}

    @Get()
    findall(): Promise<Order[]>{
        return this.serviceOrder.findall(); 
    }

    @Get(':id')
    findone(@Param('id') id): Promise<Order>{
        return this.serviceOrder.findone(id);
    }

    @Post()
    create(@Body() data: CreateOrderDto): Promise<Order>{
        return this.serviceOrder.create(data);
    }

    @Delete(':_id')
    remove(@Param() _id: String){
       return this.serviceOrder.remove(_id);
    }

    @Put(':_id')
    update(@Param() _id: String,@Body() data: CreateOrderDto): Promise<Order>{
       return this.serviceOrder.update(_id,data)
    }
}
