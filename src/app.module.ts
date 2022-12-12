import { Module } from '@nestjs/common';
import { ItemsModule } from './items/items.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AdminsModule } from './admins/admins.module';
import { OrdersModule } from './orders/orders.module';
import { ClientModule } from './clients/client.module';
import { CarsModule } from './cars/cars.module';
import config from './config/keys';  

@Module({
  imports: [ItemsModule, MongooseModule.forRoot(config.mongoURI),AdminsModule, OrdersModule, ClientModule , CarsModule],   
  controllers: [],  
  providers: [],
})
export class AppModule {}
