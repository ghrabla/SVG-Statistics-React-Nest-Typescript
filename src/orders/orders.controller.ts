import { Controller,Post,Get, Param, Body } from '@nestjs/common';
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
        return this.serviceOrder.findone(id)
    }

    @Post()
    create(@Body() data): Promise<Order>{
        return this.serviceOrder.create(data)
    }
}
