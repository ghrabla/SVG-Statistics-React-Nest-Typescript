import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { OrdersService } from './orders.service';
import { OrdersSchemas } from './schemas/order.schema';
import { OrdersController } from './orders.controller';


@Module({
  imports: [MongooseModule.forFeature([{ name: 'Order', schema: OrdersSchemas }])],
  controllers: [OrdersController],
  providers: [OrdersService]
})
export class OrdersModule {}
