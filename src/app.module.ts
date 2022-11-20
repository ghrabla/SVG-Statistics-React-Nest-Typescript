import { Module } from '@nestjs/common';
import { ItemsModule } from './items/items.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AdminsController } from './admins/admins.controller';
import { AdminsService } from './admins/admins.service';
import { AdminsModule } from './admins/admins.module'; 
import config from './config/keys'; 

@Module({
  imports: [ItemsModule, MongooseModule.forRoot(config.mongoURI), AdminsModule],
  controllers: [AdminsController],
  providers: [AdminsService],
})
export class AppModule {}
