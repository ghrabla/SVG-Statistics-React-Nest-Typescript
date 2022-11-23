import { Module } from '@nestjs/common';
import { ItemsModule } from './items/items.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AdminsModule } from './admins/admins.module';
import { OrdersController } from './orders/orders.controller';
import { OrdersModule } from './orders/orders.module';
import { ClientController } from './clients/client.controller';
import { ClientModule } from './clients/client.module';
import config from './config/keys';  

@Module({
  imports: [ItemsModule, MongooseModule.forRoot(config.mongoURI), AdminsModule, OrdersModule, ClientModule],   
  controllers: [OrdersController, ClientController],  
  providers: [],
})
export class AppModule {}
