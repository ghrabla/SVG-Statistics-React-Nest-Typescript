import { Controller,Post,Get } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { Order } from './interfaces/order.interface';
import { CreateOrderDto } from './dto/create-order.dto';

@Controller('orders')
export class OrdersController {
    constructor(private readonly createOrderDto: OrdersService){}

    @Get()
    findall(): Promise<Order[]>{
        return this.createOrderDto.findall();
    }
}
